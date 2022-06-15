# npm私库

## 一、技术选型

* [nexus](https://www.sonatype.com/nexus-repository-oss) - 是 Java 社区的一个方案，可以用于 Maven、npm 多种类型的仓库，界面比较丑。
* [verdaccio](https://verdaccio.org/)



## 二、发布到verdaccio

* 安装

  ```bash
  npm install --global verdaccio
  ```

* 启动

  > 配置文件在：`~/.config/verdaccio/config.yaml`

  ```bash
  $> verdaccio
  warn --- config file  - /home/.config/verdaccio/config.yaml
  warn --- http address - http://localhost:4873/ - verdaccio/5.0.0
  ```

  启动后，可以看到 `http address`，可以设置参数：`verdaccio --listen 4000 --config ~./config.yaml`

* 设置 **registry** 地址

  For more information about the CLI, please [read the cli section](https://verdaccio.org/docs/cli).

  You can set the registry by using the following command.

  ```bash
  npm set registry http://localhost:4873/
  ```

  you can pass a `--registry` flag when needed.

  ```bash
  npm install --registry http://localhost:4873
  ```

  define in your `.npmrc` a `registry` field.

  .npmrc

  ```bash
  # 镜像源地址
  registry=http://localhost:4873
  ```

  Or a `publishConfig` in your `package.json`

  ```json
  {
    "publishConfig": {
      "registry": "http://localhost:4873"
    }
  }
  ```

### 2.1 登录

* 首次登陆，需要注册用户名和密码：

  ```bash
  npm adduser --registry http://localhost:9095/
  Username: leon_aurora
  Password:
  Email: (this IS public) ttflowerboys@gmail.com
  Logged in as leon_aurora on http://localhost:9095/.
  ```

### 2.2 发布

```bash
npm publish --registry http://localhost:9095/
```

## 三、发布到npm

### 3.1 npm账号

* 地址：`https://www.npmjs.com/login`

	* username：`ttflowerboys`
	* email：`ttflowerboys@gmail.com`
	* password：`A.min88888`

### 3.2 登录npm

* 登录npm账号

  ```bash
  $ npm login
  Username: ttflowerboys
  Password:
  Email: (this IS public) ttflowerboys@gmail.com
  Logged in as ttflowerboys on https://registry.npmjs.org/.
  ```

### 3.3 发布模块

```bash
npm publish
```

## 四、npm常用命令

* 设置镜像源

  ```bash
  npm set registry <your-npm-origin-url>
  ```

* 查看镜像源

  ```bash
  npm config get registry
  ```

* 登录npm

  ```bash
  npm login
  ```

* 登出npm

  ```bash
  npm logout
  ```

* 查看当前用户信息

  ```bash
  npm who am i
  ```

* 发布到npm

  ```bash
  npm publish
  ```

* 删除 npm

  > npm的删除限制：
  >
  > - 删除的版本**24小时**后方可重发!
  > - 只有发布**72小时之内**的包可以删除!

  ```bash
  npm unpublish <pkg> --force
  ```

* 废弃指定版本

  ```bash
  npm deprecate <pkg>[@<version>] <message>
  ```

## 五、常见问题

* 注意模块名（即：`package.json` 的 `name` 和 `version` 字段）

  ```bash
  403 Forbidden - PUT http://registry.npmjs.org/demo - You do not have permission to publish "demo". Are you logged in as the correct user?
  ```

* 403 Forbidden

  ```bash
  npm ERR! code E403
  npm ERR! 403 403 Forbidden - PUT https://registry.npmjs.org/leonaurora - Forbidden
  npm ERR! 403 In most cases, you or one of your dependencies are requesting
  npm ERR! 403 a package version that is forbidden by your security policy.
  ```

  * 如果是新注册的用户，请注意是否已**校验邮箱**！

* 网络请求错误

  ```bash
  npm ERR! network request to https://registry.npmjs.org/-/v1/login failed
  ```

  * 设置为 **HTTP** 协议：`npm config set registry http://registry.npmjs.org`

