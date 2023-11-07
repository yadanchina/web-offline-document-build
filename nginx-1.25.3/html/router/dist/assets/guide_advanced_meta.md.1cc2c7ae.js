import{_ as n,v as l,b as o,t as e,F as s,L as p,R as t,M as c}from"./chunks/framework.dd59a003.js";const f=JSON.parse('{"title":"Route Meta Fields","description":"","frontmatter":{},"headers":[],"relativePath":"guide/advanced/meta.md","filePath":"guide/advanced/meta.md"}'),r={name:"guide/advanced/meta.md"},i=s("h1",{id:"Route-Meta-Fields",tabindex:"-1"},[p("Route Meta Fields "),s("a",{class:"header-anchor",href:"#Route-Meta-Fields","aria-label":'Permalink to "Route Meta Fields"'},"​")],-1),y=t(`<p>Sometimes, you might want to attach arbitrary information to routes like： transition names, or roles to control who can access the route, etc. This can be achieved through the <code>meta</code> property which accepts an object of properties and can be accessed on the route location and navigation guards. You can define <code>meta</code> properties like this:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">routes</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span></span>
<span class="line"><span style="color:#ABB2BF;">  {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/posts&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">component</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">PostsLayout</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">children</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">      {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;new&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">component</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">PostsNew</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">// only authenticated users can create posts</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">meta</span><span style="color:#ABB2BF;">: { </span><span style="color:#E06C75;">requiresAuth</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">      },</span></span>
<span class="line"><span style="color:#ABB2BF;">      {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;:id&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">component</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">PostsDetail</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">// anybody can read a post</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">meta</span><span style="color:#ABB2BF;">: { </span><span style="color:#E06C75;">requiresAuth</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">      },</span></span>
<span class="line"><span style="color:#ABB2BF;">    ],</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">routes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    path: </span><span style="color:#032F62;">&#39;/posts&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    component: PostsLayout,</span></span>
<span class="line"><span style="color:#24292E;">    children: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        path: </span><span style="color:#032F62;">&#39;new&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        component: PostsNew,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// only authenticated users can create posts</span></span>
<span class="line"><span style="color:#24292E;">        meta: { requiresAuth: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        path: </span><span style="color:#032F62;">&#39;:id&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        component: PostsDetail,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// anybody can read a post</span></span>
<span class="line"><span style="color:#24292E;">        meta: { requiresAuth: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><p>So how do we access this <code>meta</code> field?</p><p>First, each route object in the <code>routes</code> configuration is called a <strong>route record</strong>. Route records may be nested. Therefore when a route is matched, it can potentially match more than one route record.</p><p>For example, with the above route config, the URL <code>/posts/new</code> will match both the parent route record (<code>path: &#39;/posts&#39;</code>) and the child route record (<code>path: &#39;new&#39;</code>).</p><p>All route records matched by a route are exposed on the <code>$route</code> object (and also route objects in navigation guards) as the <code>$route.matched</code> Array. We could loop through that array to check all <code>meta</code> fields, but Vue Router also provides you a <code>$route.meta</code> that is a non-recursive merge of <strong>all <code>meta</code></strong> fields from parent to child. Meaning you can simply write</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E5C07B;">router</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">beforeEach</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;font-style:italic;">to</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">from</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// instead of having to check every route record with</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// to.matched.some(record =&gt; record.meta.requiresAuth)</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">to</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">meta</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">requiresAuth</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">!</span><span style="color:#E5C07B;">auth</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">isLoggedIn</span><span style="color:#ABB2BF;">()) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// this route requires auth, check if logged in</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// if not, redirect to login page.</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/login&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// save the location we were at to come back later</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">query</span><span style="color:#ABB2BF;">: { </span><span style="color:#E06C75;">redirect</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">to</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">fullPath</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">router.</span><span style="color:#6F42C1;">beforeEach</span><span style="color:#24292E;">((</span><span style="color:#E36209;">to</span><span style="color:#24292E;">, </span><span style="color:#E36209;">from</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// instead of having to check every route record with</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// to.matched.some(record =&gt; record.meta.requiresAuth)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (to.meta.requiresAuth </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!</span><span style="color:#24292E;">auth.</span><span style="color:#6F42C1;">isLoggedIn</span><span style="color:#24292E;">()) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// this route requires auth, check if logged in</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// if not, redirect to login page.</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      path: </span><span style="color:#032F62;">&#39;/login&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// save the location we were at to come back later</span></span>
<span class="line"><span style="color:#24292E;">      query: { redirect: to.fullPath },</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h2 id="TypeScript" tabindex="-1">TypeScript <a class="header-anchor" href="#TypeScript" aria-label="Permalink to &quot;TypeScript&quot;">​</a></h2><p>It is possible to type the meta field by extending the <code>RouteMeta</code> interface from <code>vue-router</code>:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// This can be directly added to any of your \`.ts\` files like \`router.ts\`</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// It can also be added to a \`.d.ts\` file. Make sure it&#39;s included in</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// project&#39;s tsconfig.json &quot;files&quot;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;vue-router&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// To ensure it is treated as a module, add at least one \`export\` statement</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">declare</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">module</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;vue-router&#39;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">interface</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">RouteMeta</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// is optional</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">isAdmin</span><span style="color:#C678DD;">?</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">boolean</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// must be declared by every route</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">requiresAuth</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">boolean</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// This can be directly added to any of your \`.ts\` files like \`router.ts\`</span></span>
<span class="line"><span style="color:#6A737D;">// It can also be added to a \`.d.ts\` file. Make sure it&#39;s included in</span></span>
<span class="line"><span style="color:#6A737D;">// project&#39;s tsconfig.json &quot;files&quot;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue-router&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// To ensure it is treated as a module, add at least one \`export\` statement</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">declare</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">module</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue-router&#39;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">RouteMeta</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// is optional</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">isAdmin</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">boolean</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// must be declared by every route</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">requiresAuth</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">boolean</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,10);function B(d,u,A,h,F,E){const a=c("VueSchoolLink");return l(),o("div",null,[i,e(a,{href:"https://vueschool.io/lessons/route-meta-fields",title:"Learn how to use route meta fields"}),y])}const C=n(r,[["render",B]]);export{f as __pageData,C as default};
