

# MarkDown语法

## 流程图

Typora可以直接在markdown中画流程图，而且语法简洁易懂，这是个让我异常惊喜的功能。

::: tip 流程图

Typora使用`flowchart.js`来生成简单的SVG流程图，此外它还支持[mermaid engine](https://link.zhihu.com/?target=https%3A//mermaidjs.github.io/)。要知道，在市面上你绝少看到此类用户体验良好的作图App，更别说集成在一个markdown编辑器里面了。Typora支持三类流程图：

- sequence
- flowchart
- gantt

:::

### sequence

```markdown
​```sequence
李雷 -> 韩梅梅: Hello 梅梅, How are you?
Note right of 韩梅梅: 韩梅梅心想
韩梅梅 --> 李雷: I'm fine, thanks, and you?
​```
```

![Typora sequence](/blog/markdown/Typora_sequence.png)

### flow

```md
​```flow
st=>start: 闹钟响起
op=>operation: 与床板分离
cond=>condition: 分离成功?
e=>end: 快乐的一天

st->op->cond
cond(yes)->e
cond(no)->op
​```
```

![Typora_flow](/blog/markdown/Typora_flow.png)



### gantt

```markdown
​```mermaid
gantt
        dateFormat  YYYY-MM-DD
        title 快乐的生活
        section 吃一把鸡就学习
        学习            :done,    des1, 2021-01-06,2021-01-09
        疯狂学习               :active,  des2, 2021-01-09, 3d
        继续疯狂学习               :         des3, after des2, 5d
        吃鸡！               :         des4, after des3, 4d
        section 具体内容
        学习Python :crit, done, 2021-01-06,72h
        学习C++          :crit, done, after des1, 2d
        学习Lisp             :crit, active, 3d
        学习图形学        :crit, 4d
        跳伞           :2d
        打枪                      :2d
​```
```

![Typora_Mermaid](/blog/markdown/Typora_Mermaid.png)