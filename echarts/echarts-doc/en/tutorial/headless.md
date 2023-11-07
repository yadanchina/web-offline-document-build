
{{target: headless}}

# Server-side Rendering

Apache ECharts<sup>TM</sup> can be rendered at server-side. For example, the thumbnails in the [official examples page](/examples/en/index.html) are generated at a server.

Commonly used headless tool is required, for example, [puppeteer](https://github.com/GoogleChrome/puppeteer), [headless chrome](https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md), [node-canvas](https://github.com/Automattic/node-canvas), [jsdom](https://github.com/jsdom/jsdom), [PhantomJS](http://phantomjs.org/), etc.

Some solutions contributed by the community are list as follows:

+ https://github.com/hellosean1025/node-echarts
+ https://github.com/chfw/echarts-scrappeteer
+ https://github.com/chfw/pyecharts-snapshot/blob/master/pyecharts_snapshot/phantomjs/snapshot.js
+ https://gist.github.com/pissang/4c32ee30e35c91336af72b129a1a4a73

Notice: if server-side rendering result is different from browser-side rendering, please set [animation](option.html#animation) as `false` and try again.
