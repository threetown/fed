## InfiniteScroll



* `getComputedStyle`

```js
const getStyleComputedProperty = (element, property) => {
  if (element === window) {
    element = document.documentElement;
  }

  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  const css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
};
```



* `getBoundingClientRect`

```js
const getElementTop = el => el.getBoundingClientRect().top;
```

