## 配置

* 在 **PATH** 中安装 `code` 命令。

  在 **VS Code**中，通过快捷键 `command` + `shift` + `p` 打开命令输入框，输入以下 Shell 命令：

  ```bash
  Install 'code' command in PATH
  ```

  

* 在 **Terminal** 中执行命令：

  ```bash
  git config --global core.editor 'code --wait'
  ```

  

* 在 **Terminal** 中执行命令：

  ```bash
  git config --global -e
  ```

  在打开的 `~/.gitconfig` 文件中，增加以下内容：

  ```yaml
  [diff]
      tool = default-difftool
  [difftool "default-difftool"]
      cmd = code --wait --diff $LOCAL $REMOTE
  ```

  

https://juejin.cn/post/6844903606815064077