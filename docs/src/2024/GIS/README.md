# WEBGIS

> * 2D
>   * openlayers
>   * leaflet
> * 2.5D
>   * Mapbox
> * 3D
>   * cesium

## GeoJSON

[What is GeoJSON and why should you care about it](https://www.bilibili.com/video/BV1UC4y1a7vu)

> Specification for storing getgraphic data in JSON form.
>
> Vercor data ——Points、Lines and polugons
>
> Attributes

* A specification for creating, identifying, and storing geospatial data in JavaScript Object Notition



* Mapping API's
  * Leaflet
  * OpenLayers
  * mapbox
  * cesium
* software
  * QGIS
  * Turf.js

### POINT

```json
{
  "type": "Point",
  "coordinates": [100, 200]
}


{
  "type": "MultiPoint",
  "coordinates": [
    [-108.5, 33.7], [-108.4, 33.5], [-108.6, 33.2]
  ]
}
```



### LINE

```json
{
  "type": "LineString",
  "coordinates": [
    [-108.5, 33.7], [-108.4, 33.5], [-108.6, 33.2]
  ]
}


{
  "type": "MultiLineString",
  "coordinates": [
    [[-108.5, 33.7], [-108.4, 33.5], [-108.6, 33.2]],
    [[-108.5, 33.7], [-108.4, 33.5], [-108.6, 33.2]],
    [[-108.5, 33.7], [-108.4, 33.5], [-108.6, 33.2]]
  ]
}
```



### POLYGON

```json
{
  "type": "Polygon",
  "coordinates": [
    [[-108.5, 33.7], [-108.4, 33.5], [-108.6, 33.2]],
    [[-108.5, 33.7], [-108.4, 33.5], [-108.6, 33.2]]
  ]
}

{
  "type": "MultiPolygon",
  "coordinates": [
    [
      [[-108.5, 33.7], [-108.4, 33.5], [-108.6, 33.2]],
    	[[-108.5, 33.7], [-108.4, 33.5], [-108.6, 33.2]]
    ],
    [
      [[-108.5, 33.7], [-108.4, 33.5], [-108.6, 33.2]],
    	[[-108.5, 33.7], [-108.4, 33.5], [-108.6, 33.2]]
    ],
  ]
}
```



### feature and featureCollection

```json
{
  "type": "feature",
  "geometry": {
    "type": "Point",
    "coordinates": [-108.5, 33.7]
  },
  "properties": {
    "species": "Bald Eagle",
    "age": 18
  }
}
```

* featureCollection

```json
{
  "type": "featureCollection",
  "features": [
    {
      "type": "feature",
      "geometry": { "type": "Point", "coordinates": [-108.5, 33.7] },
      "properties": { "species": "Bald Eagle", "age": 18 }
    },
    {
      "type": "feature",
      "geometry": { "type": "Point", "coordinates": [-108.5, 33.7] },
      "properties": { "species": "Google Eagle", "age": 18 }
    }
  ]
}
```

