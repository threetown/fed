## Guide

**Mapbox GL JS** 是一个客户端（`client-side`）的JavaScript库，用于使用Mapbox的现代映射技术(modern mapping technology)构建web地图和web应用程序。您可以使用Mapbox GL JS在web浏览器或客户端中显示Mapbox地图，添加用户交互性，并在应用程序中自定义地图体验。





### key concepts

Mapbox有以下几个关键概念：

#### Mapbox GL

`Mapbox GL`，是一个可以在任何兼容web浏览器中使用OpenGL将2D和3D地图渲染为动态视觉图形的图形库（Graphics library），而无需要使用其他插件。

#### Client-side rendering

Mapbox GL JS依赖于客户端渲染(relies on client-side rendering)。地图是通过在浏览器中而不是（rather than）在服务器上将矢量瓦片（vector tiles）与样式规则相结合来动态渲染的，这使得可以根据用户交互来更改地图的样式和显示数据。

#### The Map class

`mapboxgl.Map`类是每一个Mapbox GL JS项目的基础。

```js
mapboxgl.accessToken = '<your access token here>';
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/mapbox/streets-v12', // style URL
  center: [-74.5, 40], // starting position [lng, lat]
  zoom: 9 // starting zoom
});
```

* **accessToken**：这个Mapbox的access token将您的Mapbox GL JS地图与Mapbox帐户相关联。
* **container**：地图被放置的HTML元素。在上面例子中，这个元素是ID为`map` 的`<div>`。
* **style**：地图样式的 [style URL](https://docs.mapbox.com/help/glossary/style-url/) 用于确定包括哪些 [tilesets](https://docs.mapbox.com/help/glossary/tileset/)以及它们的样式。上面的例子中使用的是 [Mapbox Streets v12](https://www.mapbox.com/maps/streets) 样式。当没有向`Map`构造函数提供`style`选择时，默认情况下会启用 [Mapbox Standard Style](https://www.mapbox.com/blog/standard-core-style) 。
* **center**：地图起始位置（starting position）的坐标，按经度（longitude）、纬度（latitude）顺序排列。
* **zoom**：应初始化地图的缩放级别（ [zoom level](https://docs.mapbox.com/help/glossary/zoom-level/) ）。这可以是一个整数或一个十进制值。



#### Layers

Mapbox GL JS地图可以由几个图层（Layers）组成，这些图层提供视觉元素和地图数据。

Mapbox GL JS的`addLayer`方法将Mapbox样式图层添加到地图样式中。

`addLayer`第一个参数可以接收Mapbox样式的图层对象。它还可以接收`before`参数，这个参数是要在之前插入新图层的现有图层的ID。如果省略此参数，则渲染器将在贴图顶部绘制层。



以下部分介绍了Mapbox样式图层对象的元素。

##### Asynchronous

由于Mapbox中的图层是远程的，所以它们是异步的。因此，连接到Mapbox的代码通常使用事件绑定来在正确的时间更改映射。如：

```js
map.on('load', () => {
  map.addLayer({
    id: 'terrain-data',
    type: 'line',
    source: {
      type: 'vector',
      url: 'mapbox://mapbox.mapbox-terrain-v2'
    },
    'source-layer': 'contour'
  });
});
```

上面的代码仅在加载了地图资源后，才使用`map.on('load')`调用`map.addLayer`



##### Layer source

添加新图层时必须定义source。一个source接受`type`和`url`，不包括没有`url`的`GeoJSON`。有6种类型的source，每种都有自己的属性：

- [vector tiles](https://docs.mapbox.com/style-spec/reference/sources/#vector)：矢量瓦片
- [raster tiles](https://docs.mapbox.com/style-spec/reference/sources/#raster)：光删瓦片
- [raster-dem](https://docs.mapbox.com/style-spec/reference/sources/#raster-dem)
- [GeoJSON](https://docs.mapbox.com/style-spec/reference/sources/#geojson)
- [image](https://docs.mapbox.com/style-spec/reference/sources/#image)
- [video](https://docs.mapbox.com/style-spec/reference/sources/#video)

Tileset可以包括称为资源图层（[source layers](https://docs.mapbox.com/help/glossary/source-layer/)）的多个数据子集。为了确保图层引用正确资源图层(source layers)，图层对象（layer object）还需要包括一个`source-layer`.

```js
map.on('load', () => {
  map.addLayer({
    id: 'rpd_parks',
    type: 'fill',
    source: {
      type: 'vector',
      url: 'mapbox://mapbox.3o7ubwm8'
    },
    'source-layer': 'RPD_Parks'
  });
});
```

> 也可以使用Mapbox的 [`addSource`](https://docs.mapbox.com/mapbox-gl-js/api/map/#map#addsource) 方法添加资源。使用这种方法性能上没有差异，但有时最好保持代码的可读性。



##### Layout and paint properties

图层具有两个特性，可启用数据样式： [`paint`](https://docs.mapbox.com/style-spec/reference/layers/#paint) 和 [`layout`](https://docs.mapbox.com/style-spec/reference/layers/#layout). 它们用于定义如何在地图上渲染数据。

* `paint`属性：更细精粒度的样式属性，如 opacity, color和translation.
* `layout`属性：指的是放置和可见性（visibility）以及其它高级首选项，并在渲染过程的早期应用。

以下代码将图层添加到地图中，并使用绿色填充（fill）设置数据样式。

```diff
map.on('load', () => {
  map.addLayer({
    id: 'rpd_parks',
    type: 'fill',
    source: {
      type: 'vector',
      url: 'mapbox://mapbox.3o7ubwm8'
    },
    'source-layer': 'RPD_Parks',
+   layout: {
+     visibility: 'visible'
+   },
+   paint: {
+     'fill-color': 'rgba(61,153,80,0.55)'
+   }
  });
});
```

> 如果使用 [`addSource`](https://docs.mapbox.com/mapbox-gl-js/api/map/#map#addsource) 方法添加source, 需要将source id作为source包含在 [`addLayer`](https://docs.mapbox.com/mapbox-gl-js/api/map/#map#addlayer)中.



#### Camera

camera是地图的视野，Mapbox提供了以下参数用于调整相机的视角：

*  `center`
*  `zoom`
*  `bearing` ：地图的视觉旋转
*  `pitch` ：地图的视觉倾斜

地图初始透视图中，`jumpTo`、`easeTo`和`flyTo` 都使用常用的摄影机选项。







## Map styles

https://docs.mapbox.com/mapbox-gl-js/guides/styles/

