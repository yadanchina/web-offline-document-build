import{_ as e,o as t,c as r,a}from"./app.dbaf790a.js";const i="/logo.svg",b=JSON.parse('{"title":"Vite 2.0 发布了","description":"","frontmatter":{"sidebar":false},"headers":[{"level":2,"title":"2.0 带来了什么","slug":"whats-new-in-2-0","link":"#whats-new-in-2-0","children":[{"level":3,"title":"多框架支持","slug":"framework-agnostic-core","link":"#framework-agnostic-core","children":[]},{"level":3,"title":"全新插件机制和 API","slug":"new-plugin-format-and-api","link":"#new-plugin-format-and-api","children":[]},{"level":3,"title":"基于 esbuild 的依赖预打包","slug":"esbuild-powered-dep-pre-bundling","link":"#esbuild-powered-dep-pre-bundling","children":[]},{"level":3,"title":"更好的 CSS 支持","slug":"first-class-css-support","link":"#first-class-css-support","children":[]},{"level":3,"title":"服务端渲染（SSR）支持","slug":"server-side-rendering-ssr-support","link":"#server-side-rendering-ssr-support","children":[]},{"level":3,"title":"旧浏览器支持","slug":"opt-in-legacy-browser-support","link":"#opt-in-legacy-browser-support","children":[]}]},{"level":2,"title":"尝试一下！","slug":"give-it-a-try","link":"#give-it-a-try","children":[]}],"relativePath":"blog/announcing-vite2.md"}'),n={name:"blog/announcing-vite2.md"},s=a('<h1 id="announcing-vite-2-0" tabindex="-1">Vite 2.0 发布了 <a class="header-anchor" href="#announcing-vite-2-0" aria-hidden="true">#</a></h1><p><em>February 16, 2021</em> - Check out the <a href="./announcing-vite3.html">Vite 3.0 announcement</a></p><p style="text-align:center;"><img src="'+i+`" style="height:200px;"></p><p>今天我们很高兴地宣布，Vite 2.0 正式发布了！</p><p>Vite（法语意思是 “快”，发音为 <code>/vit/</code>，类似 veet）是一种全新的前端构建工具。你可以把它理解为一个开箱即用的开发服务器 + 打包工具的组合，但是更轻更快。Vite 利用浏览器 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules" target="_blank" rel="noreferrer">原生的 ES 模块支持</a> 和用来编译到原生语言的开发工具（如 <a href="https://esbuild.github.io/" target="_blank" rel="noreferrer">esbuild</a>）来提供一个快速且现代的开发体验。</p><p>想知道 Vite 有多快？看看这个<a href="https://twitter.com/amasad/status/1355379680275128321" target="_blank" rel="noreferrer">视频比较</a>， 在 <a href="http://Repl.it" target="_blank" rel="noreferrer">Repl.it</a> 上从零启动一个基于 Vite 的 React 应用，浏览器页面加载完毕的时候，基于 CRA（<code>create-react-app</code>）的应用甚至还没有安装完依赖。</p><p>如果你还没听说过 Vite 到底是什么，可以到 <a href="/guide/why.html">这里</a> 了解一下项目的设计初衷。如果你想要了解 Vite 跟其它一些类似的工具有什么区别，可以参考这里的 <a href="/guide/comparisons.html">对比</a>。</p><h2 id="whats-new-in-2-0" tabindex="-1">2.0 带来了什么 <a class="header-anchor" href="#whats-new-in-2-0" aria-hidden="true">#</a></h2><p>Vite 1.0 虽然之前进入了 RC 阶段，但在发布之前我们决定进行一次彻底的重构来解决一些设计缺陷。所以 Vite 2.0 其实是 Vite 的第一个稳定版本。2.0 带来了大量的改进：</p><h3 id="framework-agnostic-core" tabindex="-1">多框架支持 <a class="header-anchor" href="#framework-agnostic-core" aria-hidden="true">#</a></h3><p>设计 Vite 的初衷是为了 <a href="https://github.com/vuejs/vue-dev-server" target="_blank" rel="noreferrer">探索黑客原型项目以更好的支持 Vue 单文件组件</a>。Vite 1 则是这个想法的延续，并在此基础上增加了对 HMR 支持。</p><p>但 2.0 基于之前的经验提供了一个更稳定灵活的内部架构，从而可以完全通过插件机制来支持任意框架。现在 Vite 提供 <a href="https://github.com/vitejs/vite/tree/main/packages/create-vite" target="_blank" rel="noreferrer">官方的 Vue, React, Preact, Lit Element 项目模版</a>，而 Svelte 社区也在开发 Vite 整合方案。</p><h3 id="new-plugin-format-and-api" tabindex="-1">全新插件机制和 API <a class="header-anchor" href="#new-plugin-format-and-api" aria-hidden="true">#</a></h3><p>Vite 2.0 受 <a href="https://github.com/preactjs/wmr" target="_blank" rel="noreferrer">WMR</a> 的启发采用了基于 Rollup 插件 API 的设计。<a href="https://vite-rollup-plugins.patak.dev/" target="_blank" rel="noreferrer">很多 Rollup 插件可以跟 Vite 直接兼容</a>。插件可以在使用 Rollup 插件钩子之外使用一些额外的 Vite 特有的 API 来处理一些打包中不存在的需求，比如区分开发与生产环境 ，或是自定义热更新处理。</p><p>Vite 的 <a href="/guide/api-javascript.html">程序化 API</a> 也得到了大幅改进 - 已经有不少用户在开发基于 Vite 的上层框架，Nuxt 团队也已经在 Nuxt 3 中验证了初步整合的可行性。</p><h3 id="esbuild-powered-dep-pre-bundling" tabindex="-1">基于 esbuild 的依赖预打包 <a class="header-anchor" href="#esbuild-powered-dep-pre-bundling" aria-hidden="true">#</a></h3><p>由于 Vite 是一个基于 原生 ESM 开发服务器，所以它需要进行依赖预打包以减少浏览器请求的数量，并进行 CommonJS 到 ESM 的转换。在之前版本中 Vite 是用 Rollup 来完成的，而在 2.0 中切换到了 esbuild，这使得依赖预打包的速度快了几十倍。作为参考，在 M1 芯片的 MacBook Pro 上，冷启动一个具有大量依赖项（如 React Meterial UI）的测试应用，之前需要 28 秒，而现在只需要约 1.5 秒。从 webpack 或其它打包工具迁移到 Vite 应该也会有类似的速度改善。</p><h3 id="first-class-css-support" tabindex="-1">更好的 CSS 支持 <a class="header-anchor" href="#first-class-css-support" aria-hidden="true">#</a></h3><p>Vite 将 CSS 看作模块系统中的一等公民，并且内置了以下支持：</p><ul><li><strong>强化路径解析</strong>：CSS 中的 @import 和 url() 路径都通过 Vite 的路径解析器来解析，从而支持 alias 和 npm 依赖。</li><li><strong>自动 URL 改写</strong>：所有 url() 路径都会被自动改写从而确保在开发和构建中都指向正确的文件路径。</li><li><strong>CSS 代码分割</strong>：构建时每一个被分割的 JS 文件都会自动生成一个对应的 CSS 文件，当被请求时，该文件会自动与 JS 文件并行加载。</li></ul><h3 id="server-side-rendering-ssr-support" tabindex="-1">服务端渲染（SSR）支持 <a class="header-anchor" href="#server-side-rendering-ssr-support" aria-hidden="true">#</a></h3><p>Vite 2.0 提供 <a href="/guide/ssr.html">实验性的 SSR 支持</a>。Vite 提供了灵活的 API，以便于在开发过程中直接通过 Node.js 高效率地加载和更新 ESM 的源码（几乎与服务端的 HMR 一致），并自动外部化与 CommonJS 兼容的依赖关系，以提高开发和 SSR 的构建速度。生产环境下，服务器可以和 Vite 完全解耦。基于 Vite SSR 的架构也可以很方便的做静态预渲染（SSG)。</p><p>Vite SSR 会作为一个底层功能，而我们期待看到更高层级的框架在此基础上的应用。</p><h3 id="opt-in-legacy-browser-support" tabindex="-1">旧浏览器支持 <a class="header-anchor" href="#opt-in-legacy-browser-support" aria-hidden="true">#</a></h3><p>Vite 默认只支持原生支持 ESM 的现代浏览器，但可以通过官方的 <a href="https://github.com/vitejs/vite/tree/main/packages/plugin-legacy" target="_blank" rel="noreferrer">@vitejs/plugin-legacy</a> 来支持旧浏览器。legacy 插件会自动额外生成一个针对旧浏览器的包，并且在 html 中插入根据浏览器 ESM 支持来选择性加载对应包的代码（类似 vue-cli 的 modern mode）。</p><h2 id="give-it-a-try" tabindex="-1">尝试一下！ <a class="header-anchor" href="#give-it-a-try" aria-hidden="true">#</a></h2><p>功能是很多，但试一下其实很简单。用以下命令，一下就可以搭起一个基于 vite 的项目（确保你的 Node.js 版本 &gt;=12）：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@vitejs/app</span></span>
<span class="line"></span></code></pre></div><p>然后，你可以阅读 <a href="/guide/">指引文档</a> 了解 Vite 提供了哪些开箱即用的功能，也可以在 <a href="https://github.com/vitejs/vite" target="_blank" rel="noreferrer">GitHub</a> 上查看源码，关注我们的 <a href="https://twitter.com/vite_js" target="_blank" rel="noreferrer">Twitter</a> 以了解最新的进展，或与其他 Vite 用户在 <a href="http://chat.vitejs.dev/" target="_blank" rel="noreferrer">Discord</a> 上一起讨论。</p>`,29),l=[s];function o(p,d,h,c,u,g){return t(),r("div",null,l)}const m=e(n,[["render",o]]);export{b as __pageData,m as default};