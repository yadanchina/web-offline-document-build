import{_ as a,v as o,b as l,t as p,F as s,L as t,R as e,M as r}from"./chunks/framework.dd59a003.js";const g=JSON.parse('{"title":"Transitions","description":"","frontmatter":{},"headers":[],"relativePath":"guide/advanced/transitions.md","filePath":"guide/advanced/transitions.md"}'),c={name:"guide/advanced/transitions.md"},i=s("h1",{id:"Transitions",tabindex:"-1"},[t("Transitions "),s("a",{class:"header-anchor",href:"#Transitions","aria-label":'Permalink to "Transitions"'},"​")],-1),y=e(`<p>In order to use transitions on your route components and animate navigations, you need to use the v-slot API:</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">router-view</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">v-slot</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;{ Component }&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">transition</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">name</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;fade&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">component</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">:is</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;Component&quot;</span><span style="color:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">transition</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">router-view</span><span style="color:#ABB2BF;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">router-view</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-slot</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{ Component }&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">transition</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;fade&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">component</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:is</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;Component&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#B31D28;font-style:italic;">transition</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">router-view</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p><a href="https://v3.vuejs.org/guide/transitions-enterleave.html" target="_blank" rel="noreferrer">All transition APIs</a> work the same here.</p><h2 id="Per-Route-Transition" tabindex="-1">Per-Route Transition <a class="header-anchor" href="#Per-Route-Transition" aria-label="Permalink to &quot;Per-Route Transition&quot;">​</a></h2><p>The above usage will apply the same transition for all routes. If you want each route&#39;s component to have different transitions, you can instead combine <a href="./meta.html">meta fields</a> and a dynamic <code>name</code> on <code>&lt;transition&gt;</code>:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">routes</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span></span>
<span class="line"><span style="color:#ABB2BF;">  {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/custom-transition&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">component</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">PanelLeft</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">meta</span><span style="color:#ABB2BF;">: { </span><span style="color:#E06C75;">transition</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;slide-left&#39;</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">  {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/other-transition&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">component</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">PanelRight</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">meta</span><span style="color:#ABB2BF;">: { </span><span style="color:#E06C75;">transition</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;slide-right&#39;</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">routes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    path: </span><span style="color:#032F62;">&#39;/custom-transition&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    component: PanelLeft,</span></span>
<span class="line"><span style="color:#24292E;">    meta: { transition: </span><span style="color:#032F62;">&#39;slide-left&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    path: </span><span style="color:#032F62;">&#39;/other-transition&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    component: PanelRight,</span></span>
<span class="line"><span style="color:#24292E;">    meta: { transition: </span><span style="color:#032F62;">&#39;slide-right&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">router-view</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">v-slot</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;{ Component, route }&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">&lt;!-- Use any custom transition and  to \`fade\` --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">transition</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">:name</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;route.meta.transition || &#39;fade&#39;&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">component</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">:is</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;Component&quot;</span><span style="color:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">transition</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">router-view</span><span style="color:#ABB2BF;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">router-view</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-slot</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{ Component, route }&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">&lt;!-- Use any custom transition and  to \`fade\` --&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">transition</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;route.meta.transition || &#39;fade&#39;&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">component</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:is</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;Component&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#B31D28;font-style:italic;">transition</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">router-view</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="Route-Based-Dynamic-Transition" tabindex="-1">Route-Based Dynamic Transition <a class="header-anchor" href="#Route-Based-Dynamic-Transition" aria-label="Permalink to &quot;Route-Based Dynamic Transition&quot;">​</a></h2><p>It is also possible to determine the transition to use dynamically based on the relationship between the target route and current route. Using a very similar snippet to the one just before:</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#7F848E;font-style:italic;">&lt;!-- use a dynamic transition name --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">router-view</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">v-slot</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;{ Component, route }&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">transition</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">:name</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;route.meta.transition&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">component</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">:is</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;Component&quot;</span><span style="color:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">transition</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">router-view</span><span style="color:#ABB2BF;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- use a dynamic transition name --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">router-view</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-slot</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{ Component, route }&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">transition</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;route.meta.transition&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">component</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:is</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;Component&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#B31D28;font-style:italic;">transition</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">router-view</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>We can add an <a href="./navigation-guards.html#global-after-hooks">after navigation hook</a> to dynamically add information to the <code>meta</code> field based on the depth of the route</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E5C07B;">router</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">afterEach</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;font-style:italic;">to</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">from</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">toDepth</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">to</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">path</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">split</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;/&#39;</span><span style="color:#ABB2BF;">).</span><span style="color:#E06C75;">length</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">fromDepth</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">from</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">path</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">split</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;/&#39;</span><span style="color:#ABB2BF;">).</span><span style="color:#E06C75;">length</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">to</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">meta</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">transition</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">toDepth</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">fromDepth</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">?</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;slide-right&#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">:</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;slide-left&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">router.</span><span style="color:#6F42C1;">afterEach</span><span style="color:#24292E;">((</span><span style="color:#E36209;">to</span><span style="color:#24292E;">, </span><span style="color:#E36209;">from</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">toDepth</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> to.path.</span><span style="color:#6F42C1;">split</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/&#39;</span><span style="color:#24292E;">).</span><span style="color:#005CC5;">length</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">fromDepth</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> from.path.</span><span style="color:#6F42C1;">split</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/&#39;</span><span style="color:#24292E;">).</span><span style="color:#005CC5;">length</span></span>
<span class="line"><span style="color:#24292E;">  to.meta.transition </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> toDepth </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> fromDepth </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;slide-right&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;slide-left&#39;</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h2 id="Forcing-a-transition-between-reused-views" tabindex="-1">Forcing a transition between reused views <a class="header-anchor" href="#Forcing-a-transition-between-reused-views" aria-label="Permalink to &quot;Forcing a transition between reused views&quot;">​</a></h2><p>Vue might automatically reuse components that look alike, avoiding any transition. Fortunately, it is possible <a href="https://v3.vuejs.org/api/special-attributes.html#key" target="_blank" rel="noreferrer">to add a <code>key</code> attribute</a> to force transitions. This also allows you to trigger transitions while staying on the same route with different params:</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">router-view</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">v-slot</span><span style="color:#ABB2BF;">=</span><span style="color:#ABB2BF;">&quot;</span><span style="color:#ABB2BF;">{ </span><span style="color:#E06C75;">Component</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">route</span><span style="color:#ABB2BF;"> }</span><span style="color:#ABB2BF;">&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;transition name=&quot;fade&quot;&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;component :is=&quot;Component&quot; :key=&quot;route.path&quot; /&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/transition&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">router-view</span><span style="color:#ABB2BF;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">router-view</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-slot</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">{ Component, route }</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;transition name=&quot;fade&quot;&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;component :is=&quot;Component&quot; :key=&quot;route.path&quot; /&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/transition&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">router-view</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,15);function B(u,F,d,A,E,h){const n=r("VueSchoolLink");return o(),l("div",null,[i,p(n,{href:"https://vueschool.io/lessons/route-transitions",title:"Learn about route transitions"}),y])}const m=a(c,[["render",B]]);export{g as __pageData,m as default};
