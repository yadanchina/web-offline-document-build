{{ target: event }}

# Events and Actions in ECharts

User interactions trigger corresponding events in Apache ECharts<sup>TM</sup>. Developers can listen to these events and handle accordingly through callback functions, e.g., redirecting to an address, popping out a dialog box, or drilling down data and so on.

Binding events in ECharts 3 is though [on](api.html#EChartsInstance.on) method, same as in ECharts 2. But event names are much simpler than it is in 2. Event names in ECharts 3 are the same as DOM event names, in lowercases. Below is an example of binding clicking operation.

```ts
myChart.on('click', function (params) {
    // printing data name in console
    console.log(params.name);
});
```

Event in ECharts can be divided in two kinds. One is mouse event, which is triggered when mouse clicks on certain component, the other is triggered with interaction components, such as triggering ['legendselectchanged'](api.html#events.legendselectchanged) event when toggling legend (Notice here, that `'legendselected'` event will not be triggered when toggling legend), triggering ['datazoom'](api.html#events.legendselectchanged) event when data zooming in some area.

## Mouse Events Handling

ECharts support regular mouse events, which includes `'click'`, `'dblclick'`, `'mousedown'`, `'mousemove'`, `'mouseup'`, `'mouseover'`, `'mouseout'`, `'globalout'`, `'contextmenu'`. Next let's see an example of opening Baidu search page when clicks a bar chart.

```ts
// initialize ECharts instance based on prepared dom
var myChart = echarts.init(document.getElementById('main'));

// data and configuration item of specific chart
var option = {
    xAxis: {
        data: ["shirt","cardign","chiffon shirt","pants","heels","socks"]
    },
    yAxis: {},
    series: [{
        name: 'sales',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
};
// use specified configuration item and data to show chart
myChart.setOption(option);
// handle click event and redirect to corresponding Baidu search page
myChart.on('click', function (params) {
    window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name));
});
```

All types of mouse events have a common parameter called `params`, which is an object that contains data information of the clicked chart, whose format is as followed:
```ts
{
    // component name of clicked component
    // e.g., 'series', 'markLine', 'markPoint', 'timeLine'
    componentType: string,
    // series type (useful when componentType is 'series')
    // e.g., 'line', 'bar', 'pie'
    seriesType: string,
    // series index in option.series (useful when componentType is 'series')
    seriesIndex: number,
    // series name (useful when componentType is 'series')
    seriesName: string,
    // data name, or category name
    name: string,
    // data index in input data array
    dataIndex: number,
    // raw input data item
    data: Object,
    // Some series, such as sankey or graph, maintains both nodeData and edgeData,
    // in which case, dataType is set to be 'node' or 'edge' to identify.
    // On the other hand, most other series have only one type of data,
    // where dataType is not needed.
    dataType: string,
    // input data value
    value: number|Array
    // color of component (useful when componentType is 'series')
    color: string
}
```

How to know where the mouse clicked:
```ts
myChart.on('click', function (params) {
    if (params.componentType === 'markPoint') {
        // clicked on markPoint
        if (params.seriesIndex === 5) {
            // clicked on a markPoint which belongs to a series indexed with 5
        }
    }
    else if (params.componentType === 'series') {
        if (params.seriesType === 'graph') {
            if (params.dataType === 'edge') {
                // clicked on an edge of the graph
            }
            else {
                // clicked on a node of the graph
            }
        }
    }
});
```

Use `query` to call handler only on the graphic elements of the specified components:
```ts
chart.on(eventName, query, handler);
```

`query` can be `string` or `Object`.

If `string`, the formatter can be 'mainType' or 'mainType.subType'. For example:
```ts
chart.on('click', 'series', function () {...});
chart.on('click', 'series.line', function () {...});
chart.on('click', 'xAxis.category', function () {...});
```

If `Object`, one or more properties below can be included, and any of them is optional.
```ts
{
    <mainType>Index: number // component index
    <mainType>Name: string // component name
    <mainType>Id: string // component id
    dataIndex: number // data item index
    name: string // data item name
    dataType: string // data item type, e.g.,
                     // 'node' and 'edge' in graph.
    element: string // element name in custom series
}
```

For example:
```ts
chart.setOption({
    // ...
    series: [{
        name: 'uuu'
        // ...
    }]
});
chart.on('mouseover', {seriesName: 'uuu'}, function () {
    // When the graphic elements in the series with name 'uuu' mouse overed, this method called.
});
```

For example:
```ts
chart.setOption({
    // ...
    series: [{
        // ...
    }, {
        // ...
        data: [
            {name: 'xx', value: 121},
            {name: 'yy', value: 33}
        ]
    }]
});
chart.on('mouseover', {seriesIndex: 1, name: 'xx'}, function () {
    // When the graphic elements of the data item with name 'xx' in the series with index 1 mouse overed, this method called.
});
```

For example:
```ts
chart.setOption({
    // ...
    series: [{
        type: 'graph',
        nodes: [{name: 'a', value: 10}, {name: 'b', value: 20}],
        edges: [{source: 0, target: 1}]
    }]
});
chart.on('click', {dataType: 'node'}, function () {
    // When the nodes of the graph clicked, this method is called.
});
chart.on('click', {dataType: 'edge'}, function () {
    // When the edges of the graph clicked, this method is called.
});
```

For example:
```ts
chart.setOption({
    // ...
    series: {
        // ...
        type: 'custom',
        renderItem: function (params, api) {
            return {
                type: 'group',
                children: [{
                    type: 'circle',
                    name: 'my_el',
                    // ...
                }, {
                    // ...
                }]
            }
        },
        data: [[12, 33]]
    }
})
chart.on('click', {element: 'my_el'}, function () {
    // When the element with name 'my_el' clicked, this method called.
});
```


You may update chart or show customized layer with information got from your own data warehouse, indexed from data name or series name of an object received from a callback function. Sample code is shown as followed:

```ts
myChart.on('click', function (parmas) {
    $.get('detail?q=' + params.name, function (detail) {
        myChart.setOption({
            series: [{
                name: 'pie',
                // present data distribution  of a single bar through pie chart
                data: [detail.data]
            }]
        });
    });
});
```

## Interaction Events with Components

Basically all component interactions in ECharts trigger corresponding events. Frequently used events and corresponding parameters are listed in [events](api.html#events).

Below is example that listens to a legend toggling:

```ts
// legend toggling triggers legendselectchanged event only
myChart.on('legendselectchanged', function (params) {
    // obtain selecting status of clicked legend
    var isSelected = params.selected[params.name];
    // print in console
    console.log((isSelected ? 'select' : 'unselect') + 'legend' + params.name);
    // print all legend status
    console.log(params.selected);
});
```


## Triggering Component Actions through Code in ECharts

Actions like `'legendselectchanged'` mentioned above will be triggered by component interaction. Besides that, sometimes we need to trigger certain actions in our program, such as showing tooltip, or selecting legend.

ECharts 2.x triggers actions through `myChart.component.tooltip.showTip`, whose entrance is deep and involves organization of inner components. On the other hand, ECharts 3 triggers actions through `myChart.dispatchAction({ type: '' })`, which manages all actions in a uniformed way, and may record user's event path when need.

Frequently used actions and the parameters are listed in [action](api.html#action).

Below displays how to highlight each sector of pie chart in turn through `dispatchAction`.

~[600x400](${galleryViewPath}doc-example/pie-highlight&edit=1&reset=1)


## Listen to events from the blank

Sometimes developers need to listen to the events that are triggered from the blank of the canvas. For example, need to reset the chart when users click on the blank.

Before we talk about this feature, we need to clarify two kinds of events: `zrender events` and `echarts events`.
```ts
myChart.getZr().on('click', function (event) {
    // This listener is listening to a `zrender event`.
});
myChart.on('click', function (event) {
    // This listener is listening to a `echarts event`.
});
```
`zrender events` are different from `echarts events`. The former one are triggered when mouse/pointer is at everywhere, while the latter one can only be triggered when mouse/pointer is at the graphic elements. In fact, `echarts events` are implemented based on `zrender events`, that is, when a `zrender events` is triggered at a graphic element, `echarts` will trigger a `echarts event`.

Having `zrender events`, we can implement "listen to events from the blank" as follows:
```ts
myChart.getZr().on('click', function (event) {
    // No "target" means that mouse/pointer is not on
    // any of the graphic elements, which is "blank".
    if (!event.target) {
        // Click on blank. Do something.
    }
});
```
