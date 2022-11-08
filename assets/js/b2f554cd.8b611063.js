"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"install-openwrt-in-pve-with-lxc","metadata":{"permalink":"/blog/install-openwrt-in-pve-with-lxc","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-08-01/2022-08-01-install-openwrt-in-pve-with-lxc.md","source":"@site/blog/2022-08-01/2022-08-01-install-openwrt-in-pve-with-lxc.md","title":"Install Openwrt in PVE with LXC","description":"Introduction","date":"2022-08-01T00:00:00.000Z","formattedDate":"August 1, 2022","tags":[{"label":"openwrt","permalink":"/blog/tags/openwrt"},{"label":"PVE","permalink":"/blog/tags/pve"},{"label":"LXC","permalink":"/blog/tags/lxc"}],"readingTime":3.98,"hasTruncateMarker":false,"authors":[{"name":"Char ONE","title":"A boring guy","ulr":"https://rheatin.github.io","imageURL":"https://avatars.githubusercontent.com/u/20568588?v=4","key":"rheatin"}],"frontMatter":{"slug":"install-openwrt-in-pve-with-lxc","title":"Install Openwrt in PVE with LXC","authors":["rheatin"],"tags":["openwrt","PVE","LXC"]},"nextItem":{"title":"Welcome","permalink":"/blog/welcome"}},"content":"## Introduction\\n> Reference(Plagiarism\ud83e\udd23):\\n> \\n> https://www.right.com.cn/forum/thread-4053183-1-1.html\\n> https://blog.csdn.net/kangzeru/article/details/115373587\\n\\n\ud83d\ude04This artical is just a **reminder** for myself, not a tutorial. Hopefully it helps you too.\\n\\nMy configuration is as below:\\n\\n| Accessory   | Type                            |\\n|:-----------:|:-------------------------------:|\\n| CPU         | Intel i7-6700                   |\\n| MOTHERBOARD | ASUS Z170 Pro Gaming            |\\n| NET ADAPTER | RTL 8125B(with 2 2.5G RJ45)     |\\n| DISKS       | Q200EX 480G,PM961A 256G,ZFS:1TB |\\n| SYSTEM      | PVE 7.2-4                       |\\n\\nThe network topology is as below:![topology](topology.jpg)\\n\\n\\n:::tip\\nI\'ve found a repository [**pve-edge-kernel**](https://github.com/fw867/pve-edge-kernel), it seems to cover configuration and template of LXC openwrt. Anyone interested can hava a try on your own.\\n:::\\n\\n## Steps\\n\\n### Create the LXC template\\n\\nHere I used is the **slim** release of [nanopi-openwrt](https://github.com/klever1988/nanopi-openwrt) made by **klever1988** for that it is simple enough but with the basic extensions installed(*e.g. FULLCONE, Argon Theme*).\\n\\n:::caution\\nIf your PVE lacks FULLCONE, you may need to build it from the source.\\nHere attached the [**tutorial**](https://blog.sxx1314.com/linux/587.html)\\n:::\\n\\nDownload the firmware you like\\n\\n```shell\\ncd /var/lib/vz/template/cache/\\nwget https://github.com/klever1988/nanopi-openwrt/releases/download/2022-07-08/x86-slim.img.gz\\n```\\n:::tip \\nIf the image you\'ve downloaded is `rootfs.tar.gz`, you can jump to [**Create the LXC container**](#create-the-lxc-container).\\n:::\\nMount all the partitions in this raw disk image\\n\\n```shell\\nkpartx -av x86-slim.img.gz \\n```\\n\\nUnder the `/dev/mapper`, there are 2 ***loopXpY***, one of this contains the Openwrt System.(*e.g. loop0p1*)\\n\\nMount it to path `/mnt`\\n\\n```shell\\nmount /dev/mapper/loop0p1 /mnt\\n```\\n\\nPackage it to `rootfs.tar.gz`\\n\\n```shell\\ntar zcvf openwrt-x86-64-generic-rootfs.tar.gz /mnt/\\n```\\n\\nUnmount\\n\\n```shell\\numount /mnt\\nkpartx -d x86-slim.img.gz\\n```\\n\\n### Create the LXC container\\n\\n#### PVE CLI Commands\\n\\n```shell\\npct create <vmid> <ostemplate> [OPTIONS]\\n```\\n| Name | type | Description |\\n|:----:|:----|:------------|\\n| <kbd>vmid</kbd>| `integer`(**1-N**) | The (**unique**) ID of the VM |\\n| <kbd>ostemplate</kbd>| `string` | The OS template or backup file (`local:vztmpl/openwrt-x86-64-generic-rootfs.tar.gz`) |\\n\\n##### Options\\n\\n| Name | type | Description |\\n|:----:|:----|:------------|\\n| <kbd>--rootfs</kbd>| `storage`:`disksize` | Use volume as container root. |\\n| <kbd>--ostype</kbd>| `alpine` or `debian` etc. | OS type. |\\n| <kbd>--hostname</kbd>| `string` | Set a host name for the container. |\\n| <kbd>--arch</kbd>| `amd64`,`arm64`,`armhf`,`i386` | OS architecture type. |\\n| <kbd>--cores</kbd>| `integer`(**1-8192**) | The number of cores assigned |\\n| <kbd>--memory</kbd>| `integer`(**16-N**) | Amount of RAM for the VM in MB. |\\n| <kbd>--swap</kbd>| `integer`(**0-N**) | Amount of SWAP for the VM in MB. |\\n\\n:::tip PCT Commands\\nThe more detailed infomation about PVE is available at [PCT-DOCs](https://pve.proxmox.com/pve-docs/pct.1.html).\\n:::\\n\\n#### Initialize a LXC container\\n\\nWith the upper commands, we can initialize a container\\n\\n```shell\\npct create 100 \\n    local:vztmpl/openwrt-x86-64-generic-rootfs.tar.gz\\n    --rootfs local-lvm:8 \\n    --ostype unmanaged \\n    --hostname openwrt \\n    --arch amd64 \\n    --cores 4 \\n    --memory 1024 \\n    --swap 0 \\n    -net0 bridge=vmbr1,name=eth1\\n```\\n\\n#### Modify the configuration of container\\n\\nAdd the content of below:\\n\\n```shell title=\\"/etc/pve/lxc/100.conf\\"\\n# there are some basic configurations in openwrt.common.conf\\n# which is already existed in PVE system\\nlxc.include: /usr/share/lxc/config/openwrt.common.conf\\n# allow /dev/ppp for openwrt dial up with PPPOE protocal\\nlxc.cgroup.devices.allow: c 108:0 rwm\\n# assign a specific hookscript\\nhookscript: local:snippets/hookscript.pl\\n# Passthrough the physical network card for container\\nlxc.net.1.type: phys\\nlxc.net.1.link: enp6s0\\nlxc.net.1.flags: up\\n```\\n\\n:::caution\\nThe container will always load the `/usr/share/lxc/config/openwrt.common.conf` whatever you add it to the configuration of lxc container or not\\n:::\\n\\n:::important\\nIf you will use <kbd>openclash</kbd> in your container or happen to see the error with this format **\\"Unable to set capabilities *[sth.]* ...\\"**, you need to modify the `openwrt.common.conf`\\n\\nComment this 2 lines in below file.(***[sth.]*** you lack, and the line where it locates should be commented)\\n\\n```shell title=\\"/usr/share/lxc/config/openwrt.common.conf\\"\\n# lxc.cap.drop is meant to discard some capabilities\\nlxc.cap.drop = sys_ptrace\\nlxc.cap.drop = sys_resource\\n```\\n:::\\n\\n#### Create the hookscript\\n\\nHere we used the official example `guest-example-hookscript.pl` to modify\\n\\nCreate the folder\\n\\n```shell\\nmkdir /var/lib/vz/snippets\\n```\\n\\nCopy the `guest-example-hookscript.pl` to the folder\\n\\n```shell\\ncp /usr/share/pve-docs/examples/guest-example-hookscript.pl /var/lib/vz/snippets/hookscript.pl\\n```\\n\\nEdit this file, you will see the content below at line 36:\\n\\n```python title=\\"/var/lib/vz/snippets/hookscript.pl\\"\\n    # Second phase \'post-start\' will be executed after the guest\\n    # successfully started.\\n\\n    print \\"$vmid started successfully.\\\\n\\";\\n```\\n\\nAdd the content below to enable **TUN** and **PPPOE**:\\n\\n```python title=\\"/var/lib/vz/snippets/hookscript.pl\\"\\n    # Second phase \'post-start\' will be executed after the guest\\n    # successfully started.\\n    system(\\"lxc-device add -n $vmid /dev/ppp\\");\\n    system(\\"lxc-device add -n $vmid /dev/net/tun\\");\\n    print \\"$vmid started successfully.\\\\n\\";\\n```\\n\\n### Start the LXC container\\n\\nStart the specific container with `VMID` and then start the LXC terminal\\n\\n```shell\\npct start 100\\nlxc-attach 100\\n```\\n\\nConfigure your network\\n\\n```shell title=\\"/etc/config/network\\"\\nconfig device\\n        option name \'br-lan\'\\n        option type \'bridge\'\\n        list ports \'eth1\'\\n\\nconfig interface \'lan\'\\n        option device \'br-lan\'\\n        option proto \'static\'\\n        option ipaddr \'192.168.1.5\'\\n        option netmask \'255.255.255.0\'\\n\\nconfig interface \'wan\'\\n        option device \'enp6s0\'\\n        option proto \'pppoe\'\\n        option username \'xxxxxx\'\\n        option password \'xxxxxx\'\\n```\\n\\nRestart the network and firewall\\n\\n```shell\\n/etc/init.d/network restart\\n/etc/init.d/firewall restart\\n```\\n\\n## Start surfing on the Internet\\n\\n**\ud83c\udf89Congratulations!**  \\nNow, you may already have Internet access. You can add further configuration such as installing plugins, adjusting your settings with web interface at http://192.168.1.5"},{"id":"welcome","metadata":{"permalink":"/blog/welcome","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-07-29/welcome.md","source":"@site/blog/2022-07-29/welcome.md","title":"Welcome","description":"Hello","date":"2022-07-29T00:00:00.000Z","formattedDate":"July 29, 2022","tags":[{"label":"Welcome","permalink":"/blog/tags/welcome"}],"readingTime":0.02,"hasTruncateMarker":false,"authors":[{"name":"Char ONE","title":"A boring guy","ulr":"https://rheatin.github.io","imageURL":"https://avatars.githubusercontent.com/u/20568588?v=4","key":"rheatin"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["rheatin"],"tags":["Welcome"]},"prevItem":{"title":"Install Openwrt in PVE with LXC","permalink":"/blog/install-openwrt-in-pve-with-lxc"}},"content":"## Hello\\n\\nHello, Everyone!\ud83d\ude04"}]}')}}]);