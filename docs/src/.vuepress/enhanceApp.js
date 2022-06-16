/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */
console.log('%c你去了巴黎，我留在了北京', 'padding: 12px 0 12px; font-size: 14px;color: #f00;')
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
  isServer // is this enhancement applied in server-rendering or client
}) => {
  // ...apply enhancements for the site.
}
