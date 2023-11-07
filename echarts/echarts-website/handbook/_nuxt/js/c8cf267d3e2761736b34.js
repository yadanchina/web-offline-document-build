(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{484:function(e,n,t){"use strict";t.r(n),n.default="# Visual Map of Data\r\n\r\nData visualization is a procedure of mapping data into visual elements. This procedure can also be called visual coding, and visual elements can also be called visual channels.\r\n\r\nEvery type of charts in Apache ECharts<sup>TM</sup> has this built-in mapping procedure. For example, line chart map data into _lines_, bar chart map data into _height_. Some more complicated charts, like `graph`, `themeRiver`, and `treemap` have their own built-in mapping.\r\n\r\nBesides, ECharts provides [visualMap component](${optionPath}visualMap) for general visual mapping. Visual elements allowed in `visualMap` component are:\r\n\r\n- `symbol`, `symbolSize`\r\n- `color`, `opacity`, `colorAlpha`,\r\n- `colorLightness`, `colorSaturation`, `colorHue`\r\n\r\nNext, we are going to introduce how to use `visualMap` component.\r\n\r\n## Data and Dimension\r\n\r\nData are usually stored in [series.data](${optionPath}series.data) in ECharts. Depending on chart types, like list, tree, graph, and so on, the form of data may vary somehow. But they have one common feature, that they are a collection of data items. Every data item contains data value, and other information if needed. Every data value can be a single value (one dimension) or an array (multiple dimensions).\r\n\r\nFor example, [series.data](${optionPath}series.data) is the most common form, which is a `list`, a common array:\r\n\r\n```js\r\nseries: {\r\n  data: [\r\n    {\r\n      // every item here is a dataItem\r\n      value: 2323, // this is data value\r\n      itemStyle: {}\r\n    },\r\n    1212, // it can also be a value of dataItem, which is a more common case\r\n    2323, // every data value here is one dimension\r\n    4343,\r\n    3434\r\n  ];\r\n}\r\n```\r\n\r\n```js\r\nseries: {\r\n  data: [\r\n    {\r\n      // every item here is a dataItem\r\n      value: [3434, 129, 'San Marino'], // this is data value\r\n      itemStyle: {}\r\n    },\r\n    [1212, 5454, 'Vatican'], // it can also be a value of dataItem, which is a more common case\r\n    [2323, 3223, 'Nauru'], // every data value here is three dimension\r\n    [4343, 23, 'Tuvalu'] // If is scatter chart, usually map the first dimension to x axis,\r\n    // the second dimension to y axis,\r\n    // and the third dimension to symbolSize\r\n  ];\r\n}\r\n```\r\n\r\nUsually the first one or two dimensions are used for mapping. For example, map the first dimension to x axis, and the second dimension to y axis. If you want to represent more dimensions, `visualMap` is what you need. Most likely, [scatter charts](${optionPath}series-scatter) use radius to represent the third dimension.\r\n\r\n## The visualMap Component\r\n\r\nvisualMap component defines the mapping from _which dimension of data_ to _what visual elements_.\r\n\r\nThe following two types of visualMap components are supported, identified with [visualMap.type](${optionPath}visualMap.type).\r\n\r\nIts structure is defined as:\r\n\r\n```js\r\noption = {\r\n  visualMap: [\r\n    // can define multiple visualMap components at the same time\r\n    {\r\n      // the first visualMap component\r\n      type: 'continuous' // defined as continuous visualMap\r\n      // ...\r\n    },\r\n    {\r\n      // the second visualMap component\r\n      type: 'piecewise' // defined as discrete visualMap\r\n      // ...\r\n    }\r\n  ]\r\n  // ...\r\n};\r\n```\r\n\r\n## Continuous and Piecewise Visual Mapping Components\r\n\r\nThe visual mapping component of ECharts is divided into continuous ([visualMapContinuous](${optionPath}visualMap-continuous)) and piecewise ([visualMapPiecewise](${optionPath}visualMap-piecewise)).\r\n\r\nContinuous means that the data dimension for visual mapping is a continuous value, while piecewise means that the data is divided into multiple segments or discrete data.\r\n\r\n### Continuous Visual Mapping\r\n\r\nContinuous type visual mapping can determine the range of visual mapping by specifying the maximum and minimum values.\r\n\r\n```js\r\noption = {\r\n  visualMap: [\r\n    {\r\n      type: 'continuous',\r\n      min: 0,\r\n      max: 5000,\r\n      dimension: 3, // the fourth dimension of series.data (i.e. value[3]) is mapped\r\n      seriesIndex: 4, // The fourth series is mapped.\r\n      inRange: {\r\n        // The visual configuration in the selected range\r\n        color: ['blue', '#121122', 'red'], // A list of colors that defines the graph color mapping\r\n        // the minimum value of the data is mapped to 'blue', and\r\n        // the maximum value is mapped to 'red', // the maximum value is mapped to 'red', // the maximum value is mapped to 'red'.\r\n        // The rest is automatically calculated linearly.\r\n        symbolSize: [30, 100] // Defines the mapping range for the graphic size.\r\n        // The minimum value of the data is mapped to 30, // and the maximum value is mapped to 100.\r\n        // The maximum value is mapped to 100.\r\n        // The rest is calculated linearly automatically.\r\n      },\r\n      outOfRange: {\r\n        // Check the out of range visual configuration\r\n        symbolSize: [30, 100]\r\n      }\r\n    }\r\n    // ...\r\n  ]\r\n};\r\n```\r\n\r\nwhere [visualMap.inRange](${optionPath}visualMap.inRange) indicates the style used for data within the data mapping range; while [visualMap.outOfRange](${optionPath}visualMap.outOfRange) specifies the style for data outside the mapping range.\r\n\r\n[visualMap.dimension](~visualMap.dimension) specifies which dimension of the data will be visually mapped.\r\n\r\n### Piecewise Visual Mapping\r\n\r\nThe piecewise visual mapping component has three modes.\r\n\r\n- Continuous data average segmentation: based on [visualMap-piecewise.splitNumber](${optionPath}visualMap-piecewise.splitNumber) to automatically split the data into pieces equally.\r\n- Continuous data custom segmentation: define the range of each piece based on [visualMap-piecewise.pieces](${optionPath}visualMap-piecewise.pieces).\r\n- Discrete data (categorical data): categories are defined in [visualMap-piecewise.categories](${optionPath}visualMap-piecewise.categories).\r\n\r\nTo use segmented visual map, you need to set `type` to `'piecewise'` and choose one of the above three configuration items.\r\n"}}]);