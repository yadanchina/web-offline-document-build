import{_ as n,v as e,b as o,t as l,F as s,L as p,R as t,M as r}from"./chunks/framework.dd59a003.js";const A=JSON.parse('{"title":"Waiting for the result of a Navigation","description":"","frontmatter":{},"headers":[],"relativePath":"guide/advanced/navigation-failures.md","filePath":"guide/advanced/navigation-failures.md"}'),i={name:"guide/advanced/navigation-failures.md"},c=s("h1",{id:"Waiting-for-the-result-of-a-Navigation",tabindex:"-1"},[p("Waiting for the result of a Navigation "),s("a",{class:"header-anchor",href:"#Waiting-for-the-result-of-a-Navigation","aria-label":'Permalink to "Waiting for the result of a Navigation"'},"​")],-1),y=t(`<p>When using <code>router-link</code>, Vue Router calls <code>router.push</code> to trigger a navigation. While the expected behavior for most links is to navigate a user to a new page, there are a few situations where users will remain on the same page:</p><ul><li>Users are already on the page that they are trying to navigate to.</li><li>A <a href="./navigation-guards.html">navigation guard</a> aborts the navigation by doing <code>return false</code>.</li><li>A new navigation guard takes place while the previous one not finished.</li><li>A <a href="./navigation-guards.html">navigation guard</a> redirects somewhere else by returning a new location (e.g. <code>return &#39;/login&#39;</code>).</li><li>A <a href="./navigation-guards.html">navigation guard</a> throws an <code>Error</code>.</li></ul><p>If we want to do something after a navigation is finished, we need a way to wait after calling <code>router.push</code>. Imagine we have a mobile menu that allows us to go to different pages and we only want to hide the menu once we have navigated to the new page, we might want to do something like this:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E5C07B;">router</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">push</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;/my-profile&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">isMenuOpen</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">false</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">router.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/my-profile&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#005CC5;">this</span><span style="color:#24292E;">.isMenuOpen </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span></span></code></pre></div><p>But this will close the menu right away because <strong>navigations are asynchronous</strong>, we need to <code>await</code> the promise returned by <code>router.push</code>:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">await</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">router</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">push</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;/my-profile&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">isMenuOpen</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">false</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> router.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/my-profile&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#005CC5;">this</span><span style="color:#24292E;">.isMenuOpen </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span></span></code></pre></div><p>Now the menu will close once the navigation is finished but it will also close if the navigation was prevented. We need a way to detect if we actually changed the page we are on or not.</p><h2 id="Detecting-Navigation-Failures" tabindex="-1">Detecting Navigation Failures <a class="header-anchor" href="#Detecting-Navigation-Failures" aria-label="Permalink to &quot;Detecting Navigation Failures&quot;">​</a></h2><p>If a navigation is prevented, resulting in the user staying on the same page, the resolved value of the <code>Promise</code> returned by <code>router.push</code> will be a <em>Navigation Failure</em>. Otherwise, it will be a <em>falsy</em> value (usually <code>undefined</code>). This allows us to differentiate the case where we navigated away from where we are or not:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">navigationResult</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">await</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">router</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">push</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;/my-profile&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">navigationResult</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// navigation prevented</span></span>
<span class="line"><span style="color:#ABB2BF;">} </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// navigation succeeded (this includes the case of a redirection)</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">isMenuOpen</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">false</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">navigationResult</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> router.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/my-profile&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (navigationResult) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// navigation prevented</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// navigation succeeded (this includes the case of a redirection)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.isMenuOpen </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p><em>Navigation Failures</em> are <code>Error</code> instances with a few extra properties that gives us enough information to know what navigation was prevented and why. To check the nature of a navigation result, use the <code>isNavigationFailure</code> function:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">NavigationFailureType</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">isNavigationFailure</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;vue-router&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// trying to leave the editing page of an article without saving</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">failure</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">await</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">router</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">push</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;/articles/2&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#61AFEF;">isNavigationFailure</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">failure</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">NavigationFailureType</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">aborted</span><span style="color:#ABB2BF;">)) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// show a small notification to the user</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">showToast</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;You have unsaved changes, discard and leave anyway?&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { NavigationFailureType, isNavigationFailure } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue-router&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// trying to leave the editing page of an article without saving</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">failure</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> router.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/articles/2&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#6F42C1;">isNavigationFailure</span><span style="color:#24292E;">(failure, NavigationFailureType.aborted)) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// show a small notification to the user</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">showToast</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;You have unsaved changes, discard and leave anyway?&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If you omit the second parameter: <code>isNavigationFailure(failure)</code>, it will only check if <code>failure</code> is a <em>Navigation Failure</em>.</p></div><h2 id="Global-navigation-failures" tabindex="-1">Global navigation failures <a class="header-anchor" href="#Global-navigation-failures" aria-label="Permalink to &quot;Global navigation failures&quot;">​</a></h2><p>You can detect global navigation failures globally by using the <a href="./navigation-guards.html#global-after-hooks"><code>router.afterEach()</code> navigation guard</a>:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E5C07B;">router</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">afterEach</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;font-style:italic;">to</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">from</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">failure</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">failure</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">sendToAnalytics</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">to</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">failure</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">router.</span><span style="color:#6F42C1;">afterEach</span><span style="color:#24292E;">((</span><span style="color:#E36209;">to</span><span style="color:#24292E;">, </span><span style="color:#E36209;">from</span><span style="color:#24292E;">, </span><span style="color:#E36209;">failure</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (failure) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">sendToAnalytics</span><span style="color:#24292E;">(to, from failure)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h2 id="Differentiating-Navigation-Failures" tabindex="-1">Differentiating Navigation Failures <a class="header-anchor" href="#Differentiating-Navigation-Failures" aria-label="Permalink to &quot;Differentiating Navigation Failures&quot;">​</a></h2><p>As we said at the beginning, there are different situations aborting a navigation, all of them resulting in different <em>Navigation Failures</em>. They can be differentiated using the <code>isNavigationFailure</code> and <code>NavigationFailureType</code>. There are three different types:</p><ul><li><code>aborted</code>: <code>false</code> was returned inside of a navigation guard to the navigation.</li><li><code>cancelled</code>: A new navigation took place before the current navigation could finish. e.g. <code>router.push</code> was called while waiting inside of a navigation guard.</li><li><code>duplicated</code>: The navigation was prevented because we are already at the target location.</li></ul><h2 id="Navigation-Failures-s-properties" tabindex="-1"><em>Navigation Failures</em>&#39;s properties <a class="header-anchor" href="#Navigation-Failures-s-properties" aria-label="Permalink to &quot;_Navigation Failures_&#39;s properties&quot;">​</a></h2><p>All navigation failures expose <code>to</code> and <code>from</code> properties to reflect the current location as well as the target location for the navigation that failed:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// trying to access the admin page</span></span>
<span class="line"><span style="color:#E5C07B;">router</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">push</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;/admin&#39;</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">then</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">failure</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#61AFEF;">isNavigationFailure</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">failure</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">NavigationFailureType</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">aborted</span><span style="color:#ABB2BF;">)) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">failure</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">to</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">// &#39;/admin&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">failure</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">from</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">// &#39;/&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// trying to access the admin page</span></span>
<span class="line"><span style="color:#24292E;">router.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/admin&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#E36209;">failure</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#6F42C1;">isNavigationFailure</span><span style="color:#24292E;">(failure, NavigationFailureType.aborted)) {</span></span>
<span class="line"><span style="color:#24292E;">    failure.to.path </span><span style="color:#6A737D;">// &#39;/admin&#39;</span></span>
<span class="line"><span style="color:#24292E;">    failure.from.path </span><span style="color:#6A737D;">// &#39;/&#39;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><p>In all cases, <code>to</code> and <code>from</code> are normalized route locations.</p><h2 id="Detecting-Redirections" tabindex="-1">Detecting Redirections <a class="header-anchor" href="#Detecting-Redirections" aria-label="Permalink to &quot;Detecting Redirections&quot;">​</a></h2><p>When returning a new location inside of a Navigation Guard, we are triggering a new navigation that overrides the ongoing one. Differently from other return values, a redirection doesn&#39;t prevent a navigation, <strong>it creates a new one</strong>. It is therefore checked differently, by reading the <code>redirectedFrom</code> property in a Route Location:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">await</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">router</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">push</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;/my-profile&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">router</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">currentRoute</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">value</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">redirectedFrom</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// redirectedFrom is resolved route location like to and from in navigation guards</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> router.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/my-profile&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (router.currentRoute.value.redirectedFrom) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// redirectedFrom is resolved route location like to and from in navigation guards</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,26);function B(d,u,g,h,F,v){const a=r("VueSchoolLink");return e(),o("div",null,[c,l(a,{href:"https://vueschool.io/lessons/vue-router-4-detecting-navigation-failures",title:"Learn how to detect navigation failures"}),y])}const E=n(i,[["render",B]]);export{A as __pageData,E as default};