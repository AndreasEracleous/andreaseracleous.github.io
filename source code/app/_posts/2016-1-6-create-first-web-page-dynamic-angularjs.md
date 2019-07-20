---
layout: single-post
page-class: single-post
categories: blog
jumbotron: page
title: Create your first web page dynamic with AngularJS
description: Learn on how you can create your first web page dynamic with AngularJS
tags: js angularjs
excerpt_separator: <!--more-->
---

First of all you have to go at <a href="angularjs.org">angularjs.org</a> website and click on the download button for downloading the AngularJS javascript file or otherwise copy the link <em>content distribution network</em> (<em>CDN</em>).

<!--more-->

Then embed it into your HTML file like code below:
<pre>
<code class="language-markup">&lt;!DOCTYPE html&gt;
&lt;html ng-app&gt;

&lt;head&gt;
  &lt;link rel="stylesheet" href="style.css"&gt;
  &lt;script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.28/angular.min.js"&gt;&lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;
  &lt;input type="text" ng-model="name" placeholder="Please type your name"&gt;
  &lt;h3&gt;{{name}}&lt;/h3&gt;
&lt;/body&gt;

&lt;/html&gt;</code></pre>
Output:
<p data-height="300" data-theme-id="9796" data-slug-hash="VYmOVP" data-default-tab="result" data-user="Sp00ky" data-pen-title="First page with AngularJS" class="codepen">See the Pen <a href="https://codepen.io/Sp00ky/pen/VYmOVP/">First page with AngularJS</a> by Andreas Eracleous (<a href="https://codepen.io/Sp00ky">@Sp00ky</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>