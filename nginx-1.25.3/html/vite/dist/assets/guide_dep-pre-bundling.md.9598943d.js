import{_ as e,o as s,c as o,a as n}from"./app.dbaf790a.js";const m=JSON.parse('{"title":"依赖预构建","description":"","frontmatter":{},"headers":[{"level":2,"title":"原因","slug":"the-why","link":"#the-why","children":[]},{"level":2,"title":"自动依赖搜寻","slug":"automatic-dependency-discovery","link":"#automatic-dependency-discovery","children":[]},{"level":2,"title":"Monorepo 和链接依赖","slug":"monorepos-and-linked-dependencies","link":"#monorepos-and-linked-dependencies","children":[]},{"level":2,"title":"自定义行为","slug":"customizing-the-behavior","link":"#customizing-the-behavior","children":[]},{"level":2,"title":"缓存","slug":"caching","link":"#caching","children":[{"level":3,"title":"文件系统缓存","slug":"file-system-cache","link":"#file-system-cache","children":[]},{"level":3,"title":"浏览器缓存","slug":"browser-cache","link":"#browser-cache","children":[]}]}],"relativePath":"guide/dep-pre-bundling.md"}'),a={name:"guide/dep-pre-bundling.md"},l=n(`<h1 id="dependency-pre-bundling" tabindex="-1">依赖预构建 <a class="header-anchor" href="#dependency-pre-bundling" aria-hidden="true">#</a></h1><p>当你首次启动 <code>vite</code> 时，Vite 在本地加载你的站点之前预构建了项目依赖。默认情况下，它是自动且透明地完成的。</p><h2 id="the-why" tabindex="-1">原因 <a class="header-anchor" href="#the-why" aria-hidden="true">#</a></h2><p>这就是 Vite 执行时所做的“依赖预构建”。这个过程有两个目的:</p><ol><li><p><strong>CommonJS 和 UMD 兼容性:</strong> 在开发阶段中，Vite 的开发服务器将所有代码视为原生 ES 模块。因此，Vite 必须先将以 CommonJS 或 UMD 形式提供的依赖项转换为 ES 模块。</p><p>在转换 CommonJS 依赖项时，Vite 会进行智能导入分析，这样即使模块的导出是动态分配的（例如 React），具名导入（named imports）也能正常工作：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 符合预期</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> React</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useState</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">react</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div></li><li><p><strong>性能：</strong> 为了提高后续页面的加载性能，Vite将那些具有许多内部模块的 ESM 依赖项转换为单个模块。</p><p>有些包将它们的 ES 模块构建为许多单独的文件，彼此导入。例如，<a href="https://unpkg.com/browse/lodash-es/" target="_blank" rel="noreferrer"><code>lodash-es</code> 有超过 600 个内置模块</a>！当我们执行 <code>import { debounce } from &#39;lodash-es&#39;</code> 时，浏览器同时发出 600 多个 HTTP 请求！即使服务器能够轻松处理它们，但大量请求会导致浏览器端的网络拥塞，使页面加载变得明显缓慢。</p><p>通过将 <code>lodash-es</code> 预构建成单个模块，现在我们只需要一个HTTP请求！</p></li></ol><div class="tip custom-block"><p class="custom-block-title">注意</p><p>依赖预构建仅适用于开发模式，并使用 <code>esbuild</code> 将依赖项转换为 ES 模块。在生产构建中，将使用 <code>@rollup/plugin-commonjs</code>。</p></div><h2 id="automatic-dependency-discovery" tabindex="-1">自动依赖搜寻 <a class="header-anchor" href="#automatic-dependency-discovery" aria-hidden="true">#</a></h2><p>如果没有找到现有的缓存，Vite 会扫描您的源代码，并自动寻找引入的依赖项（即 &quot;bare import&quot;，表示期望从 <code>node_modules</code> 中解析），并将这些依赖项作为预构建的入口点。预打包使用 <code>esbuild</code> 执行，因此通常速度非常快。</p><p>在服务器已经启动后，如果遇到尚未在缓存中的新依赖项导入，则 Vite 将重新运行依赖项构建过程，并在需要时重新加载页面。</p><h2 id="monorepos-and-linked-dependencies" tabindex="-1">Monorepo 和链接依赖 <a class="header-anchor" href="#monorepos-and-linked-dependencies" aria-hidden="true">#</a></h2><p>在一个 monorepo 启动中，该仓库中的某个包可能会成为另一个包的依赖。Vite 会自动侦测没有从 <code>node_modules</code> 解析的依赖项，并将链接的依赖视为源码。它不会尝试打包被链接的依赖，而是会分析被链接依赖的依赖列表。</p><p>然而，这需要被链接的依赖被导出为 ESM 格式。如果不是，那么你可以在配置里将此依赖添加到 <a href="/config/dep-optimization-options.html#optimizedeps-include"><code>optimizeDeps.include</code></a> 和 <a href="/config/build-options.html#build-commonjsoptions"><code>build.commonjsOptions.include</code></a> 这两项中。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">optimizeDeps</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">include</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">linked-dep</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">build</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">commonjsOptions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">include</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">linked-dep</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">node_modules</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>当对链接的依赖进行更改时，请使用 <code>--force</code> 命令行选项重新启动开发服务器，以使更改生效。</p><div class="warning custom-block"><p class="custom-block-title">重复删除</p><p>由于链接的依赖项解析方式不同，传递依赖项（transitive dependencies）可能会被错误地去重，从而在运行时出现问题。如果遇到此问题，请使用 <code>npm pack</code> 命令来修复它。</p></div><h2 id="customizing-the-behavior" tabindex="-1">自定义行为 <a class="header-anchor" href="#customizing-the-behavior" aria-hidden="true">#</a></h2><p>有时候默认的依赖启发式算法（discovery heuristics）可能并不总是理想的。如果您想要明确地包含或排除依赖项，可以使用 <a href="/config/dep-optimization-options.html"><code>optimizeDeps</code> 配置项</a> 来进行设置。</p><p><code>optimizeDeps.include</code> 或 <code>optimizeDeps.exclude</code> 的一个典型使用场景，是当 Vite 在源码中无法直接发现 import 的时候。例如，import 可能是插件转换的结果。这意味着 Vite 无法在初始扫描时发现 import —— 只能在文件被浏览器请求并转换后才能发现。这将导致服务器在启动后立即重新打包。</p><p><code>include</code> 和 <code>exclude</code> 都可以用来处理这个问题。如果依赖项很大（包含很多内部模块）或者是 CommonJS，那么你应该包含它；如果依赖项很小，并且已经是有效的 ESM，则可以排除它，让浏览器直接加载它。</p><p>你也可以使用 <a href="/config/dep-optimization-options.html#optimizedeps-esbuildoptions"><code>optimizeDeps.esbuildOptions</code> 选项</a> 来进一步自定义 esbuild。例如，添加一个 esbuild 插件来处理依赖项中的特殊文件。</p><h2 id="caching" tabindex="-1">缓存 <a class="header-anchor" href="#caching" aria-hidden="true">#</a></h2><h3 id="file-system-cache" tabindex="-1">文件系统缓存 <a class="header-anchor" href="#file-system-cache" aria-hidden="true">#</a></h3><p>Vite 将预构建的依赖项缓存到 <code>node_modules/.vite</code> 中。它会基于以下几个来源来决定是否需要重新运行预构建步骤：</p><ul><li>包管理器的锁文件内容，例如 <code>package-lock.json</code>，<code>yarn.lock</code>，<code>pnpm-lock.yaml</code>，或者 <code>bun.lockb</code>；</li><li>补丁文件夹的修改时间；</li><li><code>vite.config.js</code> 中的相关字段；</li><li><code>NODE_ENV</code> 的值。</li></ul><p>只有在上述其中一项发生更改时，才需要重新运行预构建。</p><p>如果出于某些原因你想要强制 Vite 重新构建依赖项，你可以在启动开发服务器时指定 <code>--force</code> 选项，或手动删除 <code>node_modules/.vite</code> 缓存目录。</p><h3 id="browser-cache" tabindex="-1">浏览器缓存 <a class="header-anchor" href="#browser-cache" aria-hidden="true">#</a></h3><p>已预构建的依赖请求使用 HTTP 头 <code>max-age=31536000, immutable</code> 进行强缓存，以提高开发期间页面重新加载的性能。一旦被缓存，这些请求将永远不会再次访问开发服务器。如果安装了不同版本的依赖项（这反映在包管理器的 lockfile 中），则会通过附加版本查询自动失效。如果你想通过本地编辑来调试依赖项，您可以：</p><ol><li>通过浏览器开发工具的 Network 选项卡暂时禁用缓存；</li><li>重启 Vite 开发服务器指定 <code>--force</code> 选项，来重新构建依赖项;</li><li>重新载入页面。</li></ol>`,29),p=[l];function c(t,i,d,r,h,D){return s(),o("div",null,p)}const u=e(a,[["render",c]]);export{m as __pageData,u as default};
