import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/Bitslab-Awesome-Web3-Security/',
  title: "Bitslab-Awesome-Web3-Security",
  description: "A Web3 Security Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Overview', link: '/' }
        ]
      },
      {
        text: 'Lending安全',
        items: [
          { text: '业务简介', link: '/Lending_业务简介' },
          { text: '漏洞分析', link: '/Lending_漏洞' },
          { text: 'Checklist', link: '/Lending_Checklist' }
        ]
      },
      {
        text: 'Staking安全',
        items: [
          { text: '业务简介', link: '/Staking_业务简介' },
          { text: '漏洞分析', link: '/Staking_漏洞' },
          { text: 'Checklist', link: '/Staking_Checklist' }
        ]
      },
      {
        text: 'Resources',
        items: [
          { text: '漏洞学习资料', link: '/漏洞学习资料' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    // 启用本地搜索功能
    search: {
      provider: 'local'
    },

    // mdBook style usually has outline on the right, keeping it for now but can be disabled
    outline: 'deep'
  }
})
