(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{510:function(r,n,t){"use strict";t.r(n),n.default="# 在项目中引入 Apache ECharts\r\n\r\n假如你的开发环境使用了 `npm` 或者 `yarn` 等包管理工具，并且使用 `webpack` 等打包工具进行构建，本文将会介绍如何引入 Apache ECharts<sup>TM</sup> 并通过 tree-shaking 特性只打包需要的模块以减少包体积。\r\n\r\n## NPM 安装 ECharts\r\n\r\n你可以使用如下命令通过 npm 安装 ECharts\r\n\r\n```shell\r\nnpm install echarts --save\r\n```\r\n\r\n## 引入 ECharts\r\n\r\n```js\r\nimport * as echarts from 'echarts';\r\n\r\n// 基于准备好的dom，初始化echarts实例\r\nvar myChart = echarts.init(document.getElementById('main'));\r\n// 绘制图表\r\nmyChart.setOption({\r\n  title: {\r\n    text: 'ECharts 入门示例'\r\n  },\r\n  tooltip: {},\r\n  xAxis: {\r\n    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']\r\n  },\r\n  yAxis: {},\r\n  series: [\r\n    {\r\n      name: '销量',\r\n      type: 'bar',\r\n      data: [5, 20, 36, 10, 10, 20]\r\n    }\r\n  ]\r\n});\r\n```\r\n\r\n## 按需引入 ECharts 图表和组件\r\n\r\n上面的代码会引入 ECharts 中所有的图表和组件，如果你不想引入所有组件，也可以使用 ECharts 提供的按需引入的接口来打包必须的组件。\r\n\r\n```js\r\n// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。\r\nimport * as echarts from 'echarts/core';\r\n// 引入柱状图图表，图表后缀都为 Chart\r\nimport { BarChart } from 'echarts/charts';\r\n// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component\r\nimport {\r\n  TitleComponent,\r\n  TooltipComponent,\r\n  GridComponent,\r\n  DatasetComponent,\r\n  TransformComponent\r\n} from 'echarts/components';\r\n// 标签自动布局、全局过渡动画等特性\r\nimport { LabelLayout, UniversalTransition } from 'echarts/features';\r\n// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步\r\nimport { CanvasRenderer } from 'echarts/renderers';\r\n\r\n// 注册必须的组件\r\necharts.use([\r\n  TitleComponent,\r\n  TooltipComponent,\r\n  GridComponent,\r\n  DatasetComponent,\r\n  TransformComponent,\r\n  BarChart,\r\n  LabelLayout,\r\n  UniversalTransition,\r\n  CanvasRenderer\r\n]);\r\n\r\n// 接下来的使用就跟之前一样，初始化图表，设置配置项\r\nvar myChart = echarts.init(document.getElementById('main'));\r\nmyChart.setOption({\r\n  // ...\r\n});\r\n```\r\n\r\n> 需要注意的是为了保证打包的体积是最小的，ECharts 按需引入的时候不再提供任何渲染器，所以需要选择引入 `CanvasRenderer` 或者 `SVGRenderer` 作为渲染器。这样的好处是假如你只需要使用 svg 渲染模式，打包的结果中就不会再包含无需使用的 `CanvasRenderer` 模块。\r\n\r\n我们在示例编辑页的“完整代码”标签提供了非常方便的生成按需引入代码的功能。这个功能会根据当前的配置项动态生成最小的按需引入的代码。你可以直接在你的项目中使用。\r\n\r\n## 在 TypeScript 中按需引入\r\n\r\n对于使用了 TypeScript 来开发 ECharts 的开发者，我们提供了类型接口来组合出最小的 `EChartsOption` 类型。这个更严格的类型可以有效帮助你检查出是否少加载了组件或者图表。\r\n\r\n```ts\r\nimport * as echarts from 'echarts/core';\r\nimport {\r\n  BarChart,\r\n  LineChart\r\n} from 'echarts/charts';\r\nimport {\r\n  TitleComponent,\r\n  TooltipComponent,\r\n  GridComponent,\r\n  // 数据集组件\r\n  DatasetComponent,\r\n  // 内置数据转换器组件 (filter, sort)\r\n  TransformComponent\r\n} from 'echarts/components';\r\nimport { LabelLayout, UniversalTransition } from 'echarts/features';\r\nimport { CanvasRenderer } from 'echarts/renderers';\r\nimport type {\r\n  // 系列类型的定义后缀都为 SeriesOption\r\n  BarSeriesOption, \r\n  LineSeriesOption\r\n} from 'echarts/charts';\r\nimport type {\r\n  // 组件类型的定义后缀都为 ComponentOption\r\n  TitleComponentOption,\r\n  TooltipComponentOption,\r\n  GridComponentOption,\r\n  DatasetComponentOption\r\n} from 'echarts/components';\r\nimport type { \r\n  ComposeOption, \r\n} from 'echarts/core';\r\n\r\n// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型\r\ntype ECOption = ComposeOption<\r\n  | BarSeriesOption\r\n  | LineSeriesOption\r\n  | TitleComponentOption\r\n  | TooltipComponentOption\r\n  | GridComponentOption\r\n  | DatasetComponentOption\r\n>;\r\n\r\n// 注册必须的组件\r\necharts.use([\r\n  TitleComponent,\r\n  TooltipComponent,\r\n  GridComponent,\r\n  DatasetComponent,\r\n  TransformComponent,\r\n  BarChart,\r\n  LineChart,\r\n  LabelLayout,\r\n  UniversalTransition,\r\n  CanvasRenderer\r\n]);\r\n\r\nconst option: ECOption = {\r\n  // ...\r\n};\r\n```\r\n"}}]);