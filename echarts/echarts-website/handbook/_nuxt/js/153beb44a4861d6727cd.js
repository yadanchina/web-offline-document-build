(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{451:function(e,r,n){"use strict";n.r(r),r.default="# What's New in Apache ECharts 5.2.0\r\n\r\n## Universal Transition\r\n\r\nNatural and smooth transition animations have been an important feature in Apache ECharts. By avoiding abrupt changes from data update, it not only improves the visual effect, but also provides the possibility to express the association and evolution of data. Therefore, in 5.2.0, we have further enhanced this animation capability. Next, we will see how this **Universal Transition** adds expressiveness and narrative power to the chart.\r\n\r\nIn previous versions, transition animations had certain limitations: they could only be used for the position, size of the same shape, and they could only work on the same type of series. For example, the following example reflects the change in data percent through the change in sector shape in a pie chart.\r\n\r\n```js live {layout: 'lr'}\r\nfunction makeRandomData() {\r\n  return [\r\n    {\r\n      value: Math.random(),\r\n      name: 'A'\r\n    },\r\n    {\r\n      value: Math.random(),\r\n      name: 'B'\r\n    },\r\n    {\r\n      value: Math.random(),\r\n      name: 'C'\r\n    }\r\n  ];\r\n}\r\noption = {\r\n  series: [\r\n    {\r\n      type: 'pie',\r\n      radius: [0, '50%'],\r\n      data: makeRandomData()\r\n    }\r\n  ]\r\n};\r\n\r\nsetInterval(() => {\r\n  myChart.setOption({\r\n    series: {\r\n      data: makeRandomData()\r\n    }\r\n  });\r\n}, 2000);\r\n```\r\n\r\nAnd starting with 5.2.0, we introduced universal transition, a more powerful animation feature. With that, transitions are no longer limited to between series of the same type. Now, we can use this cross-series morphing to animate between any type of series and any type of shapes.\r\n\r\nHow cool would this be? Let's have a look!\r\n\r\n### Morphing transition across series\r\n\r\nWith `universalTransition: true` set to enable universion transition feature, switching from pie charts to bar charts, or from bar charts to scatter charts, or even between more complex charts like Sunburst and Treemap, can be morphed naturally.\r\n\r\nAs follows, switching between a pie chart and a bar chart.\r\n\r\n```js live {layout: 'bt'}\r\nconst dataset = {\r\n  dimensions: ['name', 'score'],\r\n  source: [\r\n    ['Hannah Krause', 314],\r\n    ['Zhao Qian', 351],\r\n    ['Jasmin Krause ', 287],\r\n    ['Li Lei', 219],\r\n    ['Karle Neumann', 253],\r\n    ['Mia Neumann', 165],\r\n    ['Böhm Fuchs', 318],\r\n    ['Han Meimei', 366]\r\n  ]\r\n};\r\nconst pieOption = {\r\n  dataset: [dataset],\r\n  series: [\r\n    {\r\n      type: 'pie',\r\n      // associate the series to be animated by id\r\n      id: 'Score',\r\n      radius: [0, '50%'],\r\n      universalTransition: true,\r\n      animationDurationUpdate: 1000\r\n    }\r\n  ]\r\n};\r\nconst barOption = {\r\n  dataset: [dataset],\r\n  xAxis: {\r\n    type: 'category'\r\n  },\r\n  yAxis: {},\r\n  series: [\r\n    {\r\n      type: 'bar',\r\n      // associate the series to be animated by id\r\n      id: 'Score',\r\n      // Each data will have a different color\r\n      colorBy: 'data',\r\n      encode: { x: 'name', y: 'score' },\r\n      universalTransition: true,\r\n      animationDurationUpdate: 1000\r\n    }\r\n  ]\r\n};\r\n\r\noption = barOption;\r\n\r\nsetInterval(() => {\r\n  option = option === pieOption ? barOption : pieOption;\r\n  // Use the notMerge form to remove the axes\r\n  myChart.setOption(option, true);\r\n}, 2000);\r\n```\r\n\r\nMore transitions between common charts.\r\n\r\n![](images/5-2-0/universal-transition.gif)\r\n\r\nSuch transitions are no longer limited to just the basic line, bar, and pie charts, but also between bars and maps:\r\n\r\n![](images/5-2-0/universal-transition-2.gif)\r\n\r\nor between Sunburst and Treemap, or even between very flexible custom series can be transitions.\r\n\r\n![](images/5-2-0/universal-transition-3.gif)\r\n\r\n> Note that you need to configure the series ids to ensure that there is a one-to-one correspondence between the series that need to be animated for the transition.\r\n\r\n> Minimal bundle needs to import this feature manually.\r\n>\r\n> ```ts\r\n> import { UniversalTransition } from 'echarts/features';\r\n> echarts.use([UniversalTransition]);\r\n> ```\r\n\r\n### Data split and merge animations\r\n\r\nIn addition to the common update of data values, sometimes we also encounter data aggregation, drill-down and other updates after interactions, when we can not directly apply one-to-one transitions, but need to use more animation effects like splitting and merging to express the transformation of data.\r\n\r\nIn order to be able to express the possible many-to-many connections between data, in 5.2.0 we introduced a new concept `groupId`. We can set the group to the whole series via [series.dataGroupId](${optionPath}series-bar.dataGroupId), or more fine-grained by [series.data.groupId](${optionPath}series-bar.dataGroupId) to set the group to which each data belongs. It's even easier if you use a `dataset` to manage the data, you can use `encode.itemGroupId` to specify a dimension encoded as `groupId`.\r\n\r\nFor example, if we want to implement a drill-down animation for a bar chart, we can set the entire series of data after the drill-down to the same `groupId`, which then corresponds to the data before the drill-down\r\n\r\n```js live {layout: 'lr'}\r\noption = {\r\n  xAxis: {\r\n    data: ['Animals', 'Fruits', 'Cars']\r\n  },\r\n  yAxis: {},\r\n  dataGroupId: '',\r\n  animationDurationUpdate: 500,\r\n  series: {\r\n    type: 'bar',\r\n    id: 'sales',\r\n    data: [\r\n      {\r\n        value: 5,\r\n        groupId: 'animals'\r\n      },\r\n      {\r\n        value: 2,\r\n        groupId: 'fruits'\r\n      },\r\n      {\r\n        value: 4,\r\n        groupId: 'cars'\r\n      }\r\n    ],\r\n    universalTransition: {\r\n      enabled: true,\r\n      divideShape: 'clone'\r\n    }\r\n  }\r\n};\r\n\r\nconst drilldownData = [\r\n  {\r\n    dataGroupId: 'animals',\r\n    data: [\r\n      ['Cats', 4],\r\n      ['Dogs', 2],\r\n      ['Cows', 1],\r\n      ['Sheep', 2],\r\n      ['Pigs', 1],\r\n      ['Cows', 1],\r\n      ['Sheep', 2],\r\n      ['Pigs', 1]\r\n    ]\r\n  },\r\n  {\r\n    dataGroupId: 'fruits',\r\n    data: [\r\n      ['Apples', 4],\r\n      ['Oranges', 2],\r\n      ['Oranges', 2]\r\n    ]\r\n  },\r\n  {\r\n    dataGroupId: 'cars',\r\n    data: [\r\n      ['Toyota', 4],\r\n      ['Opel', 2],\r\n      ['Volkswagen', 2],\r\n      ['Volkswagen', 2]\r\n    ]\r\n  }\r\n];\r\n\r\nmyChart.on('click', event => {\r\n  if (event.data) {\r\n    const subData = drilldownData.find(data => {\r\n      return data.dataGroupId === event.data.groupId;\r\n    });\r\n    if (!subData) {\r\n      return;\r\n    }\r\n    myChart.setOption({\r\n      xAxis: {\r\n        data: subData.data.map(item => {\r\n          return item[0];\r\n        })\r\n      },\r\n      series: {\r\n        type: 'bar',\r\n        id: 'sales',\r\n        dataGroupId: subData.dataGroupId,\r\n        data: subData.data.map(item => {\r\n          return item[1];\r\n        }),\r\n        universalTransition: {\r\n          enabled: true,\r\n          divideShape: 'clone'\r\n        }\r\n      },\r\n      graphic: [\r\n        {\r\n          type: 'text',\r\n          left: 50,\r\n          top: 20,\r\n          style: {\r\n            text: 'Back',\r\n            fontSize: 18\r\n          },\r\n          onclick: function() {\r\n            myChart.setOption(option, true);\r\n          }\r\n        }\r\n      ]\r\n    });\r\n  }\r\n});\r\n```\r\n\r\nWith `groupId`, we can also implement richer aggregation and drill-down animations.\r\n\r\nAggregation of data.\r\n\r\n![](images/5-2-0/group-transition.gif)\r\n\r\nDrilling down of a single series into two series:\r\n\r\n![](images/5-2-0/group-transition-2.gif)\r\n\r\nUniversal transition take the ability to express the relationships and evolution of data to a new level, giving wings to your visualization creation inspiration.\r\n\r\nAt this point, we know you're already eager to try it out. But don't worry, there are even more new features in 5.2.0 that are worth checking out.\r\n\r\n## Color palette picking strategy\r\n\r\nIn the above universal transition example, you may have noticed that we use a `colorBy` configuration that was not available in the previous version. This configuration is also a new feature we added in this version to configure different granularity of color palette color picking for the series. This configuration currently supports two strategies.\r\n\r\n- `'series'` assigns the colors in the palette by series, so that all data in the same series are in the same color.\r\n- `'data'` assigns colors in the palette according to data items, with each data item using a different color.\r\n\r\nPreviously, we fixed this strategy for each type of series, for example, the bar chart was fixed with `'series'` and the pie chart was fixed with `'data'`.\r\n\r\nAnd now with this new feature, we can assign a different color to each data item in the bar chart.\r\n\r\n```js live {layout: 'lr'}\r\noption = {\r\n  xAxis: {\r\n    type: 'category',\r\n    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']\r\n  },\r\n  yAxis: {\r\n    type: 'value'\r\n  },\r\n  series: [\r\n    {\r\n      data: [120, 200, 150, 80, 70, 110, 130],\r\n      type: 'bar',\r\n      colorBy: 'data'\r\n    }\r\n  ]\r\n};\r\n```\r\n\r\nOr use one color uniformly in the pie chart.\r\n\r\n```js live {layout: 'lr'}\r\noption = {\r\n  series: {\r\n    type: 'pie',\r\n    colorBy: 'series',\r\n    radius: [0, '50%'],\r\n    itemStyle: {\r\n      borderColor: '#fff',\r\n      borderWidth: 1\r\n    },\r\n    data: [\r\n      {\r\n        value: 335,\r\n        name: 'Direct Visit'\r\n      },\r\n      {\r\n        value: 234,\r\n        name: 'Union Ad'\r\n      },\r\n      {\r\n        value: 1548,\r\n        name: 'Search Engine'\r\n      }\r\n    ]\r\n  }\r\n};\r\n```\r\n\r\nThis configuration allows us to avoid the trouble of finding palette colors and setting them one by one, and may provide convenience in specific scenarios. We will further enhance this configuration later to provide more strategies.\r\n\r\n## Labels for polar bar charts\r\n\r\nIn this version we have implemented labels for bar charts on polar coordinates and support rich label positioning configurations. The following is a progress chart with labels displayed at the start points.\r\n\r\n```js live {layout: 'lr'}\r\noption = {\r\n  angleAxis: {\r\n    show: false,\r\n    max: 10\r\n  },\r\n  radiusAxis: {\r\n    show: false,\r\n    type: 'category',\r\n    data: ['AAA', 'BBB', 'CCC', 'DDD']\r\n  },\r\n  polar: {},\r\n  series: [\r\n    {\r\n      type: 'bar',\r\n      data: [3, 4, 5, 6],\r\n      colorBy: 'data',\r\n      roundCap: true,\r\n      label: {\r\n        show: true,\r\n        // Try changing it to 'insideStart'\r\n        position: 'start',\r\n        formatter: '{b}'\r\n      },\r\n      coordinateSystem: 'polar'\r\n    }\r\n  ]\r\n};\r\n```\r\n\r\nMore configurations for label positions.\r\n\r\n![](images/5-2-0/polar-bar-label.jpg)\r\n\r\nThis flexible label position configuration item greatly enriches the expressiveness of the polar bar chart, allowing the text to clearly match the corresponding data.\r\n\r\n## Pie chart style for empty data\r\n\r\nIn the previous version, if there was no data in the pie chart, the screen might be completely blank. Because there was no visual element, users may wonder if there was a bug.\r\n\r\nTo solve this problem, in this version we will default to display a gray placeholder circle when there is no data to prevent the screen from being completely blank. We can configure the style of this placeholder circle with `emptyCircleStyle`.\r\n\r\n```js live {layout: 'lr'}\r\noption = {\r\n  series: [\r\n    {\r\n      type: 'pie',\r\n      data: [],\r\n      // showEmptyCircle: false,\r\n      emptyCircleStyle: {\r\n        // change the style to empty circle\r\n        color: 'transparent',\r\n        borderColor: '#ddd',\r\n        borderWidth: 1\r\n      }\r\n    }\r\n  ]\r\n};\r\n```\r\n\r\nIf you don't want to show this gray circle, you can also set `showEmptyCircle: false` to turn it off.\r\n\r\n## Performance enhancements for high-dimensional data\r\n\r\nWe have introduced [dataset](${optionPath}dataset) since 4.0 to manage chart data. However, in some extreme scenarios with particularly high-dimensional (>100) data, we may encounter some dramatic performance degradation, such as the following scenario of visualizing a thousand-dimensional data through a thousand series ([#11907](https://github.com/apache/echarts/issues/11907)), which may even may lead to getting stuck.\r\n\r\n```js\r\nconst indices = Array.from(Array(1000), (_, i) => {\r\n  return `index${i}`;\r\n});\r\nconst option = {\r\n  xAxis: { type: 'category' },\r\n  yAxis: {},\r\n  dataset: {\r\n    // dimension: ['date', . . indices],\r\n    source: Array.from(Array(10), (_, i) => {\r\n      return {\r\n        date: i,\r\n        ... .indices.reduce((item, next) => {\r\n          item[next] = Math.random() * 100;\r\n          return item;\r\n        }, {})\r\n      };\r\n    })\r\n  },\r\n  series: indices.map(index => {\r\n    return { type: 'line', name: index };\r\n  })\r\n};\r\n```\r\n\r\nThe reason for this performance problem is that we process the high-dimensional dataset at the bottom of each series as needed and save a copy of the processed data and the meta information about the dimensions of the data. This meant that the `1000 x 1000` dimensions had to be processed and saved in the example, which put a huge pressure on memory and garbage collection, resulting in a dramatic performance drop for high dimensions.\r\n\r\nIn the new version we have optimized this problem so that all series share the dataset storage as much as possible (whether or not they do depends on how the series uses the data).\r\nThis optimization ensure that memory does not explode as the dataset dimensions and series grow, significantly improving initialization performance in this extreme scenario. The rendering time for the example just described has also been reduced to an acceptable 300 ms or less.\r\n\r\nIt is not just this high-dimensional scenario that benefits from this optimization. When using a dataset with large amount of data, multiple series only process the data once because of data sharing, so it can also bring significant performance gains.\r\n\r\n## Type optimization for custom series\r\n\r\nCustom series provide a very flexible way to create series graphs. Compared to other series, the learning curve for custom series can be a bit steep. Therefore, in this release, we have further optimized the type of the core method `renderItem` in the custom series by making more precise inferences about the types of the parameters and return values of `renderItem`, so that it is possible to infer which properties of the elements can be set based on the type returned:\r\n\r\n```ts\r\nseries = {\r\n  type: 'custom',\r\n  renderItem(params) {\r\n    return {\r\n      type: 'group',\r\n      // The group type uses children to store children of other types\r\n      children: [\r\n        {\r\n          type: 'circle',\r\n          // circle has the following configurable shape attributes\r\n          shape: { r: 10, cx: 0, cy: 0 },\r\n          // Configurable styles\r\n          style: { fill: 'red' }\r\n        },\r\n        {\r\n          type: 'rect',\r\n          // rect has the following configurable shape properties\r\n          shape: { x: 0, y: 0, width: 100, height: 100 }\r\n        },\r\n        {\r\n          type: 'path',\r\n          // Custom path shapes\r\n          shape: { d: '...' }\r\n        }\r\n      ]\r\n    };\r\n  }\r\n};\r\n```\r\n\r\n## Summary\r\n\r\nIf you're interested in some of the features and optimizations in 5.2.0, you may want to update to the latest version of Apache ECharts and try it out for yourself.\r\n\r\nIf you're interested in what's next for Apache ECharts, you can also follow our development plans at [GitHub Milestone](https://github.com/apache/echarts/milestones). Feel free to join us as a contributor (learn more at [Wiki](https://github.com/apache/echarts/wiki)).\r\n\r\n## Full Changelog\r\n\r\nView the [Changelog](${mainSitePath}/changelog.html#v5-2-0)\r\n"}}]);