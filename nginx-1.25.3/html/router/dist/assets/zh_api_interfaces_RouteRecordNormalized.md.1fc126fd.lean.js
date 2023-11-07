import{_ as e,v as o,b as r,R as a}from"./chunks/framework.dd59a003.js";const f=JSON.parse('{"title":"接口：RouteRecordNormalized","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"zh/api/interfaces/RouteRecordNormalized.md","filePath":"zh/api/interfaces/RouteRecordNormalized.md"}'),t={name:"zh/api/interfaces/RouteRecordNormalized.md"},d=a('<p><a href="./../">API 参考</a> / RouteRecordNormalized</p><h1 id="接口-RouteRecordNormalized" tabindex="-1">接口：RouteRecordNormalized <a class="header-anchor" href="#接口-RouteRecordNormalized" aria-label="Permalink to &quot;接口：RouteRecordNormalized&quot;">​</a></h1><p>一条<a href="./../#routerecord">路由记录</a>的规范化版本。</p><h2 id="Hierarchy" tabindex="-1">继承关系 <a class="header-anchor" href="#Hierarchy" aria-label="Permalink to &quot;继承关系 %{#Hierarchy}%&quot;">​</a></h2><ul><li><p><strong><code>RouteRecordNormalized</code></strong></p><p>↳ <a href="./RouteLocationMatched.html"><code>RouteLocationMatched</code></a></p></li></ul><h2 id="Properties" tabindex="-1">属性 <a class="header-anchor" href="#Properties" aria-label="Permalink to &quot;属性 %{#Properties}%&quot;">​</a></h2><h3 id="Properties-aliasOf" tabindex="-1">aliasOf <a class="header-anchor" href="#Properties-aliasOf" aria-label="Permalink to &quot;aliasOf %{#Properties-aliasOf}%&quot;">​</a></h3><p>• <strong>aliasOf</strong>: <code>undefined</code> | <a href="./RouteRecordNormalized.html"><code>RouteRecordNormalized</code></a></p><p>定义了是否这条记录是另一条的别名。如果记录是原始记录，则该属性为 <code>undefined</code>。</p><hr><h3 id="Properties-beforeEnter" tabindex="-1">beforeEnter <a class="header-anchor" href="#Properties-beforeEnter" aria-label="Permalink to &quot;beforeEnter %{#Properties-beforeEnter}%&quot;">​</a></h3><p>• <strong>beforeEnter</strong>: <code>undefined</code> | <a href="./NavigationGuardWithThis.html"><code>NavigationGuardWithThis</code></a>&lt;<code>undefined</code>&gt; | <a href="./NavigationGuardWithThis.html"><code>NavigationGuardWithThis</code></a>&lt;<code>undefined</code>&gt;[]</p><p>被注册的 beforeEnter 守卫</p><hr><h3 id="Properties-children" tabindex="-1">children <a class="header-anchor" href="#Properties-children" aria-label="Permalink to &quot;children %{#Properties-children}%&quot;">​</a></h3><p>• <strong>children</strong>: <a href="./../#routerecordraw"><code>RouteRecordRaw</code></a>[]</p><p>嵌套的路由记录。</p><hr><h3 id="Properties-components" tabindex="-1">components <a class="header-anchor" href="#Properties-components" aria-label="Permalink to &quot;components %{#Properties-components}%&quot;">​</a></h3><p>• <strong>components</strong>: <code>undefined</code> | <code>null</code> | <code>Record</code>&lt;<code>string</code>, <code>RawRouteComponent</code>&gt;</p><p>{@inheritDoc RouteRecordMultipleViews.components}</p><hr><h3 id="Properties-instances" tabindex="-1">instances <a class="header-anchor" href="#Properties-instances" aria-label="Permalink to &quot;instances %{#Properties-instances}%&quot;">​</a></h3><p>• <strong>instances</strong>: <code>Record</code>&lt;<code>string</code>, <code>undefined</code> | <code>null</code> | <code>ComponentPublicInstance</code>&lt;{}, {}, {}, {}, {}, {}, {}, {}, <code>false</code>, <code>ComponentOptionsBase</code>&lt;<code>any</code>, <code>any</code>, <code>any</code>, <code>any</code>, <code>any</code>, <code>any</code>, <code>any</code>, <code>any</code>, <code>any</code>, {}, {}, <code>string</code>&gt;, {}&gt;&gt;</p><p>Mounted route component instances Having the instances on the record mean beforeRouteUpdate and beforeRouteLeave guards can only be invoked with the latest mounted app instance if there are multiple application instances rendering the same view, basically duplicating the content on the page, which shouldn&#39;t happen in practice. It will work if multiple apps are rendering different named views.</p><hr><h3 id="Properties-meta" tabindex="-1">meta <a class="header-anchor" href="#Properties-meta" aria-label="Permalink to &quot;meta %{#Properties-meta}%&quot;">​</a></h3><p>• <strong>meta</strong>: <a href="./RouteMeta.html"><code>RouteMeta</code></a></p><p>{@inheritDoc _RouteRecordBase.meta}</p><hr><h3 id="Properties-name" tabindex="-1">name <a class="header-anchor" href="#Properties-name" aria-label="Permalink to &quot;name %{#Properties-name}%&quot;">​</a></h3><p>• <strong>name</strong>: <code>undefined</code> | <a href="./../#routerecordname"><code>RouteRecordName</code></a></p><p>{@inheritDoc _RouteRecordBase.name}</p><hr><h3 id="Properties-path" tabindex="-1">path <a class="header-anchor" href="#Properties-path" aria-label="Permalink to &quot;path %{#Properties-path}%&quot;">​</a></h3><p>• <strong>path</strong>: <code>string</code></p><p>{@inheritDoc _RouteRecordBase.path}</p><hr><h3 id="Properties-props" tabindex="-1">props <a class="header-anchor" href="#Properties-props" aria-label="Permalink to &quot;props %{#Properties-props}%&quot;">​</a></h3><p>• <strong>props</strong>: <code>Record</code>&lt;<code>string</code>, <code>_RouteRecordProps</code>&gt;</p><p>{@inheritDoc RouteRecordMultipleViews.props}</p><hr><h3 id="Properties-redirect" tabindex="-1">redirect <a class="header-anchor" href="#Properties-redirect" aria-label="Permalink to &quot;redirect %{#Properties-redirect}%&quot;">​</a></h3><p>• <strong>redirect</strong>: <code>undefined</code> | <code>RouteRecordRedirectOption</code></p><p>{@inheritDoc _RouteRecordBase.redirect}</p>',45),i=[d];function n(c,s,p,h,l,u){return o(),r("div",null,i)}const R=e(t,[["render",n]]);export{f as __pageData,R as default};
