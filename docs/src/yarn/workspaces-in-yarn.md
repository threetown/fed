# Workspaces in Yarn













## summary

* 痛点：

* 解决方案：monorepo、lerno、yarn workspace

* 典型案例：Jest（JavaScript monorepo）

  ```bash
  |- jest/
  |  |- package.json
  |  |- packages/
  |  |  |- jest-matcher-utils/
  |  |  |  |-  package.json
  |  |  |- jest-diff/
  |  |  |  |-  package.json
  ...
  ```

* 顶层package.json

  > 定义了项目的根目录，包含其他package.json文件的文件夹是工作区。

  ```json
  {
    "private": true,
    "name": "jest",
    "devDependencies": {
      "chalk": "^2.0.1"
    },
    "workspaces": [
      "packages/*"
    ]
  }
  ```

  



## ref

* [Workspaces in Yarn](https://classic.yarnpkg.com/blog/2017/08/02/introducing-workspaces/)









