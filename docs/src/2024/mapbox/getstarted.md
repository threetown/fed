## Creating a web app

* Include relevant JavaScript and CSS files

  ```html
  <script src="https://api.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.js"></script>
  <link href="https://api.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.css" rel="stylesheet" />
  ```

* Create `id="map"` element

  ```html
  <div id="map"></div>
  ```

* The basis of every Mapbox GL JS project is the `mapboxgl.Map` class. The example code in this section demonstrates the minimum you need to add a map to your page.

  ```js
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-74.5, 40],
    zoom: 9
  });
  ```

  * **Container**: This is the HTML element where you would like to place your map. In the example above, it is an element with `id="map"`.

     放置地图的HTML元素，上面例子中它是一个`id="map"`的元素。

  * **Style**: The map loads a style via the URL `mapbox://styles/mapbox/streets-v12`. This is a URL to a remote file that the map will download to determine the [tilesets](https://docs.mapbox.com/help/glossary/tileset/) it includes and how they are styled for the end-user. Mapbox GL JS permits URLs instead of literal data in several places, including data sources. Consider using a style with [style-optimized vector tiles](https://docs.mapbox.com/help/glossary/style-optimized-vector-tiles/) for more performant maps.

    这是一个指向远程文件的URL，地图将下载该文件以确定其中包含的`tilesets(瓦片集)`以及它们如何为最终用户设置样式。

    Mapbox允许在多个地方使用URL而不是文字数据，包括数据源。考虑使用具有样式优化矢量平铺的样式来获得更高性能的贴图。

  * **Center**: Where Mapbox GL JS handles coordinates as arrays (here `[-74.50, 40]`), it assumes that the coordinates are in [`longitude, latitude`](https://docs.mapbox.com/help/glossary/lat-lon/) order (versus `latitude, longitude` in Leaflet). This order corresponds to the order of coordinates in GeoJSON and every other geospatial format, as well as math's X, Y ordering.

    Mapbox将坐标处理为数组，它假设坐标是按照`longitude（经度）`、`latitude（纬度）`的顺序排列的。此顺序对应于GeoJSON和其他所有地理空间格式中的坐标顺序，以及数学的X、Y顺序。

  * **Zoom**: The zoom level at which the map should be initialized. With Mapbox GL JS, can be a decimal value.

    应初始化地图的缩放级别。使用Mapbox，可以是十进制值。

