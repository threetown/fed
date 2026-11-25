## Expressions

在 Mapbox 中，**条件定义**通常使用 Mapbox Expressions 来完成。Expressions 是一种强大的脚本语言，允许你基于图层特性（features）的属性动态地设置样式属性。

一个常见的条件定义可能看起来像这样，用于 `paint` 或 `layout` 属性中：

```json
"paint": {
  "fill-color": [
    "case",
    [">=", ["get", "population"], 1000000],
    "#ff0000", // 如果人口大于或等于1000000，使用红色
    [">=", ["get", "population"], 100000],
    "#ffa500", // 如果人口在100000到999999之间，使用橙色
    "#00ff00"  // 否则使用绿色
  ]
}
```

在这个例子中，`fill-color` 属性使用了一个 `case` 表达式来基于 `population` 属性的值设置颜色。如果 `population` 大于或等于 1000000，则颜色为红色；如果 `population` 在 100000 到 999999 之间，则颜色为橙色；否则颜色为绿色。

你也可以使用 `all`、`any`、`!`（非）、`==`（等于）、`!=`（不等于）等操作符来构建更复杂的条件。

例如，一个基于两个属性 `state` 和 `point_count` 的条件可能看起来像这样：

```json
"paint": {
  "fill-color": [
    "case",
    ["all", ["==", ["get", "state"], "2"], ["!", ["has", "point_count"]]],
    "#ff0000", // 如果state为"2"且没有point_count属性，使用红色
    ["all", ["==", ["get", "state"], "1"], ["!", ["has", "point_count"]]],
    "#0000ff", // 如果state为"1"且没有point_count属性，使用蓝色
    ["!", ["has", "point_count"]],
    "#ff00ff", // 如果没有point_count属性但state不是"1"或"2"，使用紫色
    "#00ff00"  // 否则使用绿色
  ]
}
```

在这个例子中，`fill-color` 属性基于 `state` 和 `point_count` 属性的值设置了不同的颜色。注意，由于 `case` 表达式是顺序执行的，一旦满足某个条件，它就会返回对应的值，并停止后续的评估。因此，你需要按照从具体到一般的顺序排列条件。





### 总结

你可以把它想像成JS中的`switch`