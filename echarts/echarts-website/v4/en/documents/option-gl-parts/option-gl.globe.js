window.__EC_DOC_option_gl_globe = {
  "show": {
    "desc": "<p>Whether to show the globe component.</p>\n"
  },
  "zlevel": {
    "desc": "<p>The layer in which the component is located.</p>\n<p><code class=\"codespan\">zlevel</code> is used to make layers with Canvas. Graphical elements with different <code class=\"codespan\">zlevel</code> values will be placed in different Canvases, which is a common optimization technique. We can put those frequently changed elements (like those with animations) to a separate <code class=\"codespan\">zlevel</code>. Notice that too many Canvases will increase memory cost, and should be used carefully on mobile phones to avoid the crash.</p>\n<p>Canvases with bigger <code class=\"codespan\">zlevel</code> will be placed on Canvases with smaller <code class=\"codespan\">zlevel</code>.</p>\n<p><strong>Note:</strong> The layers of the components in echarts-gl need to be separated from the layers of the components in echarts. The same <code class=\"codespan\">zlevel</code> cannot be used for both WebGL and Canvas drawing at the same time.</p>\n"
  },
  "left": {
    "desc": "<p>Distance between  component and the left side of the container.</p>\n<p><code class=\"codespan\">left</code> value can be instant pixel value like <code class=\"codespan\">20</code>; it can also be a percentage value relative to container width like <code class=\"codespan\">&#39;20%&#39;</code>; and it can also be <code class=\"codespan\">&#39;left&#39;</code>, <code class=\"codespan\">&#39;center&#39;</code>, or <code class=\"codespan\">&#39;right&#39;</code>.</p>\n<p>If the <code class=\"codespan\">left</code> value is set to be <code class=\"codespan\">&#39;left&#39;</code>, <code class=\"codespan\">&#39;center&#39;</code>, or <code class=\"codespan\">&#39;right&#39;</code>, then the component will be aligned automatically based on position.</p>\n"
  },
  "top": {
    "desc": "<p>Distance between  component and the top side of the container.</p>\n<p><code class=\"codespan\">top</code> value can be instant pixel value like <code class=\"codespan\">20</code>; it can also be a percentage value relative to container width like <code class=\"codespan\">&#39;20%&#39;</code>; and it can also be <code class=\"codespan\">&#39;top&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, or <code class=\"codespan\">&#39;bottom&#39;</code>.</p>\n<p>If the <code class=\"codespan\">left</code> value is set to be <code class=\"codespan\">&#39;top&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, or <code class=\"codespan\">&#39;bottom&#39;</code>, then the component will be aligned automatically based on position.</p>\n"
  },
  "right": {
    "desc": "<p>Distance between  component and the right side of the container.</p>\n<p><code class=\"codespan\">right</code> value can be instant pixel value like <code class=\"codespan\">20</code>; it can also be a percentage value relative to container width like <code class=\"codespan\">&#39;20%&#39;</code>.</p>\n<p> Adaptive by default.</p>\n"
  },
  "bottom": {
    "desc": "<p>Distance between  component and the bottom side of the container.</p>\n<p><code class=\"codespan\">bottom</code> value can be instant pixel value like <code class=\"codespan\">20</code>; it can also be a percentage value relative to container width like <code class=\"codespan\">&#39;20%&#39;</code>.</p>\n<p> Adaptive by default.</p>\n"
  },
  "width": {
    "desc": "<p> The width of the view of the component.</p>\n"
  },
  "height": {
    "desc": "<p> The height of the view of the component.</p>\n"
  },
  "globeRadius": {
    "desc": "<p>The radius of the globe. The unit is relative to the three-dimensional space, related to <a href=\"#globe.viewControl.distance\">viewControl.distance</a>.</p>\n"
  },
  "globeOuterRadius": {
    "desc": "<p>The outer radius of the globe. This area between <code class=\"codespan\">globeRadius</code> and <code class=\"codespan\">globeOuterRadius</code> will be used to display 3D histograms, scatter plots, etc.</p>\n"
  },
  "environment": {
    "desc": "<p>Environment map. Support for solid colors, gradual colors, URL of panoramic texture. The default is <code class=\"codespan\">&#39;auto&#39;</code>, which is used as the environment texture when <a href=\"#.light.ambientCubemap.texture\">light.ambientCubemap.texture</a> is configured. Otherwise, the environment texture is not displayed.</p>\n<p>Example: </p>\n<pre><code class=\"lang-js\">// Configure as a panoramic texture\nenvironment: &#39;asset/starfield.jpg&#39;\n// Configured as a solid black background\nenvironment: &#39;#000&#39;\n// Configured as a background with a vertical gradient\nenvironment: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{\n  offset: 0, color: &#39;#00aaff&#39; // Sky color\n}, {\n  offset: 0.7, color: &#39;#998866&#39; // Ground color\n}, {\n  offset: 1, color: &#39;#998866&#39; // Ground color\n}], false)\n\n</code></pre>\n"
  },
  "baseTexture": {
    "desc": "<p>The texture of the globe. Support for the string of image paths, images object or Canvas objects.</p>\n<p>It also supports to use an echarts example as a texture directly, in which case mouse actions on Earth will be linked to the echarts instance used on the texture.</p>\n<p>Example: </p>\n<pre><code class=\"lang-js\">// Use the globe&#39;s texture image\nbaseTexture: &#39;asset/earth.jpg&#39;\n\n// Use the world map example of echarts as a texture.\nvar canvas = document.createElement(&#39;canvas&#39;);\nvar mapChart = echarts.init(canvas, null, {\n    width: 4096, height: 2048\n});\nmapChart.setOption({\n    series : [\n        {\n            type: &#39;map&#39;,\n            map: &#39;world&#39;,\n            // Draw full size echarts example\n            top: 0, left: 0,\n            right: 0, bottom: 0,\n            boundingCoords: [[-180, 90], [180, -90]]\n        }\n    ]\n});\n...\nbaseTexture: mapChart\n\n</code></pre>\n"
  },
  "heightTexture": {
    "desc": "<p>The high texture of the globe. High textures can be used to match <a href=\"https://zh.wikipedia.org/wiki/%E5%87%B9%E5%87%B8%E8%B4%B4%E5%9B%BE\" target=\"_blank\">Bump Map</a> to show the light and dark details of the Earth&#39;s surface.\nThe following two images show the difference between using <code class=\"codespan\">heightTexture</code> and not using <code class=\"codespan\">heightTexuture</code>.</p>\n<p><img width=\"400\" height=\"auto\" src=\"documents/asset/gl/img/heightmap-enable.png\"></p>\n<p><img width=\"400\" height=\"auto\" src=\"documents/asset/gl/img/heightmap-disable.png\"></p>\n"
  },
  "displacementTexture": {
    "desc": "<p>The displacement texture of the vertices of the globe, the default is the same as a <a href=\"\" target=\"_blank\">heightTexture</a></p>\n<p>Compared to bump maps, The displacement of the vertex is to directly shift the vertices according to the texture. Valid when <a href=\"#globe.displaymentScale\">displaymentScale</a> is greater than 0.</p>\n"
  },
  "displacementScale": {
    "desc": "<p>The displacement map of the globe&#39;s vertex. The default is 0, which means no displacement.\nThe following two images show the effects of setting different <code class=\"codespan\">displacementScale</code>.</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/displacement-disable.png\" width=\"100%\" title=\"Scale: 0\"><img />\n    <img  src=\"documents/asset/gl/img/displacement-enable.png\" width=\"100%\" title=\"Scale: 0.1\"><img />\n<div />\n"
  },
  "displacementQuality": {
    "desc": "<p>The quality of the globe&#39;s vertex displacement. Support for <code class=\"codespan\">&#39;low&#39;</code>, <code class=\"codespan\">&#39;medium&#39;</code>, <code class=\"codespan\">&#39;high&#39;</code>, <code class=\"codespan\">&#39;ultra&#39;</code> settings.Higher quality can show more ground height detail. \nThe following two images show the effects of different <code class=\"codespan\">displacementQuality</code>.</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/displacement-low.png\" width=\"100%\" title=\"Low\"><img />\n    <img  src=\"documents/asset/gl/img/displacement-ultra.png\" width=\"100%\" title=\"Ultra\"><img />\n<div />\n\n\n\n"
  },
  "shading": {
    "desc": "<p>The coloring effect of 3D graphics in 地球. The following three coloring methods are supported in echarts-gl:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;color&#39;</code>\nOnly display colors, not affected by other factors such as lighting.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;lambert&#39;</code>\nThrough the classic [lambert] coloring, can express the light and dark that the light shows.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;realistic&#39;</code>\nRealistic rendering, combined with <a href=\"#globe.light.ambientCubemap\">light.ambientCubemap</a> and <a href=\"#globe.postEffect\">postEffect</a>, can improve the quality and texture of the display. [Physical Based Rendering (PBR)] (<a href=\"https://www.marmoset.co/posts/physically-based-rendering-and-you-can-too/\" target=\"_blank\">https://www.marmoset.co/posts/physically-based-rendering-and-you-can-too/</a>) is used in ECharts GL to represent realistic materials.</p>\n</li>\n</ul>\n<p>Here are the differences between different coloring effects.</p>\n<p><img width=\"250\" height=\"auto\" src=\"documents/asset/gl/img/globe-shading-color.png\">\n<img width=\"250\" height=\"auto\" src=\"documents/asset/gl/img/globe-shading-lambert.png\">\n<img width=\"250\" height=\"auto\" src=\"documents/asset/gl/img/globe-shading-realistic.png\"></p>\n"
  },
  "realisticMaterial": {
    "desc": "<p>The configuration item of the realistic material is valid when <a href=\"#globe.shading\">shading</a> is <code class=\"codespan\">&#39;realistic&#39;</code>.</p>\n"
  },
  "realisticMaterial.detailTexture": {
    "desc": "<p>The texture map of the material detail.</p>\n"
  },
  "realisticMaterial.textureTiling": {
    "desc": "<p>Tiles the texture map of the material detail. The default is <code class=\"codespan\">1</code>, which means that the stretch is filled. When greater than <code class=\"codespan\">1</code>, the number indicates how many times the texture is tiled.</p>\n<p><strong>Note:</strong>  The use of tiling requires the <code class=\"codespan\">detail texture</code> height and width to be 2 to the power of n. For example, 512x512, if it is a 200x200 texture, you cannot use tiling.</p>\n"
  },
  "realisticMaterial.textureOffset": {
    "desc": "<p>The displacement of the texture detail texture.</p>\n"
  },
  "realisticMaterial.roughness": {
    "desc": "<p>The <code class=\"codespan\">roughness</code> attribute is used to indicate the roughness of the material, <code class=\"codespan\">0</code> is completely smooth, <code class=\"codespan\">1</code> is completely rough, and the middle value is between the two.</p>\n<p>The following images show the effect of <code class=\"codespan\">roughness</code> in <a href=\"#globe\"><code class=\"codespan\">globe</code></a> <code class=\"codespan\">0.2</code> (smooth) and <code class=\"codespan\">0.8</code> (rough).</p>\n<p><img width=\"auto\" height=\"280\" src=\"documents/asset/gl/img/globe-gloss.png\">\n<img width=\"auto\" height=\"280\" src=\"documents/asset/gl/img/globe-rough.png\"></p>\n<p>When you want to express more complex materials. You can set <code class=\"codespan\">roughness</code> directly to the texture that stores the roughness with each pixel as follows.</p>\n<p><img width=\"300\" height=\"300\" src=\"documents/asset/gl/img/roughness.png\"></p>\n<p>The more white the color in the texture, the larger the value and the rougher it is. You can get texture resources of different materials from resource websites such as [<a href=\"http://freepbr.com/]\" target=\"_blank\">http://freepbr.com/]</a> (<a href=\"http://freepbr.com/)\" target=\"_blank\">http://freepbr.com/)</a>. You can also generate it yourself using other tools.</p>\n"
  },
  "realisticMaterial.metalness": {
    "desc": "<p>The <code class=\"codespan\">metalness</code> attribute is used to indicate whether the material is metal or non-metal, <code class=\"codespan\">0</code> is non-metallic, <code class=\"codespan\">1</code> is metal, and the middle value is between the two. Usually set to <code class=\"codespan\">0</code> and <code class=\"codespan\">1</code> to meet most of the scenes.</p>\n<p>The picture below show the difference between `metal&#39; and &#39;0&#39; in <a href=\"#globe\">globe</a>.</p>\n<p><img width=\"auto\" height=\"280\" src=\"documents/asset/gl/img/globe-metal.png\">\n<img width=\"auto\" height=\"280\" src=\"documents/asset/gl/img/globe-non-metal.png\"></p>\n<p>As with <a href=\"#globe.realisticMaterial.roughness\">roughness</a> you can set <code class=\"codespan\">metalness</code> directly to the metal texture.</p>\n"
  },
  "realisticMaterial.roughnessAdjust": {
    "desc": "<p>Roughness adjustment is useful when using roughness map. The overall roughness of the texture can be adjusted. The default is <code class=\"codespan\">0.5</code>, <code class=\"codespan\">0</code> is completely smooth, <code class=\"codespan\">1</code> is completely rough.</p>\n"
  },
  "realisticMaterial.metalnessAdjust": {
    "desc": "<p>Metalness adjustment is useful when using metalness maps. The overall metallicity of the texture can be adjusted. The default is <code class=\"codespan\">0.5</code>, <code class=\"codespan\">0</code> is non-metal, <code class=\"codespan\">1</code> is metal.</p>\n"
  },
  "realisticMaterial.normalTexture": {
    "desc": "<p>Normal map of material details.</p>\n<p>Using normal maps, you can still display rich shades of detail on the surface of the object with fewer vertices.</p>\n"
  },
  "lambertMaterial": {
    "desc": "<p>The configuration item of the lambert material is valid when <a href=\"#globe.shading\">shading</a> is <code class=\"codespan\">&#39;lambert&#39;</code>.</p>\n"
  },
  "lambertMaterial.detailTexture": {
    "desc": "<p>The texture map of the material detail.</p>\n"
  },
  "lambertMaterial.textureTiling": {
    "desc": "<p>Tiles the texture map of the material detail. The default is <code class=\"codespan\">1</code>, which means that the stretch is filled. When greater than <code class=\"codespan\">1</code>, the number indicates how many times the texture is tiled.</p>\n<p><strong>Note:</strong>  The use of tiling requires the <code class=\"codespan\">detail texture</code> height and width to be 2 to the power of n. For example, 512x512, if it is a 200x200 texture, you cannot use tiling.</p>\n"
  },
  "lambertMaterial.textureOffset": {
    "desc": "<p>The displacement of the texture detail texture.</p>\n"
  },
  "colorMaterial": {
    "desc": "<p>The color material related configuration item is valid when <a href=\"#globe.shading\">shading</a> is <code class=\"codespan\">&#39;color&#39;</code>.</p>\n"
  },
  "colorMaterial.detailTexture": {
    "desc": "<p>The texture map of the material detail.</p>\n"
  },
  "colorMaterial.textureTiling": {
    "desc": "<p>Tiles the texture map of the material detail. The default is <code class=\"codespan\">1</code>, which means that the stretch is filled. When greater than <code class=\"codespan\">1</code>, the number indicates how many times the texture is tiled.</p>\n<p><strong>Note:</strong>  The use of tiling requires the <code class=\"codespan\">detail texture</code> height and width to be 2 to the power of n. For example, 512x512, if it is a 200x200 texture, you cannot use tiling.</p>\n"
  },
  "colorMaterial.textureOffset": {
    "desc": "<p>The displacement of the texture detail texture.</p>\n"
  },
  "light": {
    "desc": "<p>Light related settings. Invalid when <a href=\"#globe.shading\">shading</a> is &#39;color&#39;.</p>\n<p>The lighting settings affect the components and all the charts on the component&#39;s coordinate system.</p>\n<p>A reasonable lighting setting can make the brightness and darkness of the whole scene richer and more layered.</p>\n"
  },
  "light.main": {
    "desc": "<p>The setting of the main light source of the scene. In the <a href=\"#globe\">globe</a> component is the sun.</p>\n"
  },
  "light.main.color": {
    "desc": "<p>The color of the main light source.</p>\n"
  },
  "light.main.intensity": {
    "desc": "<p>The intensity of the main light source.</p>\n"
  },
  "light.main.shadow": {
    "desc": "<p>Whether the main light source displays a shadow. The default is off.</p>\n<p>Turning on the shadows can bring more realistic and layered lighting to the scene. But it also increases the operating overhead of the program.</p>\n<p>The following two images show the difference between turning on the shadow and turning off the shadow.</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/geo-shadow.png\" width=\"100%\" title=\"Shadow\"><img />\n    <img  src=\"documents/asset/gl/img/geo-no-shadow.png\" width=\"100%\" title=\"No Shadow\"><img />\n<div />\n"
  },
  "light.main.shadowQuality": {
    "desc": "<p>The quality of the shadow. You can choose <code class=\"codespan\">&#39;low&#39;</code>, <code class=\"codespan\">&#39;medium&#39;</code>, <code class=\"codespan\">&#39;high&#39;</code>, <code class=\"codespan\">&#39;ultra&#39;</code></p>\n<p>The following two images shows the difference between low quality and high quality shadows.</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/geo-shadow-low.png\" width=\"100%\" title=\"Low\"><img />\n    <img  src=\"documents/asset/gl/img/geo-shadow-high.png\" width=\"100%\" title=\"High\"><img />\n<div />\n"
  },
  "light.main.alpha": {
    "desc": "<p>The main light source is around the x-axis, which is the angle of up-down rotation. Control the direction of the light with <a href=\"#globe.light.main.beta\">beta</a>.</p>\n<p>As the following image show:</p>\n<p><img width=\"\" height=\"auto\" src=\"documents/asset/gl/img/light-alpha-beta.png\"></p>\n<p>The <a href=\"#globe\">globe</a> component can control the time of sunlight by <a href=\"#globe.light.main.time\">time</a>.</p>\n"
  },
  "light.main.beta": {
    "desc": "<p>The main light source is around the y-axis, which is the angle of the left-right rotation.</p>\n"
  },
  "light.main.time": {
    "desc": "<p>The time of sunshine. The current system time is used by default.</p>\n"
  },
  "light.ambient": {
    "desc": "<p>Global ambient light settings.</p>\n"
  },
  "light.ambient.color": {
    "desc": "<p>The color of ambient light.</p>\n"
  },
  "light.ambient.intensity": {
    "desc": "<p>The intensity of ambient light.</p>\n"
  },
  "light.ambientCubemap": {
    "desc": "<p>The ambientCubemap uses texture as the source of ambient light, which provides diffuse and specular for objects. The diffuse and specular can be set separately by <a href=\"#globe.light.ambientCubemap.diffuseIntensity\">diffuseIntensity</a> and <a href=\"#globe.light.ambientCubemap.specularIntensity\">specularIntensity</a>.</p>\n"
  },
  "light.ambientCubemap.texture": {
    "desc": "<p>The URL of the ambient cubemap supports HDR images in the <code class=\"codespan\">.hdr</code> format. You can obtained the resources for <code class=\"codespan\">.hdr</code> from <a href=\"http://www.hdrlabs.com/sibl/archive.html\" target=\"_blank\">http://www.hdrlabs.com/sibl/archive.html</a> and other websites.</p>\n<p>Example：</p>\n<pre><code class=\"lang-js\">ambientCubemap: {\n    texture: &#39;pisa.hdr&#39;,\n    // The exposure value used when analytic hdr\n    exposure: 1.0\n}\n</code></pre>\n"
  },
  "light.ambientCubemap.diffuseIntensity": {
    "desc": "<p>The intensity of diffuse.</p>\n"
  },
  "light.ambientCubemap.specularIntensity": {
    "desc": "<p>The intensity of specular.</p>\n"
  },
  "postEffect": {
    "desc": "<p>Post-processing effects related configuration. It can add effects such as highlights, depth of field, screen space ambient occlusion (SSAO), toning to the picture. And it can make the whole picture more textured.</p>\n<p>The following are the differences between closing <code class=\"codespan\">postEffect</code> and opening <code class=\"codespan\">postEffect</code>.</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/globe-posteffect-disable.png\" width=\"100%\" title=\"Disable\"><img />\n    <img  src=\"documents/asset/gl/img/globe-posteffect-enable.png\" width=\"100%\" title=\"Enable\"><img />\n<div />\n\n<p>Note that when postEffect is enable, <a href=\"#globe.temporalSuperSampling\">temporalSuperSampling</a> is enable by default. After the picture is still, the picture will continue to be enhanced, including anti-aliasing, depth of field, SSAO, shadows, etc.</p>\n"
  },
  "postEffect.enable": {
    "desc": "<p>Whether to enable post-processing effects. Not enabled by default.</p>\n"
  },
  "postEffect.bloom": {
    "desc": "<p>Bloom is used to reproducing the effects that occur in real cameras when taking pictures in a bright environment.\nBecause traditional RGB can only represent colors in the range of &#39;0 - 255&#39;, so we need to use the bloom effect simulates fringes of light extending from the borders of bright areas, creating the illusion of a bright light overwhelming the camera. As shown below：</p>\n<p><img width=\"\" height=\"auto\" src=\"documents/asset/gl/img/globe-posteffect-bloom.png\"></p>\n"
  },
  "postEffect.bloom.enable": {
    "desc": "<p>Whether to enable the bloom effect.</p>\n"
  },
  "postEffect.bloom.bloomIntensity": {
    "desc": "<p>The intensity of the bloom. The default is 0.1.</p>\n"
  },
  "postEffect.depthOfField": {
    "desc": "<p>Depth of Field is a post-processing effect that simulates the focus properties of a camera. The area of focus is clear, and the area away from the focus is gradually blurred.</p>\n<p>The depth of field effect allows the observer to focus on the area of focus and make the picture feel stronger. Large depth of field can also create a macro model effect.</p>\n<p>The following are the differences between turning off and turning on the depth of field effect.</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/geo-no-dof.png\" width=\"100%\" title=\"Disable\"><img />\n    <img  src=\"documents/asset/gl/img/geo-dof.png\" width=\"100%\" title=\"Enable\"><img />\n<div />\n"
  },
  "postEffect.depthOfField.enable": {
    "desc": "<p>Whether to enable the depth of field.</p>\n"
  },
  "postEffect.depthOfField.focalDistance": {
    "desc": "<p>The initial focus distance. The user can click on the area to automatically focus.</p>\n"
  },
  "postEffect.depthOfField.focalRange": {
    "desc": "<p>The size of the in-focus area. The objects in this range are completely clear and there is no blurring.</p>\n"
  },
  "postEffect.depthOfField.fstop": {
    "desc": "<p>[F value] of the lens (<a href=\"https://zh.wikipedia.org/wiki/%E7%84%A6%E6%AF%94)\" target=\"_blank\">https://zh.wikipedia.org/wiki/%E7%84%A6%E6%AF%94)</a>, the smaller the value, the shallower the depth of field.</p>\n"
  },
  "postEffect.depthOfField.blurRadius": {
    "desc": "<p>Blur radius outside the focus.</p>\n<p>The difference blur effect between the different radius. </p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/geo-dof-small.png\" width=\"100%\" title=\"blurSize: 3\"><img />\n    <img  src=\"documents/asset/gl/img/geo-dof-large.png\" width=\"100%\" title=\"blurSize: 10\"><img />\n<div />\n"
  },
  "postEffect.screenSpaceAmbientOcclusion": {
    "desc": "<p>The ambient occlusion post-processing effect darkens the corners, holes, crevices, and areas where most light can`t reach. It is a supplement to the traditional shadow map, which makes the whole scene more natural and layered.</p>\n<p>Below is a comparison of the effects of no SSAO and SSAO:</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/geo-no-ssao.png\" width=\"100%\" title=\"No SSAO\"><img />\n    <img  src=\"documents/asset/gl/img/geo-ssao.png\" width=\"100%\" title=\"SSAO\"><img />\n<div />\n"
  },
  "postEffect.SSAO": {
    "desc": "<p>Same as <a href=\"#globe.postEffect.screenSpaceAmbientOcclusion\">screenSpaceAmbientOcclusion</a></p>\n"
  },
  "postEffect.SSAO.enable": {
    "desc": "<p>Whether to enable SSAO (screen space ambient occlusion). Not enabled by default.</p>\n"
  },
  "postEffect.SSAO.quality": {
    "desc": "<p>The quality of SSAO (screen space ambient occlusion). Supporting<code class=\"codespan\">&#39;low&#39;</code>, <code class=\"codespan\">&#39;medium&#39;</code>, <code class=\"codespan\">&#39;high&#39;</code>, <code class=\"codespan\">&#39;ultra&#39;</code></p>\n"
  },
  "postEffect.SSAO.radius": {
    "desc": "<p>The radius of the SSAO (screen space ambient occlusion). The larger the radius, the more natural the effect, but you need to set a higher <code class=\"codespan\">&#39;quality&#39;</code>. </p>\n<p>The following example is the difference between a smaller and larger radius:</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/geo-ssao-small-radius.png\" width=\"100%\" title=\"Radius: 1\"><img />\n    <img  src=\"documents/asset/gl/img/geo-ssao-large-radius.png\" width=\"100%\" title=\"Radius: 10\"><img />\n<div />\n"
  },
  "postEffect.SSAO.intensity": {
    "desc": "<p>The intensity of SSAO (screen space ambient occlusion). The larger the value, the darker the color.</p>\n"
  },
  "postEffect.colorCorrection": {
    "desc": "<p>Color correction and adjustment. Similar to Color Adjustments in Photoshop.</p>\n<p>The same scene in the figure below is adjusted to the difference between the cool color system and the warm color system.</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/buildings-cold.jpg\" width=\"100%\" title=\"Cold\"><img />\n    <img  src=\"documents/asset/gl/img/buildings-warm.jpg\" width=\"100%\" title=\"Warm\"><img />\n<div />\n\n"
  },
  "postEffect.colorCorrection.enable": {
    "desc": "<p>Whether to enable the color correction.</p>\n"
  },
  "postEffect.colorCorrection.lookupTexture": {
    "desc": "<p>Color correction lookup texture, recommended.</p>\n<p>The color correction lookup texture is a texture image like the one below.</p>\n<p><img width=\"200\" height=\"auto\" src=\"documents/asset/gl/img/lookup.png\"></p>\n<p>This is the basic lookup texture image that you can use directly.\nTo adjust the color of the scene to the effect you want, you can take a screenshot of the scene and adjust the color to the desired effect in image processing software such as Photoshop. Then apply the same adjustment to the image of the lookup texture above.</p>\n<p>For example, after turning into a cool tone, the image of the lookup texture will look like this:</p>\n<p><img width=\"200\" height=\"auto\" src=\"documents/asset/gl/img/crispwinter.png\"></p>\n<p>Then the texture image is used as the value of the configuration item, and you can get the same effect in Photoshop.</p>\n<p>Of course, if you just want to get a screenshot, you don&#39;t have to do it anymore, but if you want to easily adjust to the ideal color in real-time interactive works, this is very useful.</p>\n"
  },
  "postEffect.colorCorrection.exposure": {
    "desc": "<p>The exposure of the image.</p>\n"
  },
  "postEffect.colorCorrection.brightness": {
    "desc": "<p>The brightness of the image.</p>\n"
  },
  "postEffect.colorCorrection.contrast": {
    "desc": "<p>The contrast of the image.</p>\n"
  },
  "postEffect.colorCorrection.saturation": {
    "desc": "<p>The saturation of the image.</p>\n"
  },
  "postEffect.FXAA": {
    "desc": "<p>After opening <a href=\"#globe.postEffect\">postEffect</a>, WebGL&#39;s default MSAA (Multi Sampling Anti Aliasing) will not work. At this time, FXAA (Fast Approximate Anti-Aliasing) can solve the anti-aliasing problem quickly and easily. FXAA blurs the edge of the scene to solve the problem of aliasing. It works well on some scenes, but in echarts-gl, you need to ensure that the edges of many texts and lines are sharp and clear, so FXAA is not suitable. At this point we can use supersampling by setting a higher <code class=\"codespan\">devicePixelRatio</code> as follows:</p>\n<pre><code class=\"lang-js\">var chart = echarts.init(dom, null, {\n    devicePixelRatio: 2\n})\n</code></pre>\n<p>However, setting a higher <code class=\"codespan\">devicePixelRatio</code> has high requirements for computer performance, so more often we recommend using <a href=\"#globe.temporalSuperSampling\">temporalSuperSampling</a> in echarts-gl. After the picture is still, it will continue to sample multiple times and taken at several instances inside the pixel and an average color value is calculated.,thus achieving anti-aliasing effect.</p>\n"
  },
  "postEffect.FXAA.enable": {
    "desc": "<p>Whether to enable FXAA. Not enabled by default.</p>\n"
  },
  "temporalSuperSampling": {
    "desc": "<p>Temporal supersampling. After opening <a href=\"#globe.postEffect\">postEffect</a>, WebGL&#39;s default MSAA (MultiSampling Anti-Aliasing) will not work, so we need to solve the problem of sampling.</p>\n<p>Temporal supersampling is an anti-aliasing method. After the picture is still, it will continue to sample multiple times and taken at several instances inside the pixel and an average color value is calculated, thus achieving anti-aliasing effect.\nAnd in this process, ECharts-gl also progressively enhances some of the effects in <a href=\"#globe.postEffect\">postEffect</a> that require sampled guarantees. For example <a href=\"#globe.postEffect.SSAO\">SSAO</a>, <a href=\"#globe.postEffect.depthOfField\">Depth of Field</a>, and shadow.</p>\n<p>The following is the difference between not opening <code class=\"codespan\">temporalSuperSampling</code> and opening <code class=\"codespan\">temporalSuperSampling</code>.</p>\n<div  class=\"twentytwenty-container\" style=\"width: 800px;\">\n    <img  src=\"documents/asset/gl/img/surface-no-taa.png\" width=\"100%\" title=\"No AA\"><img />\n    <img  src=\"documents/asset/gl/img/surface-taa.png\" width=\"100%\" title=\"AA\"><img />\n<div />\n"
  },
  "temporalSuperSampling.enable": {
    "desc": "<p>Whether to enable temporal supersampling. By default, temporal supersampling is also turned on synchronously when <a href=\"#globe.postEffect\">postEffect</a> is turned on.</p>\n"
  },
  "viewControl": {
    "desc": "<p><code class=\"codespan\">viewControl</code> is used for mouse rotation, zooming, and other perspective control.</p>\n"
  },
  "viewControl.projection": {
    "desc": "<p>The way of projection, the default is <code class=\"codespan\">&#39;perspective&#39;</code> projection, also supports setting to <code class=\"codespan\">&#39;orthogonal&#39;</code> projection.</p>\n"
  },
  "viewControl.autoRotate": {
    "desc": "<p>Whether to enable the angle of view to automatically rotate around the object.</p>\n"
  },
  "viewControl.autoRotateDirection": {
    "desc": "<p>The direction in which the object auto rotates. The default is <code class=\"codespan\">&#39;cw&#39;</code> means clockwise from top to bottom, and can also use  <code class=\"codespan\">&#39;ccw&#39;</code> means counterclockwise from top to bottom.</p>\n"
  },
  "viewControl.autoRotateSpeed": {
    "desc": "<p>The speed at which the object auto rotates. The unit is <code class=\"codespan\">angle/second</code>, the default is <code class=\"codespan\">10</code>, which is a turn of <code class=\"codespan\">36</code> seconds.</p>\n"
  },
  "viewControl.autoRotateAfterStill": {
    "desc": "<p>The time interval for automatic rotation to resume after the mouse is still. Valid after opening <a href=\"#globe.viewControl.autoRotate\">autoRotate</a>.</p>\n"
  },
  "viewControl.damping": {
    "desc": "<p>The damping when the mouse is rotated, zoomed, etc.\nWhen it is greater than 0, the angle of view will continue to move (rotate and zoom) due to certain inertia after the mouse is still.</p>\n"
  },
  "viewControl.rotateSensitivity": {
    "desc": "<p>The sensitivity of the rotation operation. The greater the value, the more sensitive. Supports the use of arrays to set the horizontal and vertical rotation sensitivity separately.</p>\n<p>The default is <code class=\"codespan\">1</code>.</p>\n<p>Cannot be rotated after setting to <code class=\"codespan\">0</code>.</p>\n<pre><code class=\"lang-js\">// can&#39;t rotate\nrotateSensitivity: 0\n// can only be rotated horizontally\nrotateSensitivity: [1, 0]\n//  can only rotate vertically\nrotateSensitivity: [0, 1]\n</code></pre>\n"
  },
  "viewControl.zoomSensitivity": {
    "desc": "<p>The sensitivity of the zoom operation, the larger the value, the more sensitive. The default is <code class=\"codespan\">1</code>.</p>\n<p>Can<code class=\"codespan\">t be scaled after setting to</code>0`.</p>\n"
  },
  "viewControl.panSensitivity": {
    "desc": "<p>The sensitivity of the panning operation, the greater the value, the more sensitive. Supports the use of arrays to set the horizontal and vertical translation sensitivity.</p>\n<p>The default is <code class=\"codespan\">1</code>.</p>\n<p>Cannot pan after setting to <code class=\"codespan\">0</code>.</p>\n"
  },
  "viewControl.panMouseButton": {
    "desc": "<p>The mouse button used for panning operation supports:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;left&#39;</code> left mouse button (default)</p>\n</li>\n<li><p><code class=\"codespan\">&#39;middle&#39;</code> middle mouse button</p>\n</li>\n<li><p><code class=\"codespan\">&#39;right&#39;</code> right mouse button</p>\n</li>\n</ul>\n<p>Note: If set to the right mouse button, the default context menu will be blocked.</p>\n"
  },
  "viewControl.rotateMouseButton": {
    "desc": "<p>The mouse button used for the rotation operation supports:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;left&#39;</code> left mouse button</p>\n</li>\n<li><p><code class=\"codespan\">&#39;middle&#39;</code> middle mouse button (default)</p>\n</li>\n<li><p><code class=\"codespan\">&#39;right&#39;</code> right mouse button</p>\n</li>\n</ul>\n<p>Note: If set to the right mouse button, the default context menu will be blocked.</p>\n"
  },
  "viewControl.distance": {
    "desc": "<p>The distance of the default perspective from the subject. For <a href=\"#globe\">globe</a>, the distance from the Earth&#39;s surface is the distance from the center origin for other components such as <a href=\"#grid3D\">grid3D</a> and <a href=\"#geo3D\">geo3D</a>. Valid when <a href=\"#globe.viewControl.projection\">projection</a> is <code class=\"codespan\">&#39;perspective&#39;</code>.</p>\n"
  },
  "viewControl.minDistance": {
    "desc": "<p>The angle of view is controlled by the mouse to bring the minimum distance to the subject. Valid when <a href=\"#globe.viewControl.projection\">projection</a> is <code class=\"codespan\">&#39;perspective&#39;</code>.</p>\n"
  },
  "viewControl.maxDistance": {
    "desc": "<p>The angle of view can be extended to the maximum distance of the subject by mouse control. Valid when <a href=\"#globe.viewControl.projection\">projection</a> is <code class=\"codespan\">&#39;perspective&#39;</code>.</p>\n"
  },
  "viewControl.orthographicSize": {
    "desc": "<p>The size of the orthogonal projection. Valid when <a href=\"#globe.viewControl.projection\">projection</a> is <code class=\"codespan\">&#39;orthographic&#39;</code>.</p>\n"
  },
  "viewControl.maxOrthographicSize": {
    "desc": "<p>The maximum value of the orthogonal projection scaling. Valid when <a href=\"#globe.viewControl.projection\">projection</a> is <code class=\"codespan\">&#39;orthographic&#39;</code>.</p>\n"
  },
  "viewControl.minOrthographicSize": {
    "desc": "<p>The minimum value of the orthogonal projection scaling. Valid when <a href=\"#globe.viewControl.projection\">projection</a> is <code class=\"codespan\">&#39;orthographic&#39;</code></p>\n"
  },
  "viewControl.alpha": {
    "desc": "<p>The angle of view is around the x-axis, which is the angle of rotation up and down. With <a href=\"#globe.light.main.beta\">beta</a> you can control the direction of the perspective.</p>\n<p>As shown below：</p>\n<p><img width=\"\" height=\"auto\" src=\"documents/asset/gl/img/view-alpha-beta.png\"></p>\n"
  },
  "viewControl.beta": {
    "desc": "<p>The angle of view is around the y-axis, which is the angle of rotation from left to right.</p>\n"
  },
  "viewControl.center": {
    "desc": "<p>At the center of the angle of view, the rotation will also rotate around this center point. The default is <code class=\"codespan\">[0,0,0]</code>.</p>\n"
  },
  "viewControl.minAlpha": {
    "desc": "<p>The minimum alpha value to rotate up and down. That is, the angle of view can be rotated to reach the uppermost angle.</p>\n"
  },
  "viewControl.maxAlpha": {
    "desc": "<p>The maximum alpha value to rotate up and down. That is, the angle of view can be rotated to the lowest angle.</p>\n"
  },
  "viewControl.minBeta": {
    "desc": "<p>The minimum beta value to rotate left and right. That is, the angle of view can be rotated to the leftmost angle.</p>\n"
  },
  "viewControl.maxBeta": {
    "desc": "<p>The maximum beta value to rotate left and right rotation. That is, the angle of view can be rotated to the rightmost angle.</p>\n"
  },
  "viewControl.animation": {
    "desc": "<p>Whether to enable animation.</p>\n"
  },
  "viewControl.animationDurationUpdate": {
    "desc": "<p>The duration time for update the transition animation.</p>\n"
  },
  "viewControl.animationEasingUpdate": {
    "desc": "<p>The easing effect for update transition animation.</p>\n"
  },
  "viewControl.targetCoord": {
    "desc": "<p>Position the longitudes and latitudes.\nIgnore <a href=\"#globe.viewControl.alpha\">alpha</a> 和 <a href=\"#globe.viewControl.beta\">beta</a> after the setting.</p>\n<pre><code class=\"lang-js\">viewControl: {\n    // locate in BeiJing\n    targetCoord: [116.46, 39.92]\n}\n</code></pre>\n"
  },
  "layers": {
    "desc": "<p>Configuration of the Earth&#39;s Surface Layer.\nYou can use this configuration item to add clouds, or to supplement <a href=\"#globe. baseTexture\">baseTexture</a> to draw the outline of the country, and so on.</p>\n"
  },
  "layers.show": {
    "desc": "<p>Whether to show this layer.</p>\n"
  },
  "layers.type": {
    "desc": "<p>Layper type, Optional：</p>\n<ul>\n<li><code class=\"codespan\">&#39;overlay&#39;</code></li>\n</ul>\n<p>The overlay on the ground surface can be used to display clouds and the like.</p>\n<ul>\n<li><code class=\"codespan\">&#39;blend&#39;</code></li>\n</ul>\n<p>Mix with <a href=\"#globe.baseTexture\">baseTexture</a>.</p>\n"
  },
  "layers.name": {
    "desc": "<p>The name of the layer. When setting the properties of the layer with setOption, you can use the name to identify the layer that needs to be updated.</p>\n<pre><code class=\"lang-js\">chart.setOption({\n    globe: {\n        layer: [{\n            // Update the texture of the layer named &#39;cloud&#39;\n            name: &#39;cloud&#39;,\n            texture: &#39;cloud.png&#39;\n        }]\n    }\n});\n</code></pre>\n"
  },
  "layers.blendTo": {
    "desc": "<p>When <a href=\"#globe.layers.type\">type</a> is <code class=\"codespan\">&#39;blend&#39;</code> is valid .</p>\n<p>Optional：</p>\n<ul>\n<li><p><code class=\"codespan\">albedo</code> is mixed to albedo, affected by lighting.</p>\n</li>\n<li><p><code class=\"codespan\">emission</code> is mixed to self-illuminating, unaffected by light.</p>\n</li>\n</ul>\n"
  },
  "layers.intensity": {
    "desc": "<p>The intensity of the mixture.</p>\n"
  },
  "layers.shading": {
    "desc": "<p>The coloring effect of the overlay is the same as <a href=\"#globe.shading\">globe.shading</a>, which supports <code class=\"codespan\">&#39;color&#39;</code>, <code class=\"codespan\">&#39;lambert&#39;</code>, <code class=\"codespan\">&#39;realistic&#39;</code></p>\n<p>Valid when <a href=\"globe.layers.type\" target=\"_blank\">type</a> is <code class=\"codespan\">&#39;overlay&#39;</code>.</p>\n"
  },
  "layers.distance": {
    "desc": "<p>The distance from the overlay to the surface of the globe.</p>\n<p>Valid when <a href=\"#globe.layers.type\">type</a> is <code class=\"codespan\">&#39;overlay&#39;</code>.</p>\n"
  },
  "layers.texture": {
    "desc": "<p>The texture of the globe. Support for the string of image paths, images object or Canvas objects.</p>\n<p>It also supports to use an echarts example as a texture directly, in which case mouse actions on Earth will be linked to the echarts instance used on the texture.</p>\n"
  }
}