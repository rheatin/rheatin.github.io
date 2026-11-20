export interface Project {
  name: string;
  lang: string;
  stars: string;
  desc: string;
  tags: string[];
  url: string;
}

export const projects: Project[] = [
  {
    name: 'Purah',
    lang: 'Swift',
    stars: '2',
    desc: 'A macOS edge-drawer utility: hover the screen edge to slide out calendar, to-dos, music and system monitors.',
    tags: ['macos', 'swiftui', 'productivity'],
    url: 'https://github.com/rheatin/Purah',
  },
  {
    name: 'Neiro',
    lang: 'TypeScript',
    stars: '1',
    desc: 'The audio engine, its Base layer, the C ABI binding, and the player UI in one tree.',
    tags: ['typescript', 'audio', 'c-abi'],
    url: 'https://github.com/rheatin/neiro',
  },
  {
    name: 'luci-app-languard',
    lang: 'Lua',
    stars: '3',
    desc: 'LuCI client access control for OpenWrt: block devices and external IPs, with realtime login-attack protection and offline IP region lookup.',
    tags: ['openwrt', 'luci', 'security'],
    url: 'https://github.com/rheatin/luci-app-languard',
  },
];
