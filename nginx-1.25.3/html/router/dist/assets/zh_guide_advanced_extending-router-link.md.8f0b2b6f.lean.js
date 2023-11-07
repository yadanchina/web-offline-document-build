import{_ as a,v as l,b as p,t as o,F as s,L as e,R as t,M as c}from"./chunks/framework.dd59a003.js";const v=JSON.parse('{"title":"扩展 RouterLink","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/advanced/extending-router-link.md","filePath":"zh/guide/advanced/extending-router-link.md"}'),r={name:"zh/guide/advanced/extending-router-link.md"},y=s("h1",{id:"扩展-RouterLink",tabindex:"-1"},[e("扩展 RouterLink "),s("a",{class:"header-anchor",href:"#扩展-RouterLink","aria-label":'Permalink to "扩展 RouterLink"'},"​")],-1),B=t(`<p>RouterLink 组件提供了足够的 <code>props</code> 来满足大多数基本应用程序的需求，但它并未尝试涵盖所有可能的用例，在某些高级情况下，你可能会发现自己使用了 <code>v-slot</code>。在大多数中型到大型应用程序中，值得创建一个（如果不是多个）自定义 RouterLink 组件，以在整个应用程序中重用它们。例如导航菜单中的链接，处理外部链接，添加 <code>inactive-class</code> 等。</p><p>让我们扩展 RouterLink 来处理外部链接，并在 <code>AppLink.vue</code> 文件中添加一个自定义的 <code>inactive-class</code>：</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">v-if</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;isExternalLink&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">v-bind</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;$attrs&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">:href</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;to&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">target</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;_blank&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">slot</span><span style="color:#ABB2BF;"> </span><span style="color:#FFFFFF;">/</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">router-link</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#D19A66;">v-else</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#D19A66;">v-bind</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;$props&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#D19A66;">custom</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#D19A66;">v-slot</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;{ isActive, href, navigate }&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">a</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#D19A66;">v-bind</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;$attrs&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#D19A66;">:href</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;href&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#D19A66;">@click</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;navigate&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#D19A66;">:class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;isActive ? activeClass : inactiveClass&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;</span><span style="color:#E06C75;">slot</span><span style="color:#ABB2BF;"> </span><span style="color:#FFFFFF;">/</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;/</span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">router-link</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">RouterLink</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;vue-router&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;AppLink&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">inheritAttrs</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">props</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 如果使用 TypeScript，请添加 @ts-ignore</span></span>
<span class="line"><span style="color:#ABB2BF;">    ...</span><span style="color:#E5C07B;">RouterLink</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">props</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">inactiveClass</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">String</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">computed</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">isExternalLink</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">typeof</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">to</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">===</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;string&#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">to</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">startsWith</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;http&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">a</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-if</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;isExternalLink&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-bind</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;$attrs&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:href</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;to&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">target</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;_blank&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">slot</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">/</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">a</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">router-link</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">v-else</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">v-bind</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;$props&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">custom</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">v-slot</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{ isActive, href, navigate }&quot;</span></span>
<span class="line"><span style="color:#24292E;">  &gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">a</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">v-bind</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;$attrs&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:href</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;href&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;navigate&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;isActive ? activeClass : inactiveClass&quot;</span></span>
<span class="line"><span style="color:#24292E;">    &gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">slot</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">/</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">a</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">router-link</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { RouterLink } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue-router&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;AppLink&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  inheritAttrs: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  props: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果使用 TypeScript，请添加 @ts-ignore</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">RouterLink.props,</span></span>
<span class="line"><span style="color:#24292E;">    inactiveClass: String,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  computed: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">isExternalLink</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">typeof</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.to </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.to.</span><span style="color:#6F42C1;">startsWith</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;http&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>如果你喜欢使用渲染函数或创建 <code>computed</code> 属性，你可以使用 <a href="./composition-api.html">Composition API</a> 中的 <code>useLink</code> ：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">RouterLink</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">useLink</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;vue-router&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;AppLink&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">props</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 如果使用 TypeScript，请添加 @ts-ignore</span></span>
<span class="line"><span style="color:#ABB2BF;">    ...</span><span style="color:#E5C07B;">RouterLink</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">props</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">inactiveClass</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">String</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">setup</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">props</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// \`props\` 包含 \`to\` 和任何其他可以传递给 &lt;router-link&gt; 的 prop</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> { </span><span style="color:#E5C07B;">navigate</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">href</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">route</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">isActive</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">isExactActive</span><span style="color:#ABB2BF;"> } </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">useLink</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">props</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// profit!</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">isExternalLink</span><span style="color:#ABB2BF;"> }</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { RouterLink, useLink } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue-router&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;AppLink&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  props: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果使用 TypeScript，请添加 @ts-ignore</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">RouterLink.props,</span></span>
<span class="line"><span style="color:#24292E;">    inactiveClass: String,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">(</span><span style="color:#E36209;">props</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// \`props\` 包含 \`to\` 和任何其他可以传递给 &lt;router-link&gt; 的 prop</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">navigate</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">href</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">route</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">isActive</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">isExactActive</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useLink</span><span style="color:#24292E;">(props)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// profit!</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> { isExternalLink }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>在实践中，你可能希望将你的 <code>AppLink</code> 组件用于应用程序的不同部分。例如，使用 <a href="https://tailwindcss.com" target="_blank" rel="noreferrer">Tailwind CSS</a>，你可以用所有的类创建一个 <code>NavLink.vue</code> 组件：</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">AppLink</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#D19A66;">v-bind</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;$attrs&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#D19A66;">active-class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;border-indigo-500 text-gray-900 focus:border-indigo-700&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#D19A66;">inactive-class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">slot</span><span style="color:#ABB2BF;"> </span><span style="color:#FFFFFF;">/</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">AppLink</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">AppLink</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">v-bind</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;$attrs&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">active-class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;border-indigo-500 text-gray-900 focus:border-indigo-700&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">inactive-class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300&quot;</span></span>
<span class="line"><span style="color:#24292E;">  &gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">slot</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">/</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#B31D28;font-style:italic;">AppLink</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,7);function i(A,F,E,u,C,d){const n=c("VueSchoolLink");return l(),p("div",null,[y,o(n,{href:"https://vueschool.io/lessons/extending-router-link-for-external-urls",title:"Learn how to extend router-link"}),B])}const k=a(r,[["render",i]]);export{v as __pageData,k as default};
