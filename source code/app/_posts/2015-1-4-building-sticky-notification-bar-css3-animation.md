---
layout: single-post
page-class: single-post
categories: blog
jumbotron: page
title: Building a Sticky Notification Bar using CSS3 Animation
description: Learn on how you can build a simple sticky notification bar using HTML5 and CSS3 animation for your website.
tags: html css
excerpt_separator: <!--more-->
---

<p>In this post, I will show you on how you can build a <strong>Sticky Notification Bar</strong> for your website.</p>

<p>A notification bars can be a effective way to grab the attention of the visitors and show to them some important information or even promoting your product. Also is a powerful way to increase the number of  your subscribers.</p>
<!--more-->
<p><strong>Notification Bar:</strong></p>
<p data-height="300" data-theme-id="9796" data-slug-hash="YPPmGL" data-default-tab="result" data-user="Sp00ky" data-pen-title="Sticky Notification Bar" class="codepen">See the Pen <a href="https://codepen.io/Sp00ky/pen/YPPmGL/">Sticky Notification Bar</a> by Andreas Eracleous (<a href="https://codepen.io/Sp00ky">@Sp00ky</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

<h2 class="mt-5">How Sticky Notification Bar works</h2>
<p>Simply the Notification Bar appears on the top of the website using CSS3 animation properties for adding some effects on the bar.  At the beginning of the website, the bar is appearing smoothly from up to down and therefore if the user click on the close button icon, it is disappearing from down to up.</p>

<p>After that, a narrow icon is appearing to the user where has the option to brink the bar back in the initial stage.</p>

<h3 class="mt-5">How to create CSS Click Events</h3>
<p>The Close button works only with CSS selectors without any interaction of Javascript code. So in order to make it happens we need to know two values like true: when the button is clicked and false: when the button is not. I used an input html tag of type Checkbox in which it give us two values <strong>true</strong>:when it checked and <strong>false</strong>:when it unchecked.</p>

<p>As you can see the code below:</p>
<pre><code class="language-css">&lt;input type="checkbox"&gt;</code></pre>

<p>In the style code:</p>

<pre><code class="language-css">input [type=checkbox]:checked ~ #notification-bar  {
/* Make something when it checked  */
}

input[type=checkbox] ~ #notification-bar {
/* Make something when it unchecked  */
}
</code></pre>

<p>The above CSS code, basically the [fusion_highlight]sibling selector ~[/fusion_highlight] it says to do something with the element <strong>id="#notification-bar"</strong> that is below of the input tag. In this case when the checkbox is checked, it starts to run the animation to disappear the bar.</p>

<h3 class="mt-5">Animation - CSS3 3D Transforms</h3>
<p>Using the<strong> transform</strong> property, it gives the ability to control an element using 3D transforms including X, Y, Z axis (translate3d(x, y, z)). In our case I have used only the <strong>Y axis</strong>, moving the bar from -100 to 0 (Up to Down) pixels on the Y axis and 0 to -100 (Down to Up) pixels.</p>

<pre><code class="language-css">/* ANIMATION for go up */ 
@-webkit-keyframes goUp {
  0% {
    -webkit-transform: none;
            transform: none;    
  }
  100% {
    -webkit-transform: translate3d(0, -100px, 0);
            transform: translate3d(0, -100px, 0);    
  }
}
@keyframes goUp {
  0% {
    -webkit-transform: none;
            transform: none;    
  }
  100% {
    -webkit-transform: translate3d(0, -100px, 0);
            transform: translate3d(0, -100px, 0);    
  }
}
/* ANIMATION for go down */
@-webkit-keyframes goDown {
  0% {
    -webkit-transform: translate3d(0, -100%, 0);
            transform: translate3d(0, -100%, 0);
  }
  100% {
    -webkit-transform: none;
            transform: none;
  }
}
@keyframes goDown {
  0% {
    -webkit-transform: translate3d(0, -100%, 0);
            transform: translate3d(0, -100%, 0);
  }
  100% {
    -webkit-transform: none;
            transform: none;
  }
}
</code></pre>

<h3 class="mt-5">Source Code</h3>
<p>The source code is available in <a href="https://github.com/AndreasEracleous/NotificationBar-HTML5-CSS3">this repository</a> on GitHub.</p>