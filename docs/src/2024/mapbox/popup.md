## Popup



在Mapbox GL JS中，`Popup` 是一种常用的交互元素，用于在地图上显示与特定位置（如标记点、形状等）相关的信息。当用户点击或触摸地图上的某个元素时，`Popup` 可以动态地出现并显示相关的文本、图片或其他内容。

以下是一个使用 Mapbox GL JS 的 `Popup` 功能的简单代码示例：

```javascript
// 假设你已经有一个有效的 Mapbox 访问令牌
mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

// 初始化地图
var map = new mapboxgl.Map({
  container: 'map', // 地图容器的ID
  style: 'mapbox://styles/mapbox/streets-v11', // 地图样式
  center: [-74.006, 40.7128], // 地图中心点
  zoom: 13 // 地图缩放级别
});

// 创建一个标记点
var marker = new mapboxgl.Marker({
  element: document.createElement('div'), // 创建一个空的div元素作为标记点的容器
  color: '#3FB1CE', // 标记点的颜色
  anchor: 'bottom' // 标记点相对于其“元素”的位置
})
.setLngLat([-74.006, 40.7128]) // 设置标记点的经纬度
.addTo(map); // 将标记点添加到地图上

// 创建一个 Popup
var popup = new mapboxgl.Popup({ closeButton: false, closeOnClick: false })
  .setText('这是一个Popup示例！'); // 设置Popup的文本内容

// 当点击标记点时显示Popup
marker.on('click', function () {
  // 更新Popup的位置和内容
  popup.setLngLat(marker.getLngLat())
      .setText('你点击了标记点！')
      .addTo(map); // 将Popup添加到地图上
});

// 如果需要，你可以监听地图的'click'事件来移除Popup
map.on('click', function(e) {
  if (popup) {
    map.removePopup(popup); // 当点击地图的其他位置时移除Popup
  }
});
```

在这个示例中，我们首先创建了一个 `mapboxgl.Map` 实例来初始化地图。然后，我们创建了一个 `mapboxgl.Marker` 并在地图上添加了一个标记点。接下来，我们创建了一个 `mapboxgl.Popup` 实例，并设置了其文本内容。最后，我们给标记点添加了一个点击事件监听器，当点击标记点时，Popup 会在标记点的位置显示，并显示我们设置的文本内容。

同时，我们还给地图添加了一个点击事件监听器，用于在点击地图的其他位置时移除Popup。这是为了防止Popup在不需要时仍然显示在地图上。

请注意，你需要将 `'YOUR_MAPBOX_ACCESS_TOKEN'` 替换为你自己的 Mapbox 访问令牌，以便能够加载和使用 Mapbox 的地图样式和数据。