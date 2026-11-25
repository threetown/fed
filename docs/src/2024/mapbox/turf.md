## Turf



Turf.js是一个功能丰富的JavaScript空间分析库，由Mapbox提供，旨在帮助开发者在浏览器和Node.js环境中执行各种空间操作。以下是Turf.js的主要作用及功能特点：

1. **空间分析功能**：
   - **测量相关**：如面积（area）、长度（length）、中心（center）、包络线（envelope）等测量工具，用于地理数据的定量分析。
   - **转换相关**：提供缓冲区（buffer）和绘制圆（circle）等功能，用于地理数据的转换和扩展。
   - **判断相关**：支持判断点是否在多边形内（booleanPointInPolygon）、判断是否包含（booleanContains）等判断功能，帮助开发者处理复杂的空间关系。

2. **数据兼容性**：
   - Turf.js原生支持GeoJSON矢量数据，这是一种结构简单且得到所有网页地图API支持的格式。这使得Turf.js能够轻松与各种地图库和框架集成。

3. **模块化设计**：
   - Turf.js采用模块化设计，允许开发者按需引入所需的功能模块，从而减少不必要的代码加载和提高性能。

4. **跨平台支持**：
   - 除了浏览器端，Turf.js还支持在Node.js服务器端使用，使得空间分析功能可以在更多场景下得到应用。

5. **易于集成**：
   - Turf.js可以方便地集成到Leaflet.js、Mapbox等地图控件中，为开发者提供强大的空间分析支持。

6. **算法优化**：
   - Turf.js利用最新的算法进行空间分析，无需将数据发送到服务器，从而保证了高效的数据处理速度和良好的用户体验。

7. **广泛应用**：
   - Turf.js已广泛应用于流行病学、生物学、统计学、经济学、商业、城市规划、地质学、石油和天然气等多个行业，为这些领域的研究和应用提供了强大的空间分析工具。

综上所述，Turf.js是一个功能强大、易于使用且广泛支持的空间分析库，为开发者在地图应用中实现复杂的空间分析功能提供了有力的支持。





### [Measurement](https://turfjs.org/docs/api/along#)

#### along

Takes a [LineString](https://tools.ietf.org/html/rfc7946#section-3.1.4) and returns a [Point](https://tools.ietf.org/html/rfc7946#section-3.1.2) at a specified distance along the line.

获取一个LineString并沿直线在指定距离处返回一个点。

```js
// 沿直line线，在200米处，返回一个点。
var line = turf.lineString([
  [-83, 30],
  [-84, 36],
  [-78, 41],
]);
var options = { units: "miles" };

var along = turf.along(line, 200, options);
```



#### area

Takes one or more features and returns their area in square meters.

获取一个或多个要素并返回其面积（平方米）。

```js
var polygon = turf.polygon([
  [
    [125, -15],
    [113, -22],
    [154, -27],
    [144, -15],
    [125, -15],
  ],
]);

var area = turf.area(polygon);
```



#### bbox

Calculates the bounding box for any GeoJSON object, including FeatureCollection. Uses geojson.bbox if available and options.recompute is not set.

计算任何GeoJSON对象（包括FeatureCollection）的边界框。如果可用，则使用`geojson.bbox`，并且未设置`options.recompute`。

```js
var line = turf.lineString([
  [-74, 40],
  [-78, 42],
  [-82, 35],
]);
var bbox = turf.bbox(line);
var bboxPolygon = turf.bboxPolygon(bbox);
```





#### bboxPolygon

Takes a bbox and returns an equivalent [polygon](https://tools.ietf.org/html/rfc7946#section-3.1.6).

获取一个长方体并返回一个等效多边形。

```js
var bbox = [0, 0, 10, 10];

var poly = turf.bboxPolygon(bbox);
```



#### bearing

Takes two [points](https://tools.ietf.org/html/rfc7946#section-3.1.2) and finds the geographic bearing between them, i.e. the angle measured in degrees from the north line (0 degrees)

取两个点，并找到它们之间的地理方位，即从北线（0度）以度为单位测量的角度

```js
var point1 = turf.point([-75.343, 39.984]);
var point2 = turf.point([-75.534, 39.123]);

var bearing = turf.bearing(point1, point2);
```



