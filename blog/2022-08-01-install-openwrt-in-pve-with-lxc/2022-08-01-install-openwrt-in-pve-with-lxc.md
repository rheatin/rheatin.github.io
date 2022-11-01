---
slug: install-openwrt-in-pve-with-lxc
title: Install Openwrt in PVE with LXC
authors: [rheatin]
tags: [openwrt, PVE, LXC]
---

## Preface
This artical is just a reminder for myself, not a tutorial. Hopefully it helps you too.😄

My configuration is as below:

| Accessory   | Type                            |
|:-----------:|:-------------------------------:|
| CPU         | Intel i7-6700                   |
| MOTHERBOARD | ASUS Z170 Pro Gaming            |
| NET ADAPTER | RTL 8125B(with 2 2.5G RJ45)     |
| DISKS       | Q200EX 480G,PM961A 256G,ZFS:1TB |
| SYSTEM      | PVE 7.2-4                       |

## Steps

### Create the LXC template

Here I used is the **slim** release of [nanopi-openwrt](https://github.com/klever1988/nanopi-openwrt) made by **klever1988** for that it is simple enough but with the basic extensions installed(*e.g. FULLCONE, Argon Theme*).

#### Enter in template folder with PVE shell.

```shell
cd /var/lib/vz/template/cache/
```

#### Download the firmware you like

```shell
wget https://github.com/klever1988/nanopi-openwrt/releases/download/2022-07-08/x86-slim.img.gz
```
:::tip 
If the image you download is `rootfs.tar.gz`, you can jump to [Create the LXC container](#create-the-lxc-container).
:::
#### Mount all the partitions in this raw disk image

```shell
kpartx -av x86-slim.img.gz 
```

Under the `/dev/mapper`, there are 2 ***loopXpY***, one of this contains the Openwrt System.(*e.g. loop0p1*)

#### Mount it to path `/mnt`

```shell
mount /dev/mapper/loop0p1 /mnt
```

#### Package 
Package it to `rootfs.tar.gz`

```shell
tar zcvf openwrt-x86-64-generic-rootfs.tar.gz /mnt/
```

#### Unmount

```shell
umount /mnt
kpartx -d x86-slim.img.gz
```

### Create the LXC container

#### PVE CLI Commands

```shell
pct create <vmid> <ostemplate> [OPTIONS]
```
| Name | type | Description |
|:----:|:----|:------------|
| <kbd>vmid</kbd>| `integer`(**1-N**) | The (**unique**) ID of the VM |
| <kbd>ostemplate</kbd>| `string` | The OS template or backup file (`local:vztmpl/openwrt-x86-64-generic-rootfs.tar.gz`) |

##### Options

| Name | type | Description |
|:----:|:----|:------------|
| <kbd>--rootfs</kbd>| `storage`:`disksize` | Use volume as container root. |
| <kbd>--ostype</kbd>| `alpine` or `debian` etc. | OS type. |
| <kbd>--hostname</kbd>| `string` | Set a host name for the container. |
| <kbd>--arch</kbd>| `amd64`,`arm64`,`armhf`,`i386` | OS architecture type. |
| <kbd>--cores</kbd>| `integer`(**1-8192**) | The number of cores assigned |
| <kbd>--memory</kbd>| `integer`(**16-N**) | Amount of RAM for the VM in MB. |
| <kbd>--swap</kbd>| `integer`(**0-N**) | Amount of SWAP for the VM in MB. |

:::tip PCT Commands
The more detailed infomation about PVE is available at [PCT-DOCs](https://pve.proxmox.com/pve-docs/pct.1.html).
:::

#### Initialize a LXC container

```shell
pct create 100 
    local:vztmpl/openwrt-x86-64-generic-rootfs.tar.gz
    --rootfs local-lvm:8 
    --ostype unmanaged 
    --hostname openwrt 
    --arch amd64 
    --cores 4 
    --memory 1024 
    --swap 0 
    -net0 bridge=vmbr1,name=eth1
```

