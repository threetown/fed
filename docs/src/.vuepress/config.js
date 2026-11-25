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
        text: '🍓前端开发',
        items: [
          { text: '从入门到放弃', items: [
            { text: '指南', link: '/guide/' },
            { text: 'HTML', link: '/HTML/' },
            { text: 'CSS', link: '/CSS/' },
            { text: 'JavaScript', link: '/JS/' }
          ]},{
            text: 'interview', items: [
              {text: 'HTML', link: '/2024/HTML/' },
              {text: 'CSS', link: '/2024/CSS/' },
              {text: 'JS', link: '/2024/JS/' },
              {text: 'Webpack', link: '/2024/Webpack/' },
              {text: 'HTTP', link: '/2024/HTTP/' },
              {text: 'browser', link: '/2024/browser/' },
            ]
          },
          {
            text: '工具类',
            items: [
              { text: 'Babel', link: '/Babel/' },
              { text: 'Webpack', link: '/webpack/' },
              { text: 'TypeScript', link: '/TypeScript/' },
            ]
          },
          {
            text: '其它',
            items: [
              { text: '浏览器', link: '/browser/' },
              { text: 'Git和GitHub', link: '/git/' },
              { text: 'MarkDown文档', link: '/MarkDown/' },
              { text: 'webgis', link: '/GIS/' },
              { text: 'Flutter', link: '/Flutter/'},
              { text: '测试', link: '/test/' },
              { text: 'Axure', link: '/Axure/' },
            ]
          },
        ]
      },
      { text: '🍄大前端', items: [
        { text: 'VueJS', items: [{ text: 'vue_0.11', link: '/vue@0.11/'}, { text: 'vue_2.x', link: '/vue@2.x/'}, { text: 'vue', link: '/Vue/'}] },
        { text: 'Vue CLI', items: [{ text: 'vue_cli', link: '/vue-cli/' }] },
        { text: 'React', items: [
          { text: 'React', link: '/React/' },
          { text: 'DvaJS', link: '/DvaJS/' },
          { text: 'UmiJS', link: '/UmiJS/' },
        ] },
        {
          text: 'NodeJS', items: [
            { text: 'NodeJS', link: '/NodeJS/' }
          ]
        },
        { text: '架构师', items: [
          { text: '架构能力', link: '/fearchitect/' },
          { text: '设计模式', link: '/design-patterns/' },
          { text: 'HTTP协议', link: '/HTTP/' },
          { text: '算法', link: '/algorithm/' },
          { text: '性能优化', link: '/performance/'}
        ]}
      ]},
      {
        text: '🍓后端开发',
        items: [
          { 
            text: 'LNMP', items: [
              { text: 'LNMP', link: '/LNMP/' },
              { text: 'SQL', link: '/SQL/' }
            ]
          },
          {
            text: '操作系统', items: [
              { text: 'MacOS', link: '/MacOS/' },
            ]
          }
        ]
      },
      {
        text: '🎯经理人', items: [
          { text: '职业经理人', items: [
            { text: '聊聊管理', link: '/manage/' },
            { text: '职业规划', link: '/manage/career/' },
            { text: '面试指南', link: '/manage/interview/' },
            { text: '能力框架', link: '/manage/ability/' },
          ] },
          { text: 'HR六大模块', items: [
            { text: 'OKR', link: '/OKR/' }
          ] },
        ]
      },
      {
        text: '文档指南',
        items: [
          { text: '计算机与网络', link: '/computing/' },
          { text: 'w3schools原版镜像', link: 'https://www.quanzhanketang.com/' },
          { text: 'w3schools中文翻译', link: 'https://www.w3school.com.cn/' },
          { text: 'MDN Web Docs', link: 'https://developer.mozilla.org/' },
        ]
      }
    ],
    // sidebar: 'auto'
    sidebar: {
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
      '/browser/': [
        {
          title: '浏览器',
          children: [
            '',
            'data-storage',
            'cross-domain',
            'cache',
            'safe',
            'chrome'
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
            'career',
            'career-programming'
          ]
        },
        {
          title: '面试指南',
          collapsable: false,
          children: [
            'interview'
          ]
        },
        {
          title: '能力',
          collapsable: false,
          children: [
            'ability'
          ]
        },
      ],
      '/OKR/': [
        {
          title: '目标与关键成果',
          collapsable: false,
          sidebarDepth: 4,
          children: [
            'OKR',
            'okr-tpl'
          ]
        }
      ],
      '/LNMP/': [
        {
          title: 'LNMP',
          children: [
            ''
          ]
        }
      ],
      '/MacOS/': [
        {
          title: 'MacOS',
          children: [
            '',
            'brew',
            'MNMP',
            'nodejs'
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
