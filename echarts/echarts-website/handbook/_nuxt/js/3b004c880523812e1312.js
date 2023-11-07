(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{485:function(t,e,n){"use strict";n.r(e),e.default="# Get Started\r\n\r\n## Getting Apache ECharts\r\n\r\nApache ECharts supports several download methods, which are further explained in the next tutorial [Installation](${lang}/basics/download). Here, we take the example of getting it from the [jsDelivr](https://www.jsdelivr.com/package/npm/echarts) CDN and explain how to install it quickly.\r\n\r\nAt [https://www.jsdelivr.com/package/npm/echarts](https://www.jsdelivr.com/package/npm/echarts) select `dist/echarts.js`, click and save it as `echarts.js` file.\r\n\r\n> More information about these files can be found in the next tutorial [Installation](${lang}/basics/download).\r\n\r\n## Including ECharts\r\n\r\nCreate a new `index.html` file in the directory where you just saved `echarts.js`, with the following content:\r\n\r\n```html\r\n<!DOCTYPE html>\r\n<html>\r\n  <head>\r\n    <meta charset=\"utf-8\" />\r\n    \x3c!-- Include the ECharts file you just downloaded --\x3e\r\n    <script src=\"echarts.js\"><\/script>\r\n  </head>\r\n</html>\r\n```\r\n\r\nWhen you open this `index.html`, you will see an empty page. But don't worry. Open the console and make sure that no error message is reported, then you can proceed to the next step.\r\n\r\n## Plotting a Simple Chart\r\n\r\nBefore drawing we need to prepare a DOM container for ECharts with a defined height and width. Add the following code after the `</head>` tag introduced earlier.\r\n\r\n```html\r\n<body>\r\n  \x3c!-- Prepare a DOM with a defined width and height for ECharts --\x3e\r\n  <div id=\"main\" style=\"width: 600px;height:400px;\"></div>\r\n</body>\r\n```\r\n\r\nThen you can initialize an echarts instance with the [echarts.init](${mainSitePath}api.html#echarts.init) method and set the echarts instance with [setOption](${mainSitePath}api.html#echartsInstance.setOption) method to generate a simple bar chart. Here is the complete code.\r\n\r\n```html\r\n<!DOCTYPE html>\r\n<html>\r\n  <head>\r\n    <meta charset=\"utf-8\" />\r\n    <title>ECharts</title>\r\n    \x3c!-- Include the ECharts file you just downloaded --\x3e\r\n    <script src=\"echarts.js\"><\/script>\r\n  </head>\r\n  <body>\r\n    \x3c!-- Prepare a DOM with a defined width and height for ECharts --\x3e\r\n    <div id=\"main\" style=\"width: 600px;height:400px;\"></div>\r\n    <script type=\"text/javascript\">\r\n      // Initialize the echarts instance based on the prepared dom\r\n      var myChart = echarts.init(document.getElementById('main'));\r\n\r\n      // Specify the configuration items and data for the chart\r\n      var option = {\r\n        title: {\r\n          text: 'ECharts Getting Started Example'\r\n        },\r\n        tooltip: {},\r\n        legend: {\r\n          data: ['sales']\r\n        },\r\n        xAxis: {\r\n          data: ['Shirts', 'Cardigans', 'Chiffons', 'Pants', 'Heels', 'Socks']\r\n        },\r\n        yAxis: {},\r\n        series: [\r\n          {\r\n            name: 'sales',\r\n            type: 'bar',\r\n            data: [5, 20, 36, 10, 10, 20]\r\n          }\r\n        ]\r\n      };\r\n\r\n      // Display the chart using the configuration items and data just specified.\r\n      myChart.setOption(option);\r\n    <\/script>\r\n  </body>\r\n</html>\r\n```\r\n\r\nAnd this is your first chart with Apache ECharts!\r\n\r\n<md-example src=\"doc-example/getting-started&reset=1&edit=1\"></md-example>\r\n"}}]);