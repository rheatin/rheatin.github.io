---
title: Install OpenWrt in PVE with LXC
description: Running OpenWrt as an LXC container on Proxmox VE — notes from my homelab.
pubDate: 2022-08-01
tags: [openwrt, PVE, LXC]
---

## Introduction

> References:
>
> - https://www.right.com.cn/forum/thread-4053183-1-1.html
> - https://blog.csdn.net/kangzuer/article/details/115373587

This article is just a **reminder** for myself, not a tutorial. Hopefully it helps you too.

My configuration:

| Accessory   | Type                            |
|:-----------:|:-------------------------------:|
| CPU         | Intel i7-6700                   |
| MOTHERBOARD | ASUS Z170 Pro Gaming            |
| NET ADAPTER | RTL 8125B (2 × 2.5G RJ45)       |
| DISKS       | Q200EX 480G, PM961A 256G, ZFS 1TB |
| SYSTEM      | PVE 7.2-4                       |

The network topology:

![topology](/images/topology.jpg)

> **Tip:** I found [**pve-edge-kernel**](https://github.com/fw867/pve-edge-kernel), which seems to cover the configuration and template of LXC OpenWrt. Anyone interested can give it a try.

## Steps

### Create the LXC template

I used the **slim** release of [nanopi-openwrt](https://github.com/klever1988/nanopi-openwrt) by **klever1988** — simple enough with the basic extensions installed (FULLCONE, Argon Theme).

> **Caution:** If your PVE lacks FULLCONE, you may need to build it from source. See this [tutorial](https://blog.sxx1314.com/linux/587.html).

Download the firmware:

```bash
cd /var/lib/vz/template/cache/
wget https://github.com/klever1988/nanopi-openwrt/releases/download/2022-07-08/x86-slim.img.gz
```

> **Tip:** If your image is already `rootfs.tar.gz`, jump to [Create the LXC container](#create-the-lxc-container).

Mount all partitions in the raw disk image:

```bash
kpartx -av x86-slim.img
```

Under `/dev/mapper` there are two `loopXpY` devices — one contains the OpenWrt system (e.g. `loop0p1`).

Mount it to `/mnt`:

```bash
mount /dev/mapper/loop0p1 /mnt
```

Package it as `rootfs.tar.gz`:

```bash
tar zcvf openwrt-x86-64-generic-rootfs.tar.gz /mnt/
```

Unmount:

```bash
umount /mnt
kpartx -d x86-slim.img
```

### Create the LXC container

#### PVE CLI commands

```bash
pct create <vmid> <ostemplate> [OPTIONS]
```

| Name         | Type              | Description                                              |
|:------------:|:-----------------:|:--------------------------------------------------------:|
| `vmid`       | `integer` (1-N)   | Unique ID of the VM                                      |
| `ostemplate` | `string`          | OS template or backup file (`local:vztmpl/...tar.gz`)    |

**Options:**

| Name       | Type                        | Description                     |
|:----------:|:---------------------------:|:-------------------------------:|
| `--rootfs` | `storage:disksize`          | Use volume as container root    |
| `--ostype` | `alpine` or `debian` etc.   | OS type                         |
| `--hostname` | `string`                  | Set a hostname                  |
| `--arch`   | `amd64`, `arm64`, `armhf`, `i386` | Architecture type       |
| `--cores`  | `integer` (1-8192)          | Number of cores assigned        |
| `--memory` | `integer` (16-N)            | Amount of RAM in MB             |
| `--swap`   | `integer` (0-N)             | Amount of swap in MB            |

> **Tip:** More details in the [PCT docs](https://pve.proxmox.com/pve-docs/pct.1.html).

#### Initialize a LXC container

```bash
pct create 100 \
    local:vztmpl/openwrt-x86-64-generic-rootfs.tar.gz \
    --rootfs local-lvm:8 \
    --ostype unmanaged \
    --hostname openwrt \
    --arch amd64 \
    --cores 4 \
    --memory 1024 \
    --swap 0 \
    -net0 bridge=vmbr1,name=eth1
```

#### Modify the container configuration

Add the following to `/etc/pve/lxc/100.conf`:

```bash
# openwrt.common.conf already exists in PVE
lxc.include: /usr/share/lxc/config/openwrt.common.conf
# allow /dev/ppp for PPPOE dial-up
lxc.cgroup.devices.allow: c 108:0 rwm
# assign a hookscript
hookscript: local:snippets/hookscript.pl
# passthrough the physical NIC
lxc.net.1.type: phys
lxc.net.1.link: enp6s0
lxc.net.1.flags: up
```

> **Caution:** The container will always load `/usr/share/lxc/config/openwrt.common.conf` whether you add it to the config or not.

> **Important:** If you use **openclash** in the container and hit an error like *"Unable to set capabilities [sth.] ..."*, you need to modify `openwrt.common.conf`. Comment out these two lines in `/usr/share/lxc/config/openwrt.common.conf`:
>
> ```bash
> # lxc.cap.drop is meant to discard some capabilities
> lxc.cap.drop = sys_ptrace
> lxc.cap.drop = sys_resource
> ```

#### Create the hookscript

Copy the official example `guest-example-hookscript.pl` and modify it:

```bash
mkdir /var/lib/vz/snippets
cp /usr/share/pve-docs/examples/guest-example-hookscript.pl /var/lib/vz/snippets/hookscript.pl
```

Edit around line 36 — you'll see:

```python
    # Second phase 'post-start' will be executed after the guest
    # successfully started.

    print "$vmid started successfully.\n";
```

Add these lines to enable **TUN** and **PPPOE**:

```python
    # Second phase 'post-start' will be executed after the guest
    # successfully started.
    system("lxc-device add -n $vmid /dev/ppp");
    system("lxc-device add -n $vmid /dev/net/tun");
    print "$vmid started successfully.\n";
```

### Start the LXC container

```bash
pct start 100
lxc-attach 100
```

Configure the network in `/etc/config/network`:

```bash
config device
        option name 'br-lan'
        option type 'bridge'
        list ports 'eth1'

config interface 'lan'
        option device 'br-lan'
        option proto 'static'
        option ipaddr '192.168.1.5'
        option netmask '255.255.255.0'

config interface 'wan'
        option device 'enp6s0'
        option proto 'pppoe'
        option username 'xxxxxx'
        option password 'xxxxxx'
```

Restart the network and firewall:

```bash
/etc/init.d/network restart
/etc/init.d/firewall restart
```

## Start surfing

You should now have Internet access. Add further configuration such as plugins through the web interface at http://192.168.1.5.
