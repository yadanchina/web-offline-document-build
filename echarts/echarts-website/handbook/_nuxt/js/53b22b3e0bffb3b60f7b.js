(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{553:function(n,r,t){"use strict";t.r(r),r.default="# 堆叠柱状图\r\n\r\n有时候，我们不仅希望知道不同系列各自的数值，还希望知道它们之和的变化，这时候通常使用堆叠柱状图来表现。顾名思义，堆叠柱状图就是一个系列的数值“堆叠”在另一个系列上，因而从他们的高度总和就能表达总量的变化。\r\n\r\n使用 EChart 实现堆叠柱状图的方法非常简单，只需要给一个系列的 `stack` 值设置一个字符串类型的值，这一个值表示该系列堆叠的类别。也就是说，拥有同样 `stack` 值的系列将堆叠在一组。\r\n\r\n```js live\r\noption = {\r\n  xAxis: {\r\n    data: ['A', 'B', 'C', 'D', 'E']\r\n  },\r\n  yAxis: {},\r\n  series: [\r\n    {\r\n      data: [10, 22, 28, 43, 49],\r\n      type: 'bar',\r\n      stack: 'x'\r\n    },\r\n    {\r\n      data: [5, 4, 3, 5, 10],\r\n      type: 'bar',\r\n      stack: 'x'\r\n    }\r\n  ]\r\n};\r\n```\r\n\r\n在这个例子中，第二个系列所在的位置是在第一个系列的位置的基础上，上升了第二个系列数值对应的高度。因此，从第二个系列的位置，就能看出这两者总和的变化趋势。\r\n\r\n> `stack` 的取值用来表明哪些系列将被堆叠在一起，理论上只要取值相同即可，具体的取值并没有什么区别。但在实际的应用中，我们建议使用一些有意义的字符串方便阅读。\r\n>\r\n> 比如，在一个统计男女人数的图中，有四个系列，“成年男性”和“男孩”系列需要进行堆叠，“成年女性”和“女孩”系列需要堆叠。这时，这两组的的 `stack` 值就建议分别设为 `'男'` 和 `'女'`。虽然使用 `'a'` 和 `'b'` 这样没有意义的字符串也能实现同样的效果，但是代码的可阅读性就差了。\r\n"}}]);