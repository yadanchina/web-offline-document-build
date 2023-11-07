(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{574:function(r,n,e){"use strict";e.r(n),n.default="# 文档编辑指南\r\n\r\n## 新增一个 markdown 文件\r\n\r\n在 `contents/zh/`（中文文章）或 `contents/en/`（英文文章）目录下新增一个 markdown 文件，最多支持三级目录。将路径及标题信息更新在 `contents/zh/posts.yml` 或 `contents/en/posts.yml`。\r\n\r\nmarkdown 文件名称小写。\r\n\r\n## 使用 prettier 来自动格式化代码\r\n\r\n在开始之前，我们推荐安装`prettier`的 [VSCode 插件](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)，该插件可以在你保存的时候自动帮你格式化代码。\r\n\r\n如果你觉得自动的格式化破坏了你的代码块，你可以在在代码块外面加上下面代码阻止`prettier`格式化该部分代码\r\n\r\n```markdown\r\n\x3c!-- prettier-ignore-start --\x3e\r\n\x3c!-- prettier-ignore-end --\x3e\r\n```\r\n\r\n如果你发现有的代码块并没有被格式化，请先检查该代码是否存在语法上的错误。\r\n\r\n## 内置变量\r\n\r\n- `optionPath`\r\n- `mainSitePath`\r\n- `exampleViewPath`\r\n- `exampleEditorPath`\r\n- `lang`\r\n\r\n使用方式:\r\n\r\n```\r\n${xxxxx}\r\n```\r\n\r\n## 引用其它文章\r\n\r\n```markdown\r\n[获取 Apache ECharts](${lang}/basics/download)\r\n```\r\n\r\n[获取 Apache ECharts](${lang}/basics/download)\r\n\r\n## 引用代码\r\n\r\n### 基础使用\r\n\r\n\x3c!-- prettier-ignore-start --\x3e\r\n```markdown\r\n```js\r\noption = {\r\n    series: [{\r\n        type: 'bar',\r\n        data: [23, 24, 18, 25, 27, 28, 25]\r\n    }]\r\n};\r\n\\```\r\n```\r\n\x3c!-- prettier-ignore-end --\x3e\r\n\r\n```js\r\noption = {\r\n  series: [\r\n    {\r\n      type: 'bar',\r\n      data: [23, 24, 18, 25, 27, 28, 25]\r\n    }\r\n  ]\r\n};\r\n```\r\n\r\n### 代码推荐写法\r\n\r\n为了可以让工具帮助我们对代码进行格式化，我们应该尽量避免有语法问题的写法。\r\n\r\n比如注释 `...`\r\n\r\n```js\r\noption = {\r\n  series: [\r\n    {\r\n      type: 'bar'\r\n      // ...\r\n    }\r\n  ]\r\n};\r\n```\r\n\r\n### 实时预览和编辑\r\n\r\n> 目前只支持对 Option 代码的预览\r\n\r\n\x3c!-- prettier-ignore-start --\x3e\r\n```markdown\r\n\\```js live\r\noption = {\r\n  xAxis: {\r\n    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']\r\n  },\r\n  yAxis: {},\r\n  series: [\r\n    {\r\n      type: 'bar',\r\n      data: [23, 24, 18, 25, 27, 28, 25]\r\n    }\r\n  ]\r\n};\r\n\\```\r\n```\r\n\x3c!-- prettier-ignore-end --\x3e\r\n\r\n```js live\r\noption = {\r\n  xAxis: {\r\n    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']\r\n  },\r\n  yAxis: {},\r\n  series: [\r\n    {\r\n      type: 'bar',\r\n      data: [23, 24, 18, 25, 27, 28, 25]\r\n    }\r\n  ]\r\n};\r\n```\r\n\r\n### 更多预览布局\r\n\r\n#### 左右\r\n\r\n\x3c!-- prettier-ignore-start --\x3e\r\n```markdown\r\n\\```js live {layout: 'lr'}\r\noption = {\r\n  ...\r\n};\r\n\\```\r\n```\r\n\x3c!-- prettier-ignore-end --\x3e\r\n\r\n```js live {layout: 'lr'}\r\noption = {\r\n  xAxis: {\r\n    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']\r\n  },\r\n  yAxis: {},\r\n  series: [\r\n    {\r\n      type: 'bar',\r\n      data: [23, 24, 18, 25, 27, 28, 25]\r\n    }\r\n  ]\r\n};\r\n```\r\n\r\n#### 右左\r\n\r\n\x3c!-- prettier-ignore-start --\x3e\r\n```markdown\r\n\\```js live {layout: 'rl'}\r\noption = {\r\n  ...\r\n};\r\n\\```\r\n```\r\n\x3c!-- prettier-ignore-end --\x3e\r\n\r\n```js live {layout: 'rl'}\r\noption = {\r\n  xAxis: {\r\n    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']\r\n  },\r\n  yAxis: {},\r\n  series: [\r\n    {\r\n      type: 'bar',\r\n      data: [23, 24, 18, 25, 27, 28, 25]\r\n    }\r\n  ]\r\n};\r\n```\r\n\r\n#### 下上\r\n\r\n\x3c!-- prettier-ignore-start --\x3e\r\n```markdown\r\n\\```js live {layout: 'bt'}\r\noption = {\r\n  ...\r\n};\r\n\\```\r\n```\r\n\x3c!-- prettier-ignore-end --\x3e\r\n\r\n```js live {layout: 'bt'}\r\noption = {\r\n  xAxis: {\r\n    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']\r\n  },\r\n  yAxis: {},\r\n  series: [\r\n    {\r\n      type: 'bar',\r\n      data: [23, 24, 18, 25, 27, 28, 25]\r\n    }\r\n  ]\r\n};\r\n```\r\n\r\n### 高亮代码行\r\n\r\n使用：\r\n\r\n\x3c!-- prettier-ignore-start --\x3e\r\n```markdown\r\n\\```js {1,3-5}\r\noption = {\r\n  series: [\r\n    {\r\n      type: 'bar',\r\n      data: [23, 24, 18, 25, 27, 28, 25]\r\n    }\r\n  ]\r\n};\r\n\\```\r\n```\r\n\x3c!-- prettier-ignore-end --\x3e\r\n\r\n效果：\r\n\r\n```js {1,3-5}\r\noption = {\r\n  series: [\r\n    {\r\n      type: 'bar',\r\n      data: [23, 24, 18, 25, 27, 28, 25]\r\n    }\r\n  ]\r\n};\r\n```\r\n\r\n## 引用图片\r\n\r\n图片实际存放地址在 `static/images/` 下。\r\n\r\n```markdown\r\n![图片说明](images/demo.png)\r\n```\r\n\r\n### 设置图片高宽\r\n\r\n对于当前页面的临时样式，可以直接写 html：\r\n\r\n```markdown\r\n<img data-src=\"images/demo.png\" style=\"width: 50px\" />\r\n```\r\n\r\n## 添加示例 iframe\r\n\r\n`src`为 /examples/zh/editor.html?c=line-simple 地址中`?c=`后面这一串\r\n\r\n使用：\r\n\r\n```markdown\r\n<md-example src=\"doc-example/getting-started\" width=\"100%\" height=\"300\" />\r\n```\r\n\r\n效果：\r\n<md-example src=\"doc-example/getting-started\" width=\"100%\" height=\"300\" />\r\n\r\n## 添加配置项链接\r\n\r\n使用：\r\n\r\n```markdown\r\n<md-option link=\"series-bar.itemStyle.color\" />\r\n```\r\n\r\n效果:\r\n<md-option link=\"series-bar.itemStyle.color\" />\r\n\r\n## 更多组件使用\r\n\r\n文档支持使用全局注册的`markdown`组件，除了刚才介绍的`md-example`组件，还有下面几种组件\r\n\r\n### md-alert\r\n\r\n提示组件\r\n\r\n```markdown\r\n<md-alert type=\"info\">\r\nThis is an info alert.\r\n</md-alert>\r\n```\r\n\r\n<md-alert type=\"info\">\r\nThis is an info alert.\r\n</md-alert>\r\n\r\n```markdown\r\n<md-alert type=\"success\">\r\nThis is a success alert.\r\n</md-alert>\r\n```\r\n\r\n<md-alert type=\"success\">\r\nThis is a success alert.\r\n</md-alert>\r\n\r\n```markdown\r\n<md-alert type=\"warning\">\r\nThis is a warning alert.\r\n</md-alert>\r\n```\r\n\r\n<md-alert type=\"warning\">\r\nThis is a warning alert.\r\n</md-alert>\r\n\r\n```markdown\r\n<md-alert type=\"danger\">\r\nThis is a danger alert.\r\n</md-alert>\r\n```\r\n\r\n<md-alert type=\"danger\">\r\nThis is a danger alert.\r\n</md-alert>\r\n"}}]);