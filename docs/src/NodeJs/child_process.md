# child_process

:::tip 路径
* 当前文件所在路径：`__dirname`
* 当前工作路径：`process.cwd()`
:::

## 一、创建子进程的方式
:::tip
* `.exec()`、`.execFile()`、`.fork()` 底层都是通过 `.spawn()` 实现的。
* `.exec()`、`.execFile()`额外提供了回调，当子进程停止的时候执行。
* 每一种方式都有对应的同步版本：`spawnSync()`、`execSync()`、`execFileSync()`

```bash
child_process.spawn(command[, args][, options])
child_process.exec(command[, options][, callback])
child_process.execFile(file[, args][, options][, callback])
child_process.fork(modulePath[, args][, options])
```

:::

### 1. exec()

创建一个shell，然后在shell里执行命令。执行完成后，将stdout、stderr作为参数传入回调方法。

```bash
child_process.exec(command[, options][, callback])
```



### 2. execFile()

跟 `.exec()` 类似，不同点在于，没有创建一个新的shell，比`child_process.exec()`效率高一些

```bash
child_process.execFile(file[, args][, options][, callback])
```

:::warning exec()与execFile()之间的区别
首先，exec() 内部调用 execFile() 来实现，而 execFile() 内部调用 spawn() 来实现。

`exec() -> execFile() -> spawn()`

其次，execFile() 内部默认将 options.shell 设置为false，exec() 默认不是false。

:::



### 3. fork()

```bash
child_process.fork(modulePath[, args][, options])
```



### 4. spawn()

```bash
child_process.spawn(command[, args][, options])
```





