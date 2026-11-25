## Map Design

[map design](https://docs.mapbox.com/help/dive-deeper/map-design)



## How do I make a map?



There are multiple ways to make a map that makes your data shine: You can use [Mapbox Standard style](https://docs.mapbox.com/help/dive-deeper/map-design/#mapbox-standard), our [Mapbox classic style templates](https://docs.mapbox.com/help/dive-deeper/map-design/#mapbox-classic-style-templates-and-custom-styles), or build a [custom style](https://docs.mapbox.com/help/dive-deeper/map-design/#how-to-create-a-custom-style) completely from scratch.











**basemap**

**custom layers**

先有底图basemap，然后在它上面添加  natural features，道路，建筑物等。

`setConfigProperty()`









**Sources**：Sources contain geographic data.They determine the shape of the features you’re adding to the map and where in the world they belong. 

**Layers**：Layers contain styling information. They determine how the data in a source should look on the map.

source就是资源，资源包括信息；
layer图层，样式信息；





### About datasets

[About datasets](https://docs.mapbox.com/help/tutorials/add-points-pt-1/#about-datasets)

You can edit both dataset features and properties in the [dataset editor](https://studio.mapbox.com/datasets/):

- **Features** are the points, lines, and polygons on your map. You can add new features using the draw tools, edit the placement or shape of features using by clicking and dragging features on the map, or remove features all together by clicking on them and hitting the delete key. You can also click on each feature in the dataset editor to view its properties.

  要素是地图上的点、线、面。

- **Properties** can be strings, numbers, or boolean. In the sample dataset you uploaded, there are `title` and `description` properties for each point with a unique text string. You can edit properties, add new properties, or delete properties in the dataset editor. *Make sure any content that you want to display in popups in your final product is included as a property while you are working in the dataset editor.*

  属性可以是字符串，数字或布尔值。



### Dataset Editor

https://docs.mapbox.com/studio-manual/reference/datasets/#dataset-editor





### About tilesets

Web maps are comprised of [map tiles](https://docs.mapbox.com/help/dive-deeper/web-apps/). A collection of tiles is called a tileset.

Tilesets can include multiple subsets of data called [source layers](https://docs.mapbox.com/help/glossary/source-layer/) (the Mapbox Streets tileset contains source layers for roads, parks, etc). 





#### difference between tilesets and datasets

For more information on the difference between tilesets and datasets, see our [Upload new data](https://docs.mapbox.com/help/getting-started/data-guide/) getting started guide.





## The camera

The camera is the map's field of view. While the viewpoint in maps made with traditional web mapping libraries is determined by the map's center point and zoom level, Mapbox GL JS also includes parameters like pitch and bearing for adjusting the map's perspective.

摄像机是地图的可视区域。而使用传统网络地图库制作的地图中的视点是由地图的中心点和缩放级别决定的，Mapbox还包括用于调整地图视角的俯仰角(pitch)和方位(bearing)等参数。  

- **Center**: in longitude, latitude order.
- **Zoom**: any number within the zoom range, including decimals. For example, 1.5 or 6.2 are valid zoom levels.
- **Bearing**: a value between 0 and 360 degrees that determines the map's bearing, or rotation.
- **Pitch**: a value between 0 and 85 degrees that determines the map's tilt, or pitch.

```js
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [-74.5, 40],
  zoom: 9
});
```



## Layer

Traditional JavaScript map libraries often have two distinct categories of what are called "[layers](https://docs.mapbox.com/help/glossary/layer/)": **baselayers**, or image tiles that provide the foundation of the map, and **overlays**, which are often vector data like GeoJSON that are displayed on top of baselayers, sometimes obscuring details like labels.

传统的JS地图库通常有两类不同的`layers(图层)`：baselayers（底图）或提供地图基础的图像瓦片，和`overlays（覆盖层）`—— 它们通常是显示在底图上的矢量数据，如：GeoJSON，有时会掩盖标签等细节。

Mapbox GL JS has **no distinction between baselayers and overlay layers**. This means that map details like labels and [icons](https://docs.mapbox.com/help/glossary/icon/) and elements like streets and buildings can be modified with JavaScript, like overlays in earlier mapping libraries.

Mapbox对`baselayers（底图）`和`overlay layers（覆盖层）`没有区别。这意味着可以使用JavaScript修改`label`标签和`icon`图标等地图细节以及街道和建筑物等元素，类似于早期地图库中的覆盖层。

### Adding layers to the map

You can add layers to the map using the  [`addLayer()`](https://docs.mapbox.com/mapbox-gl-js/api/map/#map#addlayer)  method.

```js
addLayer(layer, beforeId?)
```

`addLayer` has only one required parameter: a Mapbox style layer object. It also accepts an optional `before` parameter, which is the ID of an existing layer to insert the new layer before. 

`addLayer`有一个必须参数：layer对象和一个可选参数`beforeId`（用于在已经存在的图层ID上插入新图层）。



#### Asynchronous

Since these resources are **remote**, they are **asynchronous**. So code that connects to Mapbox GL JS often uses event binding to change the map at the right time. For instance:

由于这些资源是远程的，所以它们是异步的。因此，连接到Mapbox GL JS的代码通常使用事件绑定来在正确的时间更改映射。例如：

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

The code uses `map.on('load')` to call `map.addLayer` only after the map's resources, including the style, have been loaded. If it were to run the `map.addLayer` method immediately, it would trigger an error because the style to which you would like to add a layer would not yet exist.

只有在加载了地图的资源（包括样式）后，代码使用 `map.on('load')` 仅在地图的资源之后调用 `map.addLayer` 。如果立即运行`map.addLayer`方法，则会触发一个错误，因为要添加图层的样式还不存在。



#### Specifying a source

You will need to define a source when you add a new layer. A source accepts a `type` and a `url` (a GeoJSON source will not have a `url`). There are five types of sources, each with its own properties:

指定资源。添加新图层时，需要定义`source（源）`。`source（源）`接受一个类型和一个url（GeoJSON源将没有url）。有五种类型的源，每种源都有自己的属性：

- [vector tiles](https://docs.mapbox.com/style-spec/reference/sources/#vector)
- [raster tiles](https://docs.mapbox.com/style-spec/reference/sources/#raster)
- [GeoJSON](https://docs.mapbox.com/style-spec/reference/sources/#geojson)
- [image](https://docs.mapbox.com/style-spec/reference/sources/#image)
- [video](https://docs.mapbox.com/style-spec/reference/sources/#video)

Tilesets can include multiple subsets of data called [source layers](https://docs.mapbox.com/help/glossary/source-layer/) (the Mapbox Streets tileset contains source layers for roads, parks, etc). To make sure your layers are referencing the correct source layers, your layer object also needs to include a `source-layer` (often the name of the original file). See this example:

`Tilesets（瓦片集合）`可以包括称为源层的多个子数据（Mapbox的街道瓦片集集合，包含道路、公园等的源层）。为了确保图层引用正确的源图层，图层对象还需要包括一个`source-layer`（通常是原始文件的名称）。请参见此示例：

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

You can also add sources using the Mapbox GL JS `addSource()` method. There is no difference in map performance when using this alternative method, but it is sometimes preferable to keep code more readable.你也可以使用Mapbox中的  [`addSource()`](https://docs.mapbox.com/mapbox-gl-js/api/#Map#addSource)  方法添加`source（数据源）`。使用此替代方法时，地图性能没有差异。



#### Specifying layout and paint properties









https://docs.mapbox.com/studio-manual/reference/styles/



https://docs.mapbox.com/help/tutorials/add-points-pt-3/



 [Mapbox Studio manual](https://docs.mapbox.com/studio-manual/)