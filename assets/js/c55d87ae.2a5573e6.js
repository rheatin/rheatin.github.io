"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[516],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=m(a),k=r,u=c["".concat(p,".").concat(k)]||c[k]||s[k]||l;return a?n.createElement(u,i(i({ref:e},d),{},{components:a})):n.createElement(u,i({ref:e},d))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7017:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const l={slug:"install-openwrt-in-pve-with-lxc",title:"Install Openwrt in PVE with LXC",authors:["rheatin"],tags:["openwrt","PVE","LXC"]},i=void 0,o={permalink:"/blog/install-openwrt-in-pve-with-lxc",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-08-01-install-openwrt-in-pve-with-lxc/2022-08-01-install-openwrt-in-pve-with-lxc.md",source:"@site/blog/2022-08-01-install-openwrt-in-pve-with-lxc/2022-08-01-install-openwrt-in-pve-with-lxc.md",title:"Install Openwrt in PVE with LXC",description:"Preface",date:"2022-08-01T00:00:00.000Z",formattedDate:"August 1, 2022",tags:[{label:"openwrt",permalink:"/blog/tags/openwrt"},{label:"PVE",permalink:"/blog/tags/pve"},{label:"LXC",permalink:"/blog/tags/lxc"}],readingTime:1.875,hasTruncateMarker:!1,authors:[{name:"Char ONE",title:"A boring guy",ulr:"https://rheatin.github.io",imageURL:"https://avatars.githubusercontent.com/u/20568588?v=4",key:"rheatin"}],frontMatter:{slug:"install-openwrt-in-pve-with-lxc",title:"Install Openwrt in PVE with LXC",authors:["rheatin"],tags:["openwrt","PVE","LXC"]}},p={authorsImageUrls:[void 0]},m=[{value:"Preface",id:"preface",level:2},{value:"Steps",id:"steps",level:2},{value:"Create the LXC template",id:"create-the-lxc-template",level:3},{value:"Enter in template folder with PVE shell.",id:"enter-in-template-folder-with-pve-shell",level:4},{value:"Download the firmware you like",id:"download-the-firmware-you-like",level:4},{value:"Mount all the partitions in this raw disk image",id:"mount-all-the-partitions-in-this-raw-disk-image",level:4},{value:"Mount it to path <code>/mnt</code>",id:"mount-it-to-path-mnt",level:4},{value:"Package",id:"package",level:4},{value:"Unmount",id:"unmount",level:4},{value:"Create the LXC container",id:"create-the-lxc-container",level:3},{value:"PVE CLI Commands",id:"pve-cli-commands",level:4},{value:"Options",id:"options",level:5},{value:"Initialize a LXC container",id:"initialize-a-lxc-container",level:4}],d={toc:m};function s(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"preface"},"Preface"),(0,r.kt)("p",null,"This artical is just a reminder for myself, not a tutorial. Hopefully it helps you too.\ud83d\ude04"),(0,r.kt)("p",null,"My configuration is as below:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Accessory"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"CPU"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Intel i7-6700")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"MOTHERBOARD"),(0,r.kt)("td",{parentName:"tr",align:"center"},"ASUS Z170 Pro Gaming")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"NET ADAPTER"),(0,r.kt)("td",{parentName:"tr",align:"center"},"RTL 8125B(with 2 2.5G RJ45)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"DISKS"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Q200EX 480G,PM961A 256G,ZFS:1TB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"SYSTEM"),(0,r.kt)("td",{parentName:"tr",align:"center"},"PVE 7.2-4")))),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("h3",{id:"create-the-lxc-template"},"Create the LXC template"),(0,r.kt)("p",null,"Here I used is the ",(0,r.kt)("strong",{parentName:"p"},"slim")," release of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/klever1988/nanopi-openwrt"},"nanopi-openwrt")," made by ",(0,r.kt)("strong",{parentName:"p"},"klever1988")," for that it is simple enough but with the basic extensions installed(",(0,r.kt)("em",{parentName:"p"},"e.g. FULLCONE, Argon Theme"),")."),(0,r.kt)("h4",{id:"enter-in-template-folder-with-pve-shell"},"Enter in template folder with PVE shell."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd /var/lib/vz/template/cache/\n")),(0,r.kt)("h4",{id:"download-the-firmware-you-like"},"Download the firmware you like"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://github.com/klever1988/nanopi-openwrt/releases/download/2022-07-08/x86-slim.img.gz\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If the image you download is ",(0,r.kt)("inlineCode",{parentName:"p"},"rootfs.tar.gz"),", you can jump to ",(0,r.kt)("a",{parentName:"p",href:"#create-the-lxc-container"},"Create the LXC container"),".")),(0,r.kt)("h4",{id:"mount-all-the-partitions-in-this-raw-disk-image"},"Mount all the partitions in this raw disk image"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kpartx -av x86-slim.img.gz \n")),(0,r.kt)("p",null,"Under the ",(0,r.kt)("inlineCode",{parentName:"p"},"/dev/mapper"),", there are 2 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"loopXpY")),", one of this contains the Openwrt System.(",(0,r.kt)("em",{parentName:"p"},"e.g. loop0p1"),")"),(0,r.kt)("h4",{id:"mount-it-to-path-mnt"},"Mount it to path ",(0,r.kt)("inlineCode",{parentName:"h4"},"/mnt")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mount /dev/mapper/loop0p1 /mnt\n")),(0,r.kt)("h4",{id:"package"},"Package"),(0,r.kt)("p",null,"Package it to ",(0,r.kt)("inlineCode",{parentName:"p"},"rootfs.tar.gz")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"tar zcvf openwrt-x86-64-generic-rootfs.tar.gz /mnt/\n")),(0,r.kt)("h4",{id:"unmount"},"Unmount"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"umount /mnt\nkpartx -d x86-slim.img.gz\n")),(0,r.kt)("h3",{id:"create-the-lxc-container"},"Create the LXC container"),(0,r.kt)("h4",{id:"pve-cli-commands"},"PVE CLI Commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pct create <vmid> <ostemplate> [OPTIONS]\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("kbd",null,"vmid")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"integer"),"(",(0,r.kt)("strong",{parentName:"td"},"1-N"),")"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The (",(0,r.kt)("strong",{parentName:"td"},"unique"),") ID of the VM")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("kbd",null,"ostemplate")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The OS template or backup file (",(0,r.kt)("inlineCode",{parentName:"td"},"local:vztmpl/openwrt-x86-64-generic-rootfs.tar.gz"),")")))),(0,r.kt)("h5",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("kbd",null,"--rootfs")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"storage"),":",(0,r.kt)("inlineCode",{parentName:"td"},"disksize")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Use volume as container root.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("kbd",null,"--ostype")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"alpine")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"debian")," etc."),(0,r.kt)("td",{parentName:"tr",align:"left"},"OS type.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("kbd",null,"--hostname")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set a host name for the container.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("kbd",null,"--arch")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amd64"),",",(0,r.kt)("inlineCode",{parentName:"td"},"arm64"),",",(0,r.kt)("inlineCode",{parentName:"td"},"armhf"),",",(0,r.kt)("inlineCode",{parentName:"td"},"i386")),(0,r.kt)("td",{parentName:"tr",align:"left"},"OS architecture type.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("kbd",null,"--cores")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"integer"),"(",(0,r.kt)("strong",{parentName:"td"},"1-8192"),")"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of cores assigned")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("kbd",null,"--memory")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"integer"),"(",(0,r.kt)("strong",{parentName:"td"},"16-N"),")"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Amount of RAM for the VM in MB.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("kbd",null,"--swap")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"integer"),"(",(0,r.kt)("strong",{parentName:"td"},"0-N"),")"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Amount of SWAP for the VM in MB.")))),(0,r.kt)("admonition",{title:"PCT Commands",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The more detailed infomation about PVE is available at ",(0,r.kt)("a",{parentName:"p",href:"https://pve.proxmox.com/pve-docs/pct.1.html"},"PCT-DOCs"),".")),(0,r.kt)("h4",{id:"initialize-a-lxc-container"},"Initialize a LXC container"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pct create 100 \n    local:vztmpl/openwrt-x86-64-generic-rootfs.tar.gz\n    --rootfs local-lvm:8 \n    --ostype unmanaged \n    --hostname openwrt \n    --arch amd64 \n    --cores 4 \n    --memory 1024 \n    --swap 0 \n    -net0 bridge=vmbr1,name=eth1\n")))}s.isMDXComponent=!0}}]);