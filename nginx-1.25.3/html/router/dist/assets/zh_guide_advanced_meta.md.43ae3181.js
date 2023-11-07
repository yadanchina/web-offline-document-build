import{_ as a,v as p,b as l,t as o,F as s,L as e,R as t,M as c}from"./chunks/framework.dd59a003.js";const m=JSON.parse('{"title":"路由元信息","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/advanced/meta.md","filePath":"zh/guide/advanced/meta.md"}'),r={name:"zh/guide/advanced/meta.md"},y=s("h1",{id:"路由元信息",tabindex:"-1"},[e("路由元信息 "),s("a",{class:"header-anchor",href:"#路由元信息","aria-label":'Permalink to "路由元信息"'},"​")],-1),B=t(`<p>有时，你可能希望将任意信息附加到路由上，如过渡名称、谁可以访问路由等。这些事情可以通过接收属性对象的<code>meta</code>属性来实现，并且它可以在路由地址和导航守卫上都被访问到。定义路由的时候你可以这样配置 <code>meta</code> 字段：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">routes</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span></span>
<span class="line"><span style="color:#ABB2BF;">  {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/posts&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">component</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">PostsLayout</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">children</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">      {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;new&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">component</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">PostsNew</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">// 只有经过身份验证的用户才能创建帖子</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">meta</span><span style="color:#ABB2BF;">: { </span><span style="color:#E06C75;">requiresAuth</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;"> }</span></span>
<span class="line"><span style="color:#ABB2BF;">      },</span></span>
<span class="line"><span style="color:#ABB2BF;">      {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;:id&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">component</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">PostsDetail</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">// 任何人都可以阅读文章</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">meta</span><span style="color:#ABB2BF;">: { </span><span style="color:#E06C75;">requiresAuth</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;"> }</span></span>
<span class="line"><span style="color:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;">    ]</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">routes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    path: </span><span style="color:#032F62;">&#39;/posts&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    component: PostsLayout,</span></span>
<span class="line"><span style="color:#24292E;">    children: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        path: </span><span style="color:#032F62;">&#39;new&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        component: PostsNew,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 只有经过身份验证的用户才能创建帖子</span></span>
<span class="line"><span style="color:#24292E;">        meta: { requiresAuth: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        path: </span><span style="color:#032F62;">&#39;:id&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        component: PostsDetail</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 任何人都可以阅读文章</span></span>
<span class="line"><span style="color:#24292E;">        meta: { requiresAuth: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><p>那么如何访问这个 <code>meta</code> 字段呢？</p><p>首先，我们称呼 <code>routes</code> 配置中的每个路由对象为 <strong>路由记录</strong>。路由记录可以是嵌套的，因此，当一个路由匹配成功后，它可能匹配多个路由记录。</p><p>例如，根据上面的路由配置，<code>/posts/new</code> 这个 URL 将会匹配父路由记录 (<code>path: &#39;/posts&#39;</code>) 以及子路由记录 (<code>path: &#39;new&#39;</code>)。</p><p>一个路由匹配到的所有路由记录会暴露为 <code>$route</code> 对象(还有在导航守卫中的路由对象)的<code>$route.matched</code> 数组。我们需要遍历这个数组来检查路由记录中的 <code>meta</code> 字段，但是 Vue Router 还为你提供了一个 <code>$route.meta</code> 方法，它是一个非递归合并<strong>所有 <code>meta</code></strong> 字段的（从父字段到子字段）的方法。这意味着你可以简单地写</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E5C07B;">router</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">beforeEach</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;font-style:italic;">to</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">from</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 而不是去检查每条路由记录</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// to.matched.some(record =&gt; record.meta.requiresAuth)</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">to</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">meta</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">requiresAuth</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">!</span><span style="color:#E5C07B;">auth</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">isLoggedIn</span><span style="color:#ABB2BF;">()) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 此路由需要授权，请检查是否已登录</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 如果没有，则重定向到登录页面</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/login&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// 保存我们所在的位置，以便以后再来</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">query</span><span style="color:#ABB2BF;">: { </span><span style="color:#E06C75;">redirect</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">to</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">fullPath</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">router.</span><span style="color:#6F42C1;">beforeEach</span><span style="color:#24292E;">((</span><span style="color:#E36209;">to</span><span style="color:#24292E;">, </span><span style="color:#E36209;">from</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 而不是去检查每条路由记录</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// to.matched.some(record =&gt; record.meta.requiresAuth)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (to.meta.requiresAuth </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!</span><span style="color:#24292E;">auth.</span><span style="color:#6F42C1;">isLoggedIn</span><span style="color:#24292E;">()) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 此路由需要授权，请检查是否已登录</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果没有，则重定向到登录页面</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      path: </span><span style="color:#032F62;">&#39;/login&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 保存我们所在的位置，以便以后再来</span></span>
<span class="line"><span style="color:#24292E;">      query: { redirect: to.fullPath },</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h2 id="TypeScript" tabindex="-1">TypeScript <a class="header-anchor" href="#TypeScript" aria-label="Permalink to &quot;TypeScript&quot;">​</a></h2><p>可以通过扩展 <code>RouteMeta</code> 接口来输入 meta 字段：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// typings.d.ts or router.ts</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;vue-router&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">declare</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">module</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;vue-router&#39;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">interface</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">RouteMeta</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 是可选的</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">isAdmin</span><span style="color:#C678DD;">?</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">boolean</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 每个路由都必须声明</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">requiresAuth</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">boolean</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// typings.d.ts or router.ts</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue-router&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">declare</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">module</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue-router&#39;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">RouteMeta</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 是可选的</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">isAdmin</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">boolean</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 每个路由都必须声明</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">requiresAuth</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">boolean</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,10);function i(A,E,d,F,u,h){const n=c("VueSchoolLink");return p(),l("div",null,[y,o(n,{href:"https://vueschool.io/lessons/route-meta-fields",title:"Learn how to use route meta fields"}),B])}const D=a(r,[["render",i]]);export{m as __pageData,D as default};
