# wx-charts-demo
Demos for [wxCharts](https://github.com/xiaolin3303/wx-charts)

可直接在微信开发工具中运行，请确保使用了最新的微信开发工具

# ECharts资源

> ECharts，一个使用 JavaScript 实现的开源可视化库，可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE8/9/10/11，Chrome，Firefox，Safari等），底层依赖轻量级的矢量图形库 ZRender，提供直观，交互丰富，可高度个性化定制的数据可视化图表。


[imooc-echarts](https://github.com/shengxinjing/imooc-echarts)

[echarts-for-weixin](https://github.com/ecomfe/echarts-for-weixin)

[ECharts](http://echarts.baidu.com/feature.html)

[Echarts3.0入门基础与实战](https://www.imooc.com/learn/687)


# [方法 & 事件 - wxCharts使用说明](https://github.com/xiaolin3303/wx-charts/issues/57)

- `updateData(data)`更新图表数据，data:object，data.categories(可选，具体见参数说明)，data.series(可选，具体见参数说明)，data.title(可选，具体见参数说明)，data.subtitle(可选，具体见参数说明)

- `stopAnimation()` 停止当前正在进行的动画效果，直接展示渲染的最终结果

- `addEventListener(type, listener)` 添加事件监听，`type: String`事件类型，`listener: function` 处理方法

- `getCurrentDataIndex(e)` 获取图表中点击时的数据序列编号(-1表示未找到对应的数据区域), e: Object微信小程序标准事件，需要手动的去绑定touch事件，具体可参考[wx-charts-demo](https://github.com/xiaolin3303/wx-charts-demo)中column图示例

- `showToolTip(e, options?)` 图表中展示数据详细内容(目前仅支持line和area图表类型)，e: Object微信小程序标准事件，`options: Object`可选，tooltip的自定义配置，支持option.background，默认为`#000000; option.format, function`类型，接受两个传入的参数，`seriesItem(Object`, 包括seriesItem.name以及seriesItem.data)和category，可自定义tooltip显示内容。具体可参考[wx-charts-demo](https://github.com/xiaolin3303/wx-charts-demo)中column图示例中`line`图示例

- `scrollStart(e), scroll(e), scrollEnd(e)`设置支持图表拖拽系列事件(支持`line, area, column`)，具体参考[wx-charts-demo](https://github.com/xiaolin3303/wx-charts-demo)中`ScrollLine`图示例

## 事件
`renderComplete` 图表渲染完成（如果有动画效果，则动画效果完成时触发）
## 如何使用事件

```
let chart = new wxCharts(...);
chart.addEventListener('renderComplete', () => {
    // your code here
});
```