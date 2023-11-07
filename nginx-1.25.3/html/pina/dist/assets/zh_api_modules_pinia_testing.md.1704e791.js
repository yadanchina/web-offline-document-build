import{_ as t,o as e,c as i,S as a}from"./chunks/framework.7ffc5276.js";const _=JSON.parse('{"title":"模块：@pinia/testing","description":"","frontmatter":{"sidebar":"auto","editLinks":false,"sidebarDepth":3},"headers":[],"relativePath":"zh/api/modules/pinia_testing.md","filePath":"zh/api/modules/pinia_testing.md"}'),n={name:"zh/api/modules/pinia_testing.md"},s=a('<p><a href="./../">API 文档</a> / @pinia/testing</p><h1 id="module-pinia-testing" tabindex="-1">模块：@pinia/testing <a class="header-anchor" href="#module-pinia-testing" aria-label="Permalink to &quot;模块：@pinia/testing %{#module-pinia-testing}%&quot;">​</a></h1><h2 id="interfaces" tabindex="-1">接口 <a class="header-anchor" href="#interfaces" aria-label="Permalink to &quot;接口 %{#interfaces}%&quot;">​</a></h2><ul><li><a href="./../interfaces/pinia_testing.TestingOptions.html">TestingOptions</a></li><li><a href="./../interfaces/pinia_testing.TestingPinia.html">TestingPinia</a></li></ul><h2 id="functions" tabindex="-1">函数 <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;函数 %{#functions}%&quot;">​</a></h2><h3 id="createtestingpinia" tabindex="-1">createTestingPinia <a class="header-anchor" href="#createtestingpinia" aria-label="Permalink to &quot;createTestingPinia %{#createtestingpinia}%&quot;">​</a></h3><p>▸ <strong>createTestingPinia</strong>(<code>options?</code>): <a href="./../interfaces/pinia_testing.TestingPinia.html"><code>TestingPinia</code></a></p><p>创建一个为单元测试设计的 pinia 实例，<strong>需要 mocking</strong> store。 默认情况下，<strong>所有的 action 都是 mocked 的</strong>，因此不会执行。 这可以让你对 store 和组件进行单独的单元测试。 你可以通过 <code>stubActions</code> 选项来改变这一点。 如果你使用 jest，将它们替换为 <code>jest.fn()</code>， 否则，你必须提供你自己的 <code>createSpy</code> 选项。</p><h4 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><code>options</code></td><td style="text-align:left;"><a href="./../interfaces/pinia_testing.TestingOptions.html"><code>TestingOptions</code></a></td><td style="text-align:left;">配置 pinia 测试实例的选项</td></tr></tbody></table><h4 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h4><p><a href="./../interfaces/pinia_testing.TestingPinia.html"><code>TestingPinia</code></a></p><p>一个增强的 Pinia 实例</p>',13),o=[s];function r(l,c,d,h,p,g){return e(),i("div",null,o)}const u=t(n,[["render",r]]);export{_ as __pageData,u as default};