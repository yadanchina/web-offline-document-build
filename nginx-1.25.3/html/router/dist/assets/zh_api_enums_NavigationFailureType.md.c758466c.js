import{_ as e,v as a,b as i,R as r}from"./chunks/framework.dd59a003.js";const b=JSON.parse('{"title":"枚举：NavigationFailureType","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"zh/api/enums/NavigationFailureType.md","filePath":"zh/api/enums/NavigationFailureType.md"}'),t={name:"zh/api/enums/NavigationFailureType.md"},n=r('<p><a href="./../">API 参考</a> / NavigationFailureType</p><h1 id="enumeration-navigationfailuretype" tabindex="-1">枚举：NavigationFailureType <a class="header-anchor" href="#enumeration-navigationfailuretype" aria-label="Permalink to &quot;枚举：NavigationFailureType %{#enumeration-navigationfailuretype}%&quot;">​</a></h1><p>为导航失败枚举所有可能的类型。可以传入 <a href="./../#isnavigationfailure">isNavigationFailure</a> 以检查特定的失败情况。</p><h2 id="Enumeration-Members" tabindex="-1">枚举成员 <a class="header-anchor" href="#Enumeration-Members" aria-label="Permalink to &quot;枚举成员 %{#Enumeration-Members}%&quot;">​</a></h2><h3 id="Enumeration-Members-aborted" tabindex="-1">aborted <a class="header-anchor" href="#Enumeration-Members-aborted" aria-label="Permalink to &quot;aborted %{#Enumeration-Members-aborted}%&quot;">​</a></h3><p>• <strong>aborted</strong> = <code>4</code></p><p>中断的导航是因为导航守卫返回 <code>false</code> 会调用了 <code>next(false)</code> 而导致失败的导航。</p><hr><h3 id="Enumeration-Members-cancelled" tabindex="-1">cancelled <a class="header-anchor" href="#Enumeration-Members-cancelled" aria-label="Permalink to &quot;cancelled %{#Enumeration-Members-cancelled}%&quot;">​</a></h3><p>• <strong>cancelled</strong> = <code>8</code></p><p>取消的导航是因为另一个更近的导航已经开始 (不需要完成) 而导致失败的导航。</p><hr><h3 id="Enumeration-Members-duplicated" tabindex="-1">duplicated <a class="header-anchor" href="#Enumeration-Members-duplicated" aria-label="Permalink to &quot;duplicated %{#Enumeration-Members-duplicated}%&quot;">​</a></h3><p>• <strong>duplicated</strong> = <code>16</code></p><p>重复的导航是因为其开始的时候已经处在相同的路径而导致失败的导航。</p>',15),o=[n];function d(l,s,u,c,p,m){return a(),i("div",null,o)}const f=e(t,[["render",d]]);export{b as __pageData,f as default};