import{_ as a,v as p,b as l,t as o,F as s,L as e,R as t,M as c}from"./chunks/framework.dd59a003.js";const g=JSON.parse('{"title":"嵌套路由","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/essentials/nested-routes.md","filePath":"zh/guide/essentials/nested-routes.md"}'),r={name:"zh/guide/essentials/nested-routes.md"},y=s("h1",{id:"嵌套路由",tabindex:"-1"},[e("嵌套路由 "),s("a",{class:"header-anchor",href:"#嵌套路由","aria-label":'Permalink to "嵌套路由"'},"​")],-1),B=t(`<p>一些应用程序的 UI 由多层嵌套的组件组成。在这种情况下，URL 的片段通常对应于特定的嵌套组件结构，例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#abb2bf;">/user/johnny/profile                     /user/johnny/posts</span></span>
<span class="line"><span style="color:#abb2bf;">+------------------+                  +-----------------+</span></span>
<span class="line"><span style="color:#abb2bf;">| User             |                  | User            |</span></span>
<span class="line"><span style="color:#abb2bf;">| +--------------+ |                  | +-------------+ |</span></span>
<span class="line"><span style="color:#abb2bf;">| | Profile      | |  +------------&gt;  | | Posts       | |</span></span>
<span class="line"><span style="color:#abb2bf;">| |              | |                  | |             | |</span></span>
<span class="line"><span style="color:#abb2bf;">| +--------------+ |                  | +-------------+ |</span></span>
<span class="line"><span style="color:#abb2bf;">+------------------+                  +-----------------+</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/user/johnny/profile                     /user/johnny/posts</span></span>
<span class="line"><span style="color:#24292e;">+------------------+                  +-----------------+</span></span>
<span class="line"><span style="color:#24292e;">| User             |                  | User            |</span></span>
<span class="line"><span style="color:#24292e;">| +--------------+ |                  | +-------------+ |</span></span>
<span class="line"><span style="color:#24292e;">| | Profile      | |  +------------&gt;  | | Posts       | |</span></span>
<span class="line"><span style="color:#24292e;">| |              | |                  | |             | |</span></span>
<span class="line"><span style="color:#24292e;">| +--------------+ |                  | +-------------+ |</span></span>
<span class="line"><span style="color:#24292e;">+------------------+                  +-----------------+</span></span></code></pre></div><p>通过 Vue Router，你可以使用嵌套路由配置来表达这种关系。</p><p>接着上节创建的 app ：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;app&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">router-view</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">router-view</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;app&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">router-view</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">router-view</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">User</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;&lt;div&gt;User {{ $route.params.id }}&lt;/div&gt;&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 这些都会传递给 \`createRouter\`</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">routes</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [{ </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/user/:id&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">component</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">User</span><span style="color:#ABB2BF;"> }]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">User</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  template: </span><span style="color:#032F62;">&#39;&lt;div&gt;User {{ $route.params.id }}&lt;/div&gt;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 这些都会传递给 \`createRouter\`</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">routes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [{ path: </span><span style="color:#032F62;">&#39;/user/:id&#39;</span><span style="color:#24292E;">, component: User }]</span></span></code></pre></div><p>这里的 <code>&lt;router-view&gt;</code> 是一个顶层的 <code>router-view</code>。它渲染顶层路由匹配的组件。同样地，一个被渲染的组件也可以包含自己嵌套的 <code>&lt;router-view&gt;</code>。例如，如果我们在 <code>User</code> 组件的模板内添加一个 <code>&lt;router-view&gt;</code>：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">User</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">\`</span></span>
<span class="line"><span style="color:#98C379;">    &lt;div class=&quot;user&quot;&gt;</span></span>
<span class="line"><span style="color:#98C379;">      &lt;h2&gt;User {{ $route.params.id }}&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#98C379;">      &lt;router-view&gt;&lt;/router-view&gt;</span></span>
<span class="line"><span style="color:#98C379;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#98C379;">  \`</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">User</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  template: </span><span style="color:#032F62;">\`</span></span>
<span class="line"><span style="color:#032F62;">    &lt;div class=&quot;user&quot;&gt;</span></span>
<span class="line"><span style="color:#032F62;">      &lt;h2&gt;User {{ $route.params.id }}&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#032F62;">      &lt;router-view&gt;&lt;/router-view&gt;</span></span>
<span class="line"><span style="color:#032F62;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#032F62;">  \`</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>要将组件渲染到这个嵌套的 <code>router-view</code> 中，我们需要在路由中配置 <code>children</code>：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">routes</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span></span>
<span class="line"><span style="color:#ABB2BF;">  {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/user/:id&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">component</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">User</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">children</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">      {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">// 当 /user/:id/profile 匹配成功</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">// UserProfile 将被渲染到 User 的 &lt;router-view&gt; 内部</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;profile&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">component</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">UserProfile</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      },</span></span>
<span class="line"><span style="color:#ABB2BF;">      {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">// 当 /user/:id/posts 匹配成功</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">// UserPosts 将被渲染到 User 的 &lt;router-view&gt; 内部</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;posts&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">component</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">UserPosts</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      },</span></span>
<span class="line"><span style="color:#ABB2BF;">    ],</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">routes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    path: </span><span style="color:#032F62;">&#39;/user/:id&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    component: User,</span></span>
<span class="line"><span style="color:#24292E;">    children: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 当 /user/:id/profile 匹配成功</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// UserProfile 将被渲染到 User 的 &lt;router-view&gt; 内部</span></span>
<span class="line"><span style="color:#24292E;">        path: </span><span style="color:#032F62;">&#39;profile&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        component: UserProfile,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 当 /user/:id/posts 匹配成功</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// UserPosts 将被渲染到 User 的 &lt;router-view&gt; 内部</span></span>
<span class="line"><span style="color:#24292E;">        path: </span><span style="color:#032F62;">&#39;posts&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        component: UserPosts,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><p><strong>注意，以 <code>/</code> 开头的嵌套路径将被视为根路径。这允许你利用组件嵌套，而不必使用嵌套的 URL。</strong></p><p>如你所见，<code>children</code> 配置只是另一个路由数组，就像 <code>routes</code> 本身一样。因此，你可以根据自己的需要，不断地嵌套视图。</p><p>此时，按照上面的配置，当你访问 <code>/user/eduardo</code> 时，在 <code>User</code> 的 <code>router-view</code> 里面什么都不会呈现，因为没有匹配到嵌套路由。也许你确实想在那里渲染一些东西。在这种情况下，你可以提供一个空的嵌套路径：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">routes</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span></span>
<span class="line"><span style="color:#ABB2BF;">  {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/user/:id&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">component</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">User</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">children</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// 当 /user/:id 匹配成功</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// UserHome 将被渲染到 User 的 &lt;router-view&gt; 内部</span></span>
<span class="line"><span style="color:#ABB2BF;">      { </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">component</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">UserHome</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// ...其他子路由</span></span>
<span class="line"><span style="color:#ABB2BF;">    ],</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">routes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    path: </span><span style="color:#032F62;">&#39;/user/:id&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    component: User,</span></span>
<span class="line"><span style="color:#24292E;">    children: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 当 /user/:id 匹配成功</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// UserHome 将被渲染到 User 的 &lt;router-view&gt; 内部</span></span>
<span class="line"><span style="color:#24292E;">      { path: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">, component: UserHome },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// ...其他子路由</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><p>这个例子的 demo 可以在<a href="https://codesandbox.io/s/nested-views-vue-router-4-examples-hl326?initialpath=%2Fusers%2Feduardo" target="_blank" rel="noreferrer">这里</a>找到。</p><h2 id="嵌套的命名路由" tabindex="-1">嵌套的命名路由 <a class="header-anchor" href="#嵌套的命名路由" aria-label="Permalink to &quot;嵌套的命名路由&quot;">​</a></h2><p>在处理<a href="./named-routes.html">命名路由</a>时，<strong>你通常会给子路由命名</strong>：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">routes</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span></span>
<span class="line"><span style="color:#ABB2BF;">  {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/user/:id&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">component</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">User</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 请注意，只有子路由具有名称</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">children</span><span style="color:#ABB2BF;">: [{ </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;user&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">component</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">UserHome</span><span style="color:#ABB2BF;"> }],</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">routes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    path: </span><span style="color:#032F62;">&#39;/user/:id&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    component: User,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 请注意，只有子路由具有名称</span></span>
<span class="line"><span style="color:#24292E;">    children: [{ path: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">, name: </span><span style="color:#032F62;">&#39;user&#39;</span><span style="color:#24292E;">, component: UserHome }],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><p>这将确保导航到 <code>/user/:id</code> 时始终显示嵌套路由。</p><p>在一些场景中，你可能希望导航到命名路由而不导航到嵌套路由。例如，你想导航 <code>/user/:id</code> 而不显示嵌套路由。那样的话，你还可以<strong>命名父路由</strong>，但请注意<strong>重新加载页面将始终显示嵌套的子路由</strong>，因为它被视为指向路径<code>/users/:id</code> 的导航，而不是命名路由：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">routes</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span></span>
<span class="line"><span style="color:#ABB2BF;">  {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/user/:id&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;user-parent&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">component</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">User</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">children</span><span style="color:#ABB2BF;">: [{ </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;user&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">component</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">UserHome</span><span style="color:#ABB2BF;"> }],</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">routes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    path: </span><span style="color:#032F62;">&#39;/user/:id&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;user-parent&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    component: User,</span></span>
<span class="line"><span style="color:#24292E;">    children: [{ path: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">, name: </span><span style="color:#032F62;">&#39;user&#39;</span><span style="color:#24292E;">, component: UserHome }],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div>`,21);function i(d,F,A,E,u,h){const n=c("VueSchoolLink");return p(),l("div",null,[y,o(n,{href:"https://vueschool.io/lessons/nested-routes",title:"Learn about nested routes"}),B])}const v=a(r,[["render",i]]);export{g as __pageData,v as default};
