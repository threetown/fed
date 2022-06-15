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
        text: '🍌零基础学前端',
        items: [
          { text: '指南', link: '/guide/' },
          { text: '🍅 HTML', link: '/HTML/' },
          { text: '🍉 CSS', link: '/CSS/' },
          { text: '🍌 JavaScript', link: '/JS/' }
        ]
      },
      {
        text: '🌲三座大山',
        items: [
          { text: 'VueJS', items: [{ text: 'vue_0.11', link: '/vue@0.11/'}, { text: 'vue_2.x', link: '/vue@2.x/'}, { text: 'vue', link: '/Vue/'}] },
          { text: 'Vue CLI', items: [{ text: 'vue_cli', link: '/vue-cli/' }] },
          { text: 'React', link: '/React/' },
          { text: 'NodeJS', link: '/NodeJS/' },
        ]
      },
      {
        text: '🌹前端架构',
        items: [
          { text: 'web架构师', link: '/fearchitect/' },
          { text: '算法', link: '/algorithm/' },
          { text: 'Axure', link: '/Axure/' }
        ]
      },
      {
        text: '🍄前端工程化',
        items: [
          { text: 'Babel', link: '/Babel/' },
          { text: 'Webpack', link: '/webpack/' },
          { text: 'HTTP协议', link: '/HTTP/' },
          { text: 'TypeScript', link: '/TypeScript/' },
          { text: '设计模式', link: '/design-patterns/' },
          { text: 'Flutter', link: '/Flutter/'},
          { text: 'webgis', link: '/GIS/' },
          { text: '测试', link: '/test/' },
          { text: 'Google Chrome', link: '/chrome/' },
          { text: '🍉Git和GitHub', link: '/git/' },
          { text: '🥭MarkDown文档', link: '/MarkDown/' },
          { text: '其它', items: [{ text: '🍒SQL', link: '/SQL/' }] }
        ]
      },
      { text: '理论', items: [
        { text: '计算机与网络', link: '/computing/'}
      ]},
      {
        text: '经理人', items: [
          { text: '聊聊管理', link: '/manage/' },
          { text: 'HR六大模块', items: [
            { text: 'OKR', link: '/OKR/' }
          ] },
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
      '/CSS/': [
        {
          title: 'CSS',
          children: [
            '',
            'box_model',
            'position',
            'css3',
            'flex',
            'BFC',
            'reflow_repaint',
            'icon',
          ]
        }
      ],
      '/JS/': [
        {
          title: 'JavaScript',
          children: [
            '',
            'this',
            'call_apply_bind',
            'async',
            'event_loop',
            'OOP',
            'ES6',
            'Functional',
            'interview'
          ]
        }
      ],
      '/webpack/': [
        {
          title: 'webpack',
          children: [
            '',
            'basic',
            'configuration',
            'loader',
            'plugin',
            'optimization',
            'interview',
          ]
        }
      ],
      '/computing/': [
        {
          title: '计算机与网络',
          sidebarDepth: 4,
          children: [
            '',
            'digital-information',
            'computers',
            'internet',
            'online-data-security',
            'computing-innovations',
          ]
        }
      ],
      '/Vue/': [
        {
          title: 'Vue', children: [
            '',
            'vue',
            'vue-router',
            'vuex',
            'vue-cli'
          ]
        }
      ],
      '/vue-cli/': [
        {
          title: 'vue-cli',
          children: ['', 'Repo', 'history', 'flow']
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
      '/fearchitect/': [
        {
          title: '前端架构',
          children: ['', 'Performance']
        }
      ],
      '/git/': [
        {
          title: 'Git',
          children: [
            '',
            'internals',
            'git-cz',
            'git',
            'survey'
          ]
        }
      ],
      '/manage/': [
        {
          title: '管理',
          collapsable: false,
          children: [
            '',
          ]
        },
        {
          title: '职业规划',
          collapsable: false,
          children: [
            '',
          ]
        }
      ],
      '/OKR/': [
        {
          title: '目标与关键成果',
          collapsable: false,
          children: [
            'OKR',
            'okr-tpl'
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
