# bug

## node-sass

* 错误信息如下：

```bash
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! node-sass@4.11.0 postinstall: `node scripts/build.js`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the node-sass@4.11.0 postinstall script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
```

* 问题原因：

  > `node-sass` 版本与 `node` 版本不匹配。

* 问题分析过程：

  ```bash
  $ node -v
  v14.17.6
  ```

  在 [node-sass](https://www.npmjs.com/package/node-sass) 文档里可以看到 `NodeJS` 与 `node-sass` 的匹配列表

  | NodeJS  | Supported node-sass version | Node Module |
  | ------- | --------------------------- | ----------- |
  | Node 20 | 9.0+                        | 115         |
  | Node 19 | 8.0+                        | 111         |
  | Node 18 | 8.0+                        | 108         |
  | Node 17 | 7.0+, <8.0                  | 102         |
  | Node 16 | 6.0+                        | 93          |
  | Node 15 | 5.0+, <7.0                  | 88          |
  | Node 14 | 4.14+, <9.0                 | 83          |
  | Node 13 | 4.13+, <5.0                 | 79          |
  | Node 12 | 4.12+, <8.0                 | 72          |
  | Node 11 | 4.10+, <5.0                 | 67          |
  | Node 10 | 4.9+, <6.0                  | 64          |
  | Node 8  | 4.5.3+, <5.0                | 57          |
  | Node <8 | <5.0                        | <57         |

* **解决问题**：

  通过对比，本机**nodejs** 是：`node 14.17.6`，支持的 `node-sass 4.14+` 。所以升级 `node-sass` 即可：

  ```diff
  - "node-sass": "^4.11.0",
  + "node-sass": "^4.14.0",
  ```




## update node

[Download Node.js](https://nodejs.org/en/download/package-manager/current)

通过 `nvm` 将 `node` 升级到 **16**

```bash
$ nvm install 16
Downloading and installing node v16.20.2...
Downloading https://nodejs.org/dist/v16.20.2/node-v16.20.2-darwin-x64.tar.xz...
######################################################################################################### 100.0%
Computing checksum with shasum -a 256
Checksums matched!
Now using node v16.20.2 (npm v8.19.4)
```

* 通过 npm 创建script

  ```bash
  npm set-script [<script>] [<command>]
  
  # eg: npm set-script start "http-server ."
  ```






## vi command

* `i`：进入编辑状态
* `Enter`：回车键，用于回车换行
* `ESC`：退出编辑
* `:wq`：保存并退出

