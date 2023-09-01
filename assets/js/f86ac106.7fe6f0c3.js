"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[519],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=s(n),k=r,u=d["".concat(p,".").concat(k)]||d[k]||m[k]||o;return n?a.createElement(u,l(l({ref:e},c),{},{components:n})):a.createElement(u,l({ref:e},c))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},121:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={slug:"install-openwrt-in-pve-with-lxc",title:"Install Openwrt in PVE with LXC",authors:["rheatin"],tags:["openwrt","PVE","LXC"]},l=void 0,i={permalink:"/blog/install-openwrt-in-pve-with-lxc",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-08-01/2022-08-01-install-openwrt-in-pve-with-lxc.md",source:"@site/blog/2022-08-01/2022-08-01-install-openwrt-in-pve-with-lxc.md",title:"Install Openwrt in PVE with LXC",description:"Introduction",date:"2022-08-01T00:00:00.000Z",formattedDate:"August 1, 2022",tags:[{label:"openwrt",permalink:"/blog/tags/openwrt"},{label:"PVE",permalink:"/blog/tags/pve"},{label:"LXC",permalink:"/blog/tags/lxc"}],readingTime:3.98,hasTruncateMarker:!1,authors:[{name:"Char ONE",title:"A boring guy",ulr:"https://rheatin.github.io",imageURL:"https://avatars.githubusercontent.com/u/20568588?v=4",key:"rheatin"}],frontMatter:{slug:"install-openwrt-in-pve-with-lxc",title:"Install Openwrt in PVE with LXC",authors:["rheatin"],tags:["openwrt","PVE","LXC"]},nextItem:{title:"Welcome",permalink:"/blog/welcome"}},p={authorsImageUrls:[void 0]},s=[{value:"Introduction",id:"introduction",level:2},{value:"Steps",id:"steps",level:2},{value:"Create the LXC template",id:"create-the-lxc-template",level:3},{value:"Create the LXC container",id:"create-the-lxc-container",level:3},{value:"PVE CLI Commands",id:"pve-cli-commands",level:4},{value:"Options",id:"options",level:5},{value:"Initialize a LXC container",id:"initialize-a-lxc-container",level:4},{value:"Modify the configuration of container",id:"modify-the-configuration-of-container",level:4},{value:"Create the hookscript",id:"create-the-hookscript",level:4},{value:"Start the LXC container",id:"start-the-lxc-container",level:3},{value:"Start surfing on the Internet",id:"start-surfing-on-the-internet",level:2}],c={toc:s};function m(t){let{components:e,...o}=t;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Reference(Plagiarism\ud83e\udd23):"),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://www.right.com.cn/forum/thread-4053183-1-1.html"},"https://www.right.com.cn/forum/thread-4053183-1-1.html"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://blog.csdn.net/kangzeru/article/details/115373587"},"https://blog.csdn.net/kangzeru/article/details/115373587"))),(0,r.kt)("p",null,"\ud83d\ude04This artical is just a ",(0,r.kt)("strong",{parentName:"p"},"reminder")," for myself, not a tutorial. Hopefully it helps you too."),(0,r.kt)("p",null,"My configuration is as below:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Accessory"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"CPU"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Intel i7-6700")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"MOTHERBOARD"),(0,r.kt)("td",{parentName:"tr",align:"center"},"ASUS Z170 Pro Gaming")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"NET ADAPTER"),(0,r.kt)("td",{parentName:"tr",align:"center"},"RTL 8125B(with 2 2.5G RJ45)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"DISKS"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Q200EX 480G,PM961A 256G,ZFS:1TB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"SYSTEM"),(0,r.kt)("td",{parentName:"tr",align:"center"},"PVE 7.2-4")))),(0,r.kt)("p",null,"The network topology is as below:",(0,r.kt)("img",{alt:"topology",src:n(968).Z,width:"1483",height:"850"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"I've found a repository ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fw867/pve-edge-kernel"},(0,r.kt)("strong",{parentName:"a"},"pve-edge-kernel")),", it seems to cover configuration and template of LXC openwrt. Anyone interested can hava a try on your own.")),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("h3",{id:"create-the-lxc-template"},"Create the LXC template"),(0,r.kt)("p",null,"Here I used is the ",(0,r.kt)("strong",{parentName:"p"},"slim")," release of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/klever1988/nanopi-openwrt"},"nanopi-openwrt")," made by ",(0,r.kt)("strong",{parentName:"p"},"klever1988")," for that it is simple enough but with the basic extensions installed(",(0,r.kt)("em",{parentName:"p"},"e.g. FULLCONE, Argon Theme"),")."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If your PVE lacks FULLCONE, you may need to build it from the source.\nHere attached the ",(0,r.kt)("a",{parentName:"p",href:"https://blog.sxx1314.com/linux/587.html"},(0,r.kt)("strong",{parentName:"a"},"tutorial")))),(0,r.kt)("p",null,"Download the firmware you like"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd /var/lib/vz/template/cache/\nwget https://github.com/klever1988/nanopi-openwrt/releases/download/2022-07-08/x86-slim.img.gz\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If the image you've downloaded is ",(0,r.kt)("inlineCode",{parentName:"p"},"rootfs.tar.gz"),", you can jump to ",(0,r.kt)("a",{parentName:"p",href:"#create-the-lxc-container"},(0,r.kt)("strong",{parentName:"a"},"Create the LXC container")),".")),(0,r.kt)("p",null,"Mount all the partitions in this raw disk image"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kpartx -av x86-slim.img\n")),(0,r.kt)("p",null,"Under the ",(0,r.kt)("inlineCode",{parentName:"p"},"/dev/mapper"),", there are 2 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"loopXpY")),", one of this contains the Openwrt System.(",(0,r.kt)("em",{parentName:"p"},"e.g. loop0p1"),")"),(0,r.kt)("p",null,"Mount it to path ",(0,r.kt)("inlineCode",{parentName:"p"},"/mnt")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mount /dev/mapper/loop0p1 /mnt\n")),(0,r.kt)("p",null,"Package it to ",(0,r.kt)("inlineCode",{parentName:"p"},"rootfs.tar.gz")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"tar zcvf openwrt-x86-64-generic-rootfs.tar.gz /mnt/\n")),(0,r.kt)("p",null,"Unmount"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"umount /mnt\nkpartx -d x86-slim.img\n")),(0,r.kt)("h3",{id:"create-the-lxc-container"},"Create the LXC container"),(0,r.kt)("h4",{id:"pve-cli-commands"},"PVE CLI Commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pct create <vmid> <ostemplate> [OPTIONS]\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("kbd",null,"vmid")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"integer"),"(",(0,r.kt)("strong",{parentName:"td"},"1-N"),")"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The (",(0,r.kt)("strong",{parentName:"td"},"unique"),") ID of the VM")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("kbd",null,"ostemplate")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The OS template or backup file (",(0,r.kt)("inlineCode",{parentName:"td"},"local:vztmpl/openwrt-x86-64-generic-rootfs.tar.gz"),")")))),(0,r.kt)("h5",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("kbd",null,"--rootfs")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"storage"),":",(0,r.kt)("inlineCode",{parentName:"td"},"disksize")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Use volume as container root.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("kbd",null,"--ostype")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"alpine")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"debian")," etc."),(0,r.kt)("td",{parentName:"tr",align:"left"},"OS type.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("kbd",null,"--hostname")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set a host name for the container.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("kbd",null,"--arch")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amd64"),",",(0,r.kt)("inlineCode",{parentName:"td"},"arm64"),",",(0,r.kt)("inlineCode",{parentName:"td"},"armhf"),",",(0,r.kt)("inlineCode",{parentName:"td"},"i386")),(0,r.kt)("td",{parentName:"tr",align:"left"},"OS architecture type.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("kbd",null,"--cores")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"integer"),"(",(0,r.kt)("strong",{parentName:"td"},"1-8192"),")"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of cores assigned")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("kbd",null,"--memory")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"integer"),"(",(0,r.kt)("strong",{parentName:"td"},"16-N"),")"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Amount of RAM for the VM in MB.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("kbd",null,"--swap")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"integer"),"(",(0,r.kt)("strong",{parentName:"td"},"0-N"),")"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Amount of SWAP for the VM in MB.")))),(0,r.kt)("admonition",{title:"PCT Commands",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The more detailed infomation about PVE is available at ",(0,r.kt)("a",{parentName:"p",href:"https://pve.proxmox.com/pve-docs/pct.1.html"},"PCT-DOCs"),".")),(0,r.kt)("h4",{id:"initialize-a-lxc-container"},"Initialize a LXC container"),(0,r.kt)("p",null,"With the upper commands, we can initialize a container"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pct create 100 \n    local:vztmpl/openwrt-x86-64-generic-rootfs.tar.gz\n    --rootfs local-lvm:8 \n    --ostype unmanaged \n    --hostname openwrt \n    --arch amd64 \n    --cores 4 \n    --memory 1024 \n    --swap 0 \n    -net0 bridge=vmbr1,name=eth1\n")),(0,r.kt)("h4",{id:"modify-the-configuration-of-container"},"Modify the configuration of container"),(0,r.kt)("p",null,"Add the content of below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="/etc/pve/lxc/100.conf"',title:'"/etc/pve/lxc/100.conf"'},"# there are some basic configurations in openwrt.common.conf\n# which is already existed in PVE system\nlxc.include: /usr/share/lxc/config/openwrt.common.conf\n# allow /dev/ppp for openwrt dial up with PPPOE protocal\nlxc.cgroup.devices.allow: c 108:0 rwm\n# assign a specific hookscript\nhookscript: local:snippets/hookscript.pl\n# Passthrough the physical network card for container\nlxc.net.1.type: phys\nlxc.net.1.link: enp6s0\nlxc.net.1.flags: up\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The container will always load the ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/share/lxc/config/openwrt.common.conf")," whatever you add it to the configuration of lxc container or not")),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"If you will use ",(0,r.kt)("kbd",null,"openclash")," in your container or happen to see the error with this format ",(0,r.kt)("strong",{parentName:"p"},'"Unable to set capabilities ',(0,r.kt)("em",{parentName:"strong"},"[sth.]"),' ..."'),", you need to modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"openwrt.common.conf")),(0,r.kt)("p",{parentName:"admonition"},"Comment this 2 lines in below file.(",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"[sth.]"))," you lack, and the line where it locates should be commented)"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="/usr/share/lxc/config/openwrt.common.conf"',title:'"/usr/share/lxc/config/openwrt.common.conf"'},"# lxc.cap.drop is meant to discard some capabilities\nlxc.cap.drop = sys_ptrace\nlxc.cap.drop = sys_resource\n"))),(0,r.kt)("h4",{id:"create-the-hookscript"},"Create the hookscript"),(0,r.kt)("p",null,"Here we used the official example ",(0,r.kt)("inlineCode",{parentName:"p"},"guest-example-hookscript.pl")," to modify"),(0,r.kt)("p",null,"Create the folder"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir /var/lib/vz/snippets\n")),(0,r.kt)("p",null,"Copy the ",(0,r.kt)("inlineCode",{parentName:"p"},"guest-example-hookscript.pl")," to the folder"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cp /usr/share/pve-docs/examples/guest-example-hookscript.pl /var/lib/vz/snippets/hookscript.pl\n")),(0,r.kt)("p",null,"Edit this file, you will see the content below at line 36:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="/var/lib/vz/snippets/hookscript.pl"',title:'"/var/lib/vz/snippets/hookscript.pl"'},"    # Second phase 'post-start' will be executed after the guest\n    # successfully started.\n\n    print \"$vmid started successfully.\\n\";\n")),(0,r.kt)("p",null,"Add the content below to enable ",(0,r.kt)("strong",{parentName:"p"},"TUN")," and ",(0,r.kt)("strong",{parentName:"p"},"PPPOE"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="/var/lib/vz/snippets/hookscript.pl"',title:'"/var/lib/vz/snippets/hookscript.pl"'},'    # Second phase \'post-start\' will be executed after the guest\n    # successfully started.\n    system("lxc-device add -n $vmid /dev/ppp");\n    system("lxc-device add -n $vmid /dev/net/tun");\n    print "$vmid started successfully.\\n";\n')),(0,r.kt)("h3",{id:"start-the-lxc-container"},"Start the LXC container"),(0,r.kt)("p",null,"Start the specific container with ",(0,r.kt)("inlineCode",{parentName:"p"},"VMID")," and then start the LXC terminal"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pct start 100\nlxc-attach 100\n")),(0,r.kt)("p",null,"Configure your network"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="/etc/config/network"',title:'"/etc/config/network"'},"config device\n        option name 'br-lan'\n        option type 'bridge'\n        list ports 'eth1'\n\nconfig interface 'lan'\n        option device 'br-lan'\n        option proto 'static'\n        option ipaddr '192.168.1.5'\n        option netmask '255.255.255.0'\n\nconfig interface 'wan'\n        option device 'enp6s0'\n        option proto 'pppoe'\n        option username 'xxxxxx'\n        option password 'xxxxxx'\n")),(0,r.kt)("p",null,"Restart the network and firewall"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/etc/init.d/network restart\n/etc/init.d/firewall restart\n")),(0,r.kt)("h2",{id:"start-surfing-on-the-internet"},"Start surfing on the Internet"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\ud83c\udf89Congratulations!"),(0,r.kt)("br",{parentName:"p"}),"\n","Now, you may already have Internet access. You can add further configuration such as installing plugins, adjusting your settings with web interface at ",(0,r.kt)("a",{parentName:"p",href:"http://192.168.1.5"},"http://192.168.1.5")))}m.isMDXComponent=!0},968:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/topology-27cc65db2b00301028e8afb1601207ed.jpg"}}]);