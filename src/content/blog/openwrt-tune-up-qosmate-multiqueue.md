---
title: Tuning the Home OpenWrt — Service Diet, QoSmate Rates, and virtio Multiqueue
description: A hands-on tune-up of my OpenWrt VM on PVE — removing 23 unused packages, fixing QoS rates to 93% of line rate, and giving the virtual NICs four queues each.
pubDate: 2026-11-25
tags: [openwrt, PVE, QoS, homelab]
---

## Introduction

My home router is OpenWrt 25.12 running as a VM on Proxmox VE, behind a 1000M down / 100M up PPPoE line. Over time it had accumulated a lot of cruft, and a few settings had quietly drifted away from what the hardware could actually do. This post is a reminder for myself of one afternoon's tune-up — hopefully it helps you too.

## 1. A diet for the service list

52 services had autostart enabled. Auditing them one by one, 12 were doing nothing useful in my setup — no modem, no printer, no iPhone tethering, no disks to RAID:

- `modemmanager`, `usbmuxd` (+ its `dbus` / libimobiledevice stack), `ttyd`, `p910nd`
- `avahi-daemon`, `wsdd2`, `mdadm`, `lm-sensors`, `cifs-mount`, `netserver` (netperf)
- `sqm` — this one mattered: SQM and QoSmate are two QoS systems, and having both installed is an invitation for them to fight. QoSmate stays, SQM goes.

Stopping and disabling wasn't enough — this build is a plain writable ext4 rootfs (no ROM/overlay split), so I uninstalled all 23 related packages with `apk`. Freed ports closed, WAN and LuCI verified healthy afterwards.

One lesson worth writing down: **sync the change back into the firmware build repo.** My OpenWrt is built from a config repo; if the package lists there still declare the removed packages, the next firmware build resurrects everything. The runtime and the repo now agree.

## 2. QoSmate rates: 93% of the line, not 99.9%

QoSmate's HFSC shaping only controls the queue if the shaper is the bottleneck. My rates were set to 999 Mbit down (≈99.9% of the gigabit line — the queue forms at the ISP's equipment instead of in my shaper, and HFSC ends up shaping nothing) and 80 Mbit up (only 80% of the real 100 Mbit uplink — leaving bandwidth on the table).

Fixed to ≈93% of line rate in both directions:

```text
qosmate.settings.DOWNRATE = 930000   # kbit/s
qosmate.settings.UPRATE   = 93000    # kbit/s
```

Verified with `tc class show`: the HFSC root classes rescaled to 930 Mbit / 93 Mbit and every subclass followed.

## 3. virtio multiqueue on the PVE side

The OpenWrt VM's two virtio NICs had no `queues=` parameter, so they ran **single-queue**: every WAN packet interrupt landed on one vCPU while the other three watched. On the PVE host:

```bash
qm shutdown 100
qm set 100 -net0 virtio=<MAC>,bridge=vmbr0,queues=4
qm set 100 -net1 virtio=<MAC>,bridge=vmbr1,queues=4
qm start 100
```

(A VM power-cycle is required — budget a few minutes of home-network downtime, and tell your family first.)

After the reboot, inside OpenWrt:

```text
$ ls /sys/class/net/eth0/queues/ | grep -c rx
4
```

and `/proc/interrupts` shows the four `virtio*-input.0..3` queues spread across all four vCPUs instead of piled onto one.

## 4. What I deliberately did *not* change

**Flow offloading stays off.** It is tempting for the throughput numbers, but offloaded flows bypass the CPU path that HFSC shaping and rule-based proxying (OpenClash in fake-ip + rule mode) depend on. With shaping and per-packet rules in play, per-packet CPU is the price of control — multiqueue is how you make that price affordable.

Also already correct, so untouched: PPPoE MTU 1492 with MSS clamping in both directions, BBR, 16 MB socket buffers, NIC offloads (TSO/GSO/GRO) on, packet steering on.

## Result

One vCPU no longer eats the whole WAN, the shaper actually owns the queue in both directions, and 23 packages of attack surface and boot noise are gone. The router feels boring again — which is exactly what I want from a router.
