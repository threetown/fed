const { description } = require('../../package')

module.exports = {
  base: '/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: '零基础学前端',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['link', {rel:'icon', href:'/img/favicon.ico'}],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: 'Last Updated', // string | boolean
    nav: [
      {
        text: '🌶️指南',
        link: '/guide/',
      },
      {
        text: '🍅HTML',
        link: '/HTML/',
      },
      {
        text: '🍉CSS',
        link: '/CSS/'
      },
      {
        text: '🍌JavaScript',
        link: '/JS/'
      },
      {
        text: '🌲三座大山',
        items: [
          { text: '🌹VueJS', link: '/Vue/' },
          { text: '🍀React', link: '/React/' },
          { text: '🌸NodeJS', link: '/Node/' },
        ]
      },
      {
        text: '🍄前端工程化',
        items: [
          { text: 'Babel', link: '/Babel/' },
          { text: 'Webpack', link: '/webpack/' },
          { text: 'HTTP协议', link: '/HTTP/' },
          { text: '设计模式', link: '/design-patterns/' },
          { text: 'Flutter', link: '/Flutter/'},
          { text: 'webgis', link: '/GIS/' },
          { text: '测试', link: '/test/' },
          { text: '🍉Git和GitHub', link: '/git/' },
          { text: '🥭MarkDown文档', link: '/MarkDown/' },
          { text: '其它', items: [{ text: '🍒SQL', link: '/SQL/' }] }
        ]
      },
      {
        text: '🍓文档指南',
        items: [
          { text: 'w3schools原版镜像', link: 'https://www.quanzhanketang.com/' },
          { text: 'w3schools中文翻译', link: 'https://www.w3school.com.cn/' },
          { text: 'MDN Web Docs', link: 'https://developer.mozilla.org/' },
        ]
      }
    ],
    // sidebar: 'auto'
    sidebar: {
      '/guide/': [
        {
          title: '指南',
          collapsable: false,
          children: [
            '',
            // 'using-vue',
          ]
        }
      ],
      '/JS/': [
        {
          title: 'JavaScript',
          children: [
            '',
            'Functional',
          ]
        }
      ],
      '/React/': [
        {
          title: 'React',
          collapsable: false,
          children: [
            '',
            'Hooks'
          ]
        }
      ],
      '/SQL/': [
        {
          title: '结构化查询语句',
          collapsable: false,
          children: [
            '',
            'DML',
            'DDL'
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
