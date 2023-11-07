(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{550:function(n,r,t){"use strict";t.r(r),r.default="# 动态排序柱状图\r\n\r\n## 基本设置\r\n\r\n动态排序柱状图是一种展示随时间变化的数据排名变化的图表，从 ECharts 5 开始内置支持。\r\n\r\n> 动态排序柱状图通常是横向的柱条，如果想要采用纵向的柱条，只要把本教程中的 X 轴和 Y 轴相反设置即可。\r\n\r\n1. 柱状图系列的 `realtimeSort` 设为 `true`，表示开启该系列的动态排序效果\r\n2. `yAxis.inverse` 设为 `true`，表示 Y 轴从下往上是从小到大的排列\r\n3. `yAxis.animationDuration` 建议设为 `300`，表示第一次柱条排序动画的时长\r\n4. `yAxis.animationDurationUpdate` 建议设为 `300`，表示第一次后柱条排序动画的时长\r\n5. 如果想只显示前 _n_ 名，将 `yAxis.max` 设为 _n - 1_，否则显示所有柱条\r\n6. `xAxis.max` 建议设为 `'dataMax'` 表示用数据的最大值作为 X 轴最大值，视觉效果更好\r\n7. 如果想要实时改变标签，需要将 `series.label.valueAnimation` 设为 `true`\r\n8. `animationDuration` 设为 `0`，表示第一份数据不需要从 `0` 开始动画（如果希望从 `0` 开始则设为和 `animationDurationUpdate` 相同的值）\r\n9. `animationDurationUpdate` 建议设为 `3000` 表示每次更新动画时长，这一数值应与调用 `setOption` 改变数据的频率相同\r\n10. 以 `animationDurationUpdate` 的频率调用 `setInterval`，更新数据值，显示下一个时间点对应的柱条排序\r\n\r\n## 示例\r\n\r\n完整的例子如下：\r\n\r\n```js live\r\nvar data = [];\r\nfor (let i = 0; i < 5; ++i) {\r\n  data.push(Math.round(Math.random() * 200));\r\n}\r\n\r\noption = {\r\n  xAxis: {\r\n    max: 'dataMax'\r\n  },\r\n  yAxis: {\r\n    type: 'category',\r\n    data: ['A', 'B', 'C', 'D', 'E'],\r\n    inverse: true,\r\n    animationDuration: 300,\r\n    animationDurationUpdate: 300,\r\n    max: 2 // only the largest 3 bars will be displayed\r\n  },\r\n  series: [\r\n    {\r\n      realtimeSort: true,\r\n      name: 'X',\r\n      type: 'bar',\r\n      data: data,\r\n      label: {\r\n        show: true,\r\n        position: 'right',\r\n        valueAnimation: true\r\n      }\r\n    }\r\n  ],\r\n  legend: {\r\n    show: true\r\n  },\r\n  animationDuration: 3000,\r\n  animationDurationUpdate: 3000,\r\n  animationEasing: 'linear',\r\n  animationEasingUpdate: 'linear'\r\n};\r\n\r\nfunction update() {\r\n  var data = option.series[0].data;\r\n  for (var i = 0; i < data.length; ++i) {\r\n    if (Math.random() > 0.9) {\r\n      data[i] += Math.round(Math.random() * 2000);\r\n    } else {\r\n      data[i] += Math.round(Math.random() * 200);\r\n    }\r\n  }\r\n  myChart.setOption(option);\r\n}\r\n\r\nsetInterval(function() {\r\n  update();\r\n}, 3000);\r\n```\r\n"}}]);