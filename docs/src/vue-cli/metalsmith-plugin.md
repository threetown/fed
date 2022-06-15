# Metalsmith Plugin

## @metalsmith/markdown

> A Metalsmith plugin to render markdown files to HTML, using [Marked](https://github.com/markedjs/marked).



### source code

```js
/**
 * basename(path[, ext])，返回 path 的最后一部分
 * * basename('/foo/bar/baz/asdf/quux.html')，返回： `quux.html`
 * * basename('/foo/bar/baz/asdf/quux.html', '.html')，返回 `quux`
 * dirname(path)，返回 path 的目录名，尾随的目录分隔符被忽略。
 * * dirname('/foo/bar/baz/asdf/quux')，返回：`/foo/bar/baz/asdf`
 * extname(path)，返回 path 的扩展名，即 path 的最后一部分中从最后一次出现的 .（句点）字符到字符串的结尾
 * * path.extname('index.coffee.md')，返回: '.md'
 */
const { basename, dirname, extname, join } = require('path')
const debug = require('debug')('@metalsmith/markdown')
const { marked } = require('marked')

/**
 * 判断是否是 .md 或 .markdown 结尾的文件
 * Check if a `file` is markdown
 * @param {String} filePath
 * @return {Boolean}
 */
function isMarkdown(filePath) {
  return /\.md$|\.markdown$/.test(extname(filePath))
}

/**
 * @typedef Options
 * @property {String[]} keys - Key names of file metadata to render to HTML
 **/

/**
 * A Metalsmith plugin to render markdown files to HTML
 * @param {Options} [options]
 * @return {import('metalsmith').Plugin}
 */
function initMarkdown(options) {
  options = options || {}
  const keys = options.keys || []

	/**
 	 * 返回一个 metalsmith 插件，它有三个参数：files、metalsmith和done
 	 * @files，是一个Object，key/value中的每个key是以文件路径（file paths）和value包含文件元数据(metadata)、文件内容(file contents)等
 	 * @metalsmith，是一个对Metalsmith实例的引用，大部分情况下不需要使用
 	 * @done，是一个完成任务后的回调
 	 */
  return function markdown(files, metalsmith, done) {
    setImmediate(done)
    Object.keys(files).forEach(function (file) {
      debug('checking file: %s', file)
      // 如果不是markdown文件，则通过 return 跳出 forEach 本次循环
      if (!isMarkdown(file)) return
      // 获取files下的file值，即：正文内容【一般是二进制】
      const data = files[file]
      // path.dirname()获取目录
      const dir = dirname(file)
      // 组装 html路径
      let html = basename(file, extname(file)) + '.html'
      // 如果dir不是当前目录，则通过 dir和html合并路径
      if ('.' != dir) html = join(dir, html)

      debug('converting file: %s', file)
      // 通过options参数，来定义 marked 生成的内容
      const str = marked(data.contents.toString(), options)
      data.contents = Buffer.from(str)
      keys.forEach(function (key) {
        if (data[key]) {
          data[key] = marked(data[key].toString(), options)
        }
      })
			
      // 删除原来的files[file]
      // 如: readme.md: { contents: <Buffer...>, mode: '0644', stats: ... }
      delete files[file]
      // 生成新的file[html]
      // 如：readme.html
      files[html] = data
    })
  }
}

module.exports = initMarkdown
```









