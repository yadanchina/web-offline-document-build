import{_ as e,o as s,c as a,a as o}from"./app.dbaf790a.js";const b=JSON.parse(`{"title":"故障排除","description":"","frontmatter":{},"headers":[{"level":2,"title":"CLI","slug":"cli","link":"#cli","children":[{"level":3,"title":"Error: Cannot find module 'C:\\\\foo\\\\bar&baz\\\\vite\\\\bin\\\\vite.js'","slug":"error-cannot-find-module-cfoobarbazvitebinvitejs","link":"#error-cannot-find-module-cfoobarbazvitebinvitejs","children":[]}]},{"level":2,"title":"配置","slug":"config","link":"#config","children":[{"level":3,"title":"该包仅支持 ESM","slug":"this-package-is-esm-only","link":"#this-package-is-esm-only","children":[]}]},{"level":2,"title":"开发服务器","slug":"dev-server","link":"#dev-server","children":[{"level":3,"title":"请求始终停滞","slug":"requests-are-stalled-forever","link":"#requests-are-stalled-forever","children":[]},{"level":3,"title":"网络请求停止加载","slug":"network-requests-stop-loading","link":"#network-requests-stop-loading","children":[]},{"level":3,"title":"431 Request Header Fields Too Large","slug":"_431-request-header-fields-too-large","link":"#_431-request-header-fields-too-large","children":[]}]},{"level":2,"title":"HMR","slug":"hmr","link":"#hmr","children":[{"level":3,"title":"Vite 检测到文件变化，但 HMR 不工作","slug":"vite-detects-a-file-change-but-the-hmr-is-not-working","link":"#vite-detects-a-file-change-but-the-hmr-is-not-working","children":[]},{"level":3,"title":"Vite 没有检测到文件变化","slug":"vite-does-not-detect-a-file-change","link":"#vite-does-not-detect-a-file-change","children":[]},{"level":3,"title":"完全重新加载了，而不是 HMR","slug":"a-full-reload-happens-instead-of-hmr","link":"#a-full-reload-happens-instead-of-hmr","children":[]},{"level":3,"title":"控制台中大量热更新","slug":"high-number-of-hmr-updates-in-console","link":"#high-number-of-hmr-updates-in-console","children":[]}]},{"level":2,"title":"构建","slug":"build","link":"#build","children":[{"level":3,"title":"构建产物因为 CORS 错误无法工作","slug":"built-file-does-not-work-because-of-cors-error","link":"#built-file-does-not-work-because-of-cors-error","children":[]}]},{"level":2,"title":"优化依赖","slug":"optimize-dependencies","link":"#optimize-dependencies","children":[{"level":3,"title":"链接本地包时过期预构建依赖项","slug":"outdated-pre-bundled-deps-when-linking-to-a-local-package","link":"#outdated-pre-bundled-deps-when-linking-to-a-local-package","children":[]}]},{"level":2,"title":"性能瓶颈","slug":"performance-bottlenecks","link":"#performance-bottlenecks","children":[]},{"level":2,"title":"其他","slug":"others","link":"#others","children":[{"level":3,"title":"为了浏览器兼容性而模块外部化","slug":"module-externalized-for-browser-compatibility","link":"#module-externalized-for-browser-compatibility","children":[]},{"level":3,"title":"出现 Syntax Error 或 Type Error","slug":"syntax-error-type-error-happens","link":"#syntax-error-type-error-happens","children":[]},{"level":3,"title":"浏览器扩展程序","slug":"browser-extensions","link":"#browser-extensions","children":[]},{"level":3,"title":"Windows 上的跨驱动器链接","slug":"cross-drive-links-on-windows","link":"#cross-drive-links-on-windows","children":[]}]}],"relativePath":"guide/troubleshooting.md"}`),t={name:"guide/troubleshooting.md"},r=o(`<h1 id="troubleshooting" tabindex="-1">故障排除 <a class="header-anchor" href="#troubleshooting" aria-hidden="true">#</a></h1><blockquote><p>你还可以查看 <a href="https://rollupjs.org/troubleshooting/" target="_blank" rel="noreferrer">Rollup 的故障排除指南</a> 了解更多。</p></blockquote><p>如果这里的建议并未帮助到你，请将你的问题发送到 <a href="https://github.com/vitejs/vite/discussions" target="_blank" rel="noreferrer">GitHub 讨论区</a> 或 <a href="https://chat.vitejs.dev" target="_blank" rel="noreferrer">Vite Land Discord</a> 的 <code>#help</code> 频道。</p><h2 id="cli" tabindex="-1">CLI <a class="header-anchor" href="#cli" aria-hidden="true">#</a></h2><h3 id="error-cannot-find-module-cfoobarbazvitebinvitejs" tabindex="-1"><code>Error: Cannot find module &#39;C:\\foo\\bar&amp;baz\\vite\\bin\\vite.js&#39;</code> <a class="header-anchor" href="#error-cannot-find-module-cfoobarbazvitebinvitejs" aria-hidden="true">#</a></h3><p>你的项目文件夹路径中可能包含了符号 <code>&amp;</code>，这在 Windows 上无法与 <code>npm</code> 配合正常工作 (<a href="https://github.com/npm/cmd-shim/issues/45" target="_blank" rel="noreferrer">npm/cmd-shim#45</a>)。</p><p>你可以选择以下两种修改方式：</p><ul><li>切换另一种包管理工具（例如 <code>pnpm</code> 或 <code>yarn</code>）</li><li>从你的项目路径中移除符号 <code>&amp;</code></li></ul><h2 id="config" tabindex="-1">配置 <a class="header-anchor" href="#config" aria-hidden="true">#</a></h2><h3 id="this-package-is-esm-only" tabindex="-1">该包仅支持 ESM <a class="header-anchor" href="#this-package-is-esm-only" aria-hidden="true">#</a></h3><p>当使用 <code>require</code> 导入一个仅支持 ESM 的包时，会出现以下错误。</p><blockquote><p>Failed to resolve &quot;foo&quot;. This package is ESM only but it was tried to load by <code>require</code>.</p></blockquote><blockquote><p>&quot;foo&quot; resolved to an ESM file. ESM file cannot be loaded by <code>require</code>.</p></blockquote><p>ESM 格式的文件无法被 <a href="https://nodejs.org/docs/latest-v18.x/api/esm.html#require:~:text=Using%20require%20to%20load%20an%20ES%20module%20is%20not%20supported%20because%20ES%20modules%20have%20asynchronous%20execution.%20Instead%2C%20use%20import()%20to%20load%20an%20ES%20module%20from%20a%20CommonJS%20module." target="_blank" rel="noreferrer"><code>require</code></a> 加载。</p><p>我们建议你通过以下方式将你的配置文件转换为 ESM 格式：</p><ul><li>在邻近的 <code>package.json</code> 中添加 <code>&quot;type&quot;: &quot;module&quot;</code></li><li>将 <code>vite.config.js</code>/<code>vite.config.ts</code> 重命名为 <code>vite.config.mjs</code>/<code>vite.config.mts</code></li></ul><h2 id="dev-server" tabindex="-1">开发服务器 <a class="header-anchor" href="#dev-server" aria-hidden="true">#</a></h2><h3 id="requests-are-stalled-forever" tabindex="-1">请求始终停滞 <a class="header-anchor" href="#requests-are-stalled-forever" aria-hidden="true">#</a></h3><p>如果你使用的是 Linux，文件描述符限制和 inotify 限制可能会导致这个问题。由于 Vite 不会打包大多数文件，浏览器可能会请求许多文件，而相应地需要许多文件描述符，因此超过了限制。</p><p>要解决这个问题：</p><ul><li><p>使用 <code>ulimit</code> 增加文件描述符的限制</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看当前限制值</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ulimit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-Sn</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># （暂时）更改限制值</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ulimit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-Sn</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10000</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 你可能也需要更改硬性限制值</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 重启你的浏览器</span></span>
<span class="line"></span></code></pre></div></li><li><p>通过 <code>sysctl</code> 提升下列 inotify 相关的限制</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看当前限制值</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sysctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fs.inotify</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># （暂时）更改限制值</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sysctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fs.inotify.max_queued_events=</span><span style="color:#F78C6C;">16384</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sysctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fs.inotify.max_user_instances=</span><span style="color:#F78C6C;">8192</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sysctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fs.inotify.max_user_watches=</span><span style="color:#F78C6C;">524288</span></span>
<span class="line"></span></code></pre></div></li></ul><p>如果通过以上步骤仍不起作用，可以尝试在以下文件中添加 <code>DefaultLimitNOFILE=65536</code> 配置。</p><ul><li>/etc/systemd/system.conf</li><li>/etc/systemd/user.conf</li></ul><p>对于 Ubuntu Linux 操作系统，你可能需要添加一行 <code>* - nofile 65536</code> 到文件 <code>/etc/security/limits.conf</code> 之中，而不是更新 systemd 配置文件。</p><p>请注意，这些配置会持久作用，但需要 <strong>重新启动</strong>。</p><h3 id="network-requests-stop-loading" tabindex="-1">网络请求停止加载 <a class="header-anchor" href="#network-requests-stop-loading" aria-hidden="true">#</a></h3><p>使用自签名SSL证书时，Chrome 会忽略所有缓存指令并重新加载内容。而 Vite 依赖于这些缓存指令。</p><p>要解决此问题，请使用受信任的SSL证书。</p><p>请查看：<a href="https://helpx.adobe.com/mt/experience-manager/kb/cache-problems-on-chrome-with-SSL-certificate-errors.html" target="_blank" rel="noreferrer">缓存问题</a> 和相关的 <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=110649#c8" target="_blank" rel="noreferrer">Chrome issue</a></p><h4 id="macos" tabindex="-1">macOS <a class="header-anchor" href="#macos" aria-hidden="true">#</a></h4><p>您可以使用以下命令通过 CLI 安装受信任的证书：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">security add-trusted-cert -d -r trustRoot -k ~/Library/Keychains/login.keychain-db your-cert.cer</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>或者，通过将其导入 Keychain Access 应用程序并将您的证书的信任更新为“始终信任”。</p><h3 id="_431-request-header-fields-too-large" tabindex="-1">431 Request Header Fields Too Large <a class="header-anchor" href="#_431-request-header-fields-too-large" aria-hidden="true">#</a></h3><p>当服务器或 WebSocket 服务收到一个较大的 HTTP 头，该请求可能会被遗落并且会显示下面这样的警告。</p><blockquote><p>Server responded with status code 431. See <a href="https://vitejs.dev/guide/troubleshooting.html#_431-request-header-fields-too-large" target="_blank" rel="noreferrer">https://vitejs.dev/guide/troubleshooting.html#_431-request-header-fields-too-large</a>.</p></blockquote><p>这是由于 Node.js 限制请求头大小，以减轻 <a href="https://www.cve.org/CVERecord?id=CVE-2018-12121" target="_blank" rel="noreferrer">CVE-2018-12121</a> 的影响。</p><p>要避免这个问题，请尝试减小请求头大小。举个例子，如果 cookie 太长，请删除它。或者你可以使用 <a href="https://nodejs.org/api/cli.html#--max-http-header-sizesize" target="_blank" rel="noreferrer"><code>--max-http-header-size</code></a> 来更改最大请求头大小。</p><h2 id="hmr" tabindex="-1">HMR <a class="header-anchor" href="#hmr" aria-hidden="true">#</a></h2><h3 id="vite-detects-a-file-change-but-the-hmr-is-not-working" tabindex="-1">Vite 检测到文件变化，但 HMR 不工作 <a class="header-anchor" href="#vite-detects-a-file-change-but-the-hmr-is-not-working" aria-hidden="true">#</a></h3><p>你可能导入了一个拥有不同大小写的文件，例如，存在 <code>src/foo.js</code> 文件而 <code>src/bar.js</code> 导入了它：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./Foo.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 应该为 &#39;./foo.js&#39;</span></span>
<span class="line"></span></code></pre></div><p>相关 issue：<a href="https://github.com/vitejs/vite/issues/964" target="_blank" rel="noreferrer">#964</a></p><h3 id="vite-does-not-detect-a-file-change" tabindex="-1">Vite 没有检测到文件变化 <a class="header-anchor" href="#vite-does-not-detect-a-file-change" aria-hidden="true">#</a></h3><p>如果你正在 WSL2 中运行 Vite，Vite 无法在某些场景下监听文件变化。请查看 <a href="/config/server-options.html#server-watch"><code>server.watch</code> 选项</a> 的描述。</p><h3 id="a-full-reload-happens-instead-of-hmr" tabindex="-1">完全重新加载了，而不是 HMR <a class="header-anchor" href="#a-full-reload-happens-instead-of-hmr" aria-hidden="true">#</a></h3><p>如果 HMR 不是由 Vite 或一个插件处理的，那么将进行完全的重新加载。</p><p>同时如果有依赖环，也会发生完全重载。要解决这个问题，请先尝试解决依赖循环。</p><h3 id="high-number-of-hmr-updates-in-console" tabindex="-1">控制台中大量热更新 <a class="header-anchor" href="#high-number-of-hmr-updates-in-console" aria-hidden="true">#</a></h3><p>这可能是由循环依赖引起的。要解决这个问题，请先尝试解决依赖循环。</p><h2 id="build" tabindex="-1">构建 <a class="header-anchor" href="#build" aria-hidden="true">#</a></h2><h3 id="built-file-does-not-work-because-of-cors-error" tabindex="-1">构建产物因为 CORS 错误无法工作 <a class="header-anchor" href="#built-file-does-not-work-because-of-cors-error" aria-hidden="true">#</a></h3><p>如果导出的 HTML 文件是通过 <code>file</code> 协议打开的，那么其中的 script 将不会运行，且报告下列错误。</p><blockquote><p>Access to script at &#39;file:///foo/bar.js&#39; from origin &#39;null&#39; has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, isolated-app, chrome-extension, chrome, https, chrome-untrusted.</p></blockquote><blockquote><p>Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at file:///foo/bar.js. (Reason: CORS request not http).</p></blockquote><p>请查看 <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp" target="_blank" rel="noreferrer">释因：CORS 请求不是 HTTP 请求 - HTTP | MDN</a> 了解为什么会发生这种情况的更多信息。</p><p>你需要通过 <code>http</code> 协议访问该文件。最简单的办法就是使用 <code>npx vite preview</code>。</p><h2 id="optimize-dependencies" tabindex="-1">优化依赖 <a class="header-anchor" href="#optimize-dependencies" aria-hidden="true">#</a></h2><h3 id="outdated-pre-bundled-deps-when-linking-to-a-local-package" tabindex="-1">链接本地包时过期预构建依赖项 <a class="header-anchor" href="#outdated-pre-bundled-deps-when-linking-to-a-local-package" aria-hidden="true">#</a></h3><p>在 Vite 中通过一个哈希值来决定优化后的依赖项是否有效，这个值取决于包锁定的内容、应用于依赖项的补丁以及 Vite 配置文件中影响 node_modules 打包的选项。这意味着，当使用像 <a href="https://docs.npmjs.com/cli/v9/configuring-npm/package-json#overrides" target="_blank" rel="noreferrer">npm overrides</a> 这样的功能覆盖依赖项时，Vite 将检测到，并在下一次服务器启动时重新打包您的依赖项。当您使用像 <a href="https://docs.npmjs.com/cli/v9/commands/npm-link" target="_blank" rel="noreferrer">npm link</a> 这样的功能时，Vite 不会使依赖项无效。如果您链接或取消链接一个依赖项，那么您需要使用 <code>vite --force</code> 在下一次服务器启动时强制重新预构建。我们建议使用 overrides，它们现在被每个包管理器所支持（还可以参见 <a href="https://pnpm.io/package_json#pnpmoverrides" target="_blank" rel="noreferrer">pnpm overrides</a> 和 <a href="https://yarnpkg.com/configuration/manifest/#resolutions" target="_blank" rel="noreferrer">yarn resolutions</a>）。</p><h2 id="performance-bottlenecks" tabindex="-1">性能瓶颈 <a class="header-anchor" href="#performance-bottlenecks" aria-hidden="true">#</a></h2><p>如果你遇到应用程序性能瓶颈导致加载缓慢，可以在启动 Vite 开发服务器或在构建应用程序时使用内置的 Node.js 调试器来创建 CPU 性能分析文件：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-LZX46" id="tab-Ar-7nX7" checked="checked"><label for="tab-Ar-7nX7">dev server</label><input type="radio" name="group-LZX46" id="tab-Udr02aF"><label for="tab-Udr02aF">build</label></div><div class="blocks"><div class="language-bash active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">vite</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--profile</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--open</span></span>
<span class="line"></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">vite</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--profile</span></span>
<span class="line"></span></code></pre></div></div></div><div class="tip custom-block"><p class="custom-block-title">Vite 开发服务器</p><p>一旦应用程序在浏览器中打开，请等待其完成加载，然后返回终端并按下 <code>p</code> 键（将停止 Node.js 调试器），然后按下 <code>q</code> 键停止开发服务器。</p></div><p>Node.js 调试器将在根文件夹中生成 <code>vite-profile-0.cpuprofile</code> 文件，前往 <a href="https://www.speedscope.app/" target="_blank" rel="noreferrer">https://www.speedscope.app/</a> ，点击 <code>BROWSE</code> 按钮上传 CPU 性能分析文件以检查结果。</p><h2 id="others" tabindex="-1">其他 <a class="header-anchor" href="#others" aria-hidden="true">#</a></h2><h3 id="module-externalized-for-browser-compatibility" tabindex="-1">为了浏览器兼容性而模块外部化 <a class="header-anchor" href="#module-externalized-for-browser-compatibility" aria-hidden="true">#</a></h3><p>当你在浏览器中使用一个 Node.js 模块时，Vite 会输出以下警告：</p><blockquote><p>Module &quot;fs&quot; has been externalized for browser compatibility. Cannot access &quot;fs.readFile&quot; in client code.</p></blockquote><p>这是因为 Vite 不会自动 polyfill Node.js 的内建模块。</p><p>我们推荐你不要在浏览器中使用 Node.js 模块以减小包体积，尽管你可以为其手动添加 polyfill。如果该模块是被某个第三方库（这里意为某个在浏览器中使用的库）导入的，则建议向对应库提交一个 issue。</p><h3 id="syntax-error-type-error-happens" tabindex="-1">出现 Syntax Error 或 Type Error <a class="header-anchor" href="#syntax-error-type-error-happens" aria-hidden="true">#</a></h3><p>Vite 无法处理、也不支持仅可在非严格模式（sloppy mode）下运行的代码。这是因为 Vite 使用了 ESM 并且始终在 ESM 中使用 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode" target="_blank" rel="noreferrer">严格模式</a>。</p><p>例如，你可能会看到以下错误。</p><blockquote><p>[ERROR] With statements cannot be used with the &quot;esm&quot; output format due to strict mode</p></blockquote><blockquote><p>TypeError: Cannot create property &#39;foo&#39; on boolean &#39;false&#39;</p></blockquote><p>如果这些代码是在依赖中被使用的，你应该使用 <a href="https://github.com/ds300/patch-package" target="_blank" rel="noreferrer"><code>patch-package</code></a>（或者 <a href="https://yarnpkg.com/cli/patch" target="_blank" rel="noreferrer"><code>yarn patch</code></a>、<a href="https://pnpm.io/cli/patch" target="_blank" rel="noreferrer"><code>pnpm patch</code></a> 工具）来做短期补丁处理。</p><h3 id="browser-extensions" tabindex="-1">浏览器扩展程序 <a class="header-anchor" href="#browser-extensions" aria-hidden="true">#</a></h3><p>一些浏览器扩展程序（例如 ad-blockers 广告拦截器），可能会阻止 Vite 客户端向 Vite 开发服务器发送请求。在这种情况下，你可能会看到一个空白屏且没有错误日志。如果遇到这类问题，请尝试禁用扩展程序。</p><h3 id="cross-drive-links-on-windows" tabindex="-1">Windows 上的跨驱动器链接 <a class="header-anchor" href="#cross-drive-links-on-windows" aria-hidden="true">#</a></h3><p>如果你的项目中存在跨驱动器链接，Vite 可能无法工作。</p><p>跨驱动器链接的一个例子是：</p><ul><li>通过 <code>subst</code> 命令将虚拟驱动器链接到一个文件夹</li><li>通过 <code>mklink</code> 命令将符号链接/联接到另一个驱动器（例如 Yarn 全局缓存）</li></ul><p>相关 issue：<a href="https://github.com/vitejs/vite/issues/10802" target="_blank" rel="noreferrer">#10802</a></p>`,84),l=[r];function n(i,c,p,d,h,u){return s(),a("div",null,l)}const m=e(t,[["render",n]]);export{b as __pageData,m as default};
