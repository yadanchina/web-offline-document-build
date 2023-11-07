import{_ as a,v as p,b as l,t as e,F as s,L as o,R as t,M as c}from"./chunks/framework.dd59a003.js";const C=JSON.parse('{"title":"Nested Routes","description":"","frontmatter":{},"headers":[],"relativePath":"guide/essentials/nested-routes.md","filePath":"guide/essentials/nested-routes.md"}'),r={name:"guide/essentials/nested-routes.md"},i=s("h1",{id:"Nested-Routes",tabindex:"-1"},[o("Nested Routes "),s("a",{class:"header-anchor",href:"#Nested-Routes","aria-label":'Permalink to "Nested Routes"'},"​")],-1),y=t(`<p>Some applications&#39; UIs are composed of components that are nested multiple levels deep. In this case, it is very common that the segments of a URL correspond to a certain structure of nested components, for example:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#abb2bf;">/user/johnny/profile                     /user/johnny/posts</span></span>
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
<span class="line"><span style="color:#24292e;">+------------------+                  +-----------------+</span></span></code></pre></div><p>With Vue Router, you can express this relationship using nested route configurations.</p><p>Given the app we created in the last chapter:</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;app&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">router-view</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">router-view</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;app&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">router-view</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">router-view</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">User</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;&lt;div&gt;User {{ $route.params.id }}&lt;/div&gt;&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// these are passed to \`createRouter\`</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">routes</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [{ </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/user/:id&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">component</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">User</span><span style="color:#ABB2BF;"> }]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">User</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  template: </span><span style="color:#032F62;">&#39;&lt;div&gt;User {{ $route.params.id }}&lt;/div&gt;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// these are passed to \`createRouter\`</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">routes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [{ path: </span><span style="color:#032F62;">&#39;/user/:id&#39;</span><span style="color:#24292E;">, component: User }]</span></span></code></pre></div><p>The <code>&lt;router-view&gt;</code> here is a top-level <code>router-view</code>. It renders the component matched by a top level route. Similarly, a rendered component can also contain its own, nested <code>&lt;router-view&gt;</code>. For example, if we add one inside the <code>User</code> component&#39;s template:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">User</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
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
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>To render components into this nested <code>router-view</code>, we need to use the <code>children</code> option in any of the routes:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">routes</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span></span>
<span class="line"><span style="color:#ABB2BF;">  {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/user/:id&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">component</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">User</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">children</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">      {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">// UserProfile will be rendered inside User&#39;s &lt;router-view&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">// when /user/:id/profile is matched</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;profile&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">component</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">UserProfile</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      },</span></span>
<span class="line"><span style="color:#ABB2BF;">      {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">// UserPosts will be rendered inside User&#39;s &lt;router-view&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">// when /user/:id/posts is matched</span></span>
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
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// UserProfile will be rendered inside User&#39;s &lt;router-view&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// when /user/:id/profile is matched</span></span>
<span class="line"><span style="color:#24292E;">        path: </span><span style="color:#032F62;">&#39;profile&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        component: UserProfile,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// UserPosts will be rendered inside User&#39;s &lt;router-view&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// when /user/:id/posts is matched</span></span>
<span class="line"><span style="color:#24292E;">        path: </span><span style="color:#032F62;">&#39;posts&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        component: UserPosts,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><p><strong>Note that nested paths that start with <code>/</code> will be treated as root paths. This allows you to leverage the component nesting without having to use a nested URL.</strong></p><p>As you can see, the <code>children</code> option is just another Array of routes like <code>routes</code> itself. Therefore, you can keep nesting views as much as you need.</p><p>At this point, with the above configuration, when you visit <code>/user/eduardo</code>, nothing will be rendered inside <code>User</code>&#39;s <code>router-view</code>, because no nested route is matched. Maybe you do want to render something there. In such case you can provide an empty nested path:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">routes</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span></span>
<span class="line"><span style="color:#ABB2BF;">  {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/user/:id&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">component</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">User</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">children</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// UserHome will be rendered inside User&#39;s &lt;router-view&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// when /user/:id is matched</span></span>
<span class="line"><span style="color:#ABB2BF;">      { </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">component</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">UserHome</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// ...other sub routes</span></span>
<span class="line"><span style="color:#ABB2BF;">    ],</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">routes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    path: </span><span style="color:#032F62;">&#39;/user/:id&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    component: User,</span></span>
<span class="line"><span style="color:#24292E;">    children: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// UserHome will be rendered inside User&#39;s &lt;router-view&gt;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// when /user/:id is matched</span></span>
<span class="line"><span style="color:#24292E;">      { path: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">, component: UserHome },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// ...other sub routes</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><p>A working demo of this example can be found <a href="https://codesandbox.io/s/nested-views-vue-router-4-examples-hl326?initialpath=%2Fusers%2Feduardo" target="_blank" rel="noreferrer">here</a>.</p><h2 id="Nested-Named-Routes" tabindex="-1">Nested Named Routes <a class="header-anchor" href="#Nested-Named-Routes" aria-label="Permalink to &quot;Nested Named Routes&quot;">​</a></h2><p>When dealing with <a href="./named-routes.html">Named Routes</a>, you usually <strong>name the children routes</strong>:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">routes</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span></span>
<span class="line"><span style="color:#ABB2BF;">  {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/user/:id&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">component</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">User</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// notice how only the child route has a name</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">children</span><span style="color:#ABB2BF;">: [{ </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;user&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">component</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">UserHome</span><span style="color:#ABB2BF;"> }],</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">routes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    path: </span><span style="color:#032F62;">&#39;/user/:id&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    component: User,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// notice how only the child route has a name</span></span>
<span class="line"><span style="color:#24292E;">    children: [{ path: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">, name: </span><span style="color:#032F62;">&#39;user&#39;</span><span style="color:#24292E;">, component: UserHome }],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><p>This will ensure navigating to <code>/user/:id</code> will always display the nested route.</p><p>In some scenarios, you may want to navigate to a named route without navigating to the nested route. For example, if you want to navigate to <code>/user/:id</code> without displaying the nested route. In that case, you can <strong>also</strong> name the parent route but note <strong>that reloading the page will always display the nested child</strong> as it&#39;s considered a navigation to the path <code>/users/:id</code> instead of the named route:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">routes</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span></span>
<span class="line"><span style="color:#ABB2BF;">  {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/user/:id&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;user-parent&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">component</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">User</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">children</span><span style="color:#ABB2BF;">: [{ </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;user&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">component</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">UserHome</span><span style="color:#ABB2BF;"> }],</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">routes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    path: </span><span style="color:#032F62;">&#39;/user/:id&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;user-parent&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    component: User,</span></span>
<span class="line"><span style="color:#24292E;">    children: [{ path: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">, name: </span><span style="color:#032F62;">&#39;user&#39;</span><span style="color:#24292E;">, component: UserHome }],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div>`,21);function B(d,h,u,F,A,E){const n=c("VueSchoolLink");return p(),l("div",null,[i,e(n,{href:"https://vueschool.io/lessons/nested-routes",title:"Learn about nested routes"}),y])}const m=a(r,[["render",B]]);export{C as __pageData,m as default};
