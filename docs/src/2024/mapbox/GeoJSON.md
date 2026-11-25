## GeoJSON

在Mapbox中，GeoJSON是一种用于在地图上表示地理数据的格式。它基于JavaScript对象表示法（JSON），并遵循RFC 7946标准。GeoJSON支持多种几何类型，如点、线、多边形等，以及这些几何类型的集合。以下是一个关于Mapbox中GeoJSON结构的清晰说明及示例：

### GeoJSON结构

GeoJSON对象可以表示单个几何对象、几何对象的集合或相关的特征集合。每个GeoJSON对象都是一个JSON对象，包含一个"type"成员和一个或多个其他成员。

#### 单个几何对象

对于单个几何对象，GeoJSON的基本结构如下：

```json
{
  "type": "GeometryType",
  "coordinates": Coordinates
}
```

* `"type"`: 几何对象的类型（如`"Point"`, `"LineString"`, `"Polygon"`, `"MultiPoint"`, `"MultiLineString"`, `"MultiPolygon"`）。
* `"coordinates"`: 几何对象的坐标。具体格式取决于`type`的值。

#### 特征集合（FeatureCollection）

特征集合是GeoJSON中更常见的结构，因为它允许将几何对象与属性数据关联起来。其结构如下：

```json
{
  "type": "FeatureCollection",
  "features": [
    Feature,
    ...
  ]
}
```

* `"type"`: 必须是`"FeatureCollection"`。
* `"features"`: 一个特征对象的数组。

#### 特征（Feature）

特征是GeoJSON中的核心对象，它包含一个几何对象以及与之关联的属性。其结构如下：

```json
{
  "type": "Feature",
  "geometry": Geometry,
  "properties": {
    // 属性键值对
  }
}
```

* `"type"`: 必须是`"Feature"`。
* `"geometry"`: 任何几何对象（如上所述）。
* `"properties"`: 包含与几何对象相关的任意键值对。

### 示例

#### 点（Point）

```json
{
  "type": "Point",
  "coordinates": [102.0, 0.5]
}
```

#### 线（LineString）

```json
{
  "type": "LineString",
  "coordinates": [
    [102.0, 0.0], [103.0, 1.0], [104.0, 0.0], [105.0, 1.0]
  ]
}
```

#### 多边形（Polygon）

```json
{
  "type": "Polygon",
  "coordinates": [
    [
      [102.0, 2.0], [103.0, 2.0], [103.0, 3.0], [102.0, 3.0], [102.0, 2.0]
    ]
  ]
}
```

#### 特征集合（FeatureCollection）

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [102.0, 0.5]
      },
      "properties": {
        "prop0": "value0"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [102.0, 0.0], [103.0, 1.0], [104.0, 0.0], [105.0, 1.0]
        ]
      },
      "properties": {
        "prop0": "value0",
        "prop1": 0.0
      }
    },
    // ...更多特征...
  ]
}
```

这个示例展示了一个特征集合，其中包含两个特征：一个点特征和一个线特征。每个特征都有一个与之关联的属性对象。

### 总结

在Mapbox中使用GeoJSON时，了解其基本结构和类型是非常重要的。通过特征集合和特征，你可以轻松地将复杂的地理数据表示为JSON对象，并在地图上以有意义的方式显示它们。









GeoJSON has several geometry types such as:

- Point
- LineString
- Polygon

```js
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [ -76.98588283831188, 38.91325388233176 ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          [ -76.98346652955802, 38.900709055388376 ],
          [ -76.9516816234386, 38.90311744774371 ]
        ],
        "type": "LineString"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          [
            [ -76.9659185849195, 38.91367109578195 ],
            [ -76.9659185849195, 38.908464519804426 ],
            [ -76.94607443763235, 38.908464519804426 ],
            [ -76.94607443763235, 38.91367109578195 ],
            [ -76.9659185849195, 38.91367109578195 ]
          ]
        ],
        "type": "Polygon"
      }
    }
  ]
}
```

