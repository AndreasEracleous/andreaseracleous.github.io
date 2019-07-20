---
layout: single-post
page-class: single-post
categories: blog
jumbotron: page
title: Bootstrap Responsive Table with CSS3
tags: html css table responsive-table
excerpt_separator: <!--more-->
---

I spent some time playing with the <em><strong>Bootstrap Responsive Table</strong></em>. I was very curious about on how can I create a responsive table with just CSS code without any interaction of Javascript code. I found that nearly impossible to make it happens until I learned about the attribute <strong>attr()</strong> function on CSS.
<!--more-->
I am using Bootstrap Framework a lot on my web project but I can say that the <em>Bootstrap responsive table</em> component is not so good for using it on mobile and tablet device even on a responsive website.
<h2>Using Bootstrap Responsive Table</h2>
You can create a responsive tables with Bootstrap by wrapping any <em>
</em>

&nbsp;

in <em>.table-responsive </em>like the below example:
<pre>
<code class="language-markup">

	&lt;div class="table-responsive"&gt;
	 ...
	&lt;/div&gt;

</code>
</pre>
On small screen under 768px you will notice that appearing a scroll horizontally and whilst on larger screen than 768px wide, you will not see any difference in these tables.

The result has as following:

<h2>Reads Value With attr() CSS Property</h2>

<strong>attr() CSS property</strong> allows us to retrieve the value of an attribute of the selected element and use it in the style sheet.

I set an attribute on the <em><strong>td</strong></em> element of the <em><strong>table</strong></em> and then using the content property and attribute <em><strong>attr()</strong></em> function for reading the content of the element.

<pre lang="lang">
<code class="language-css">
[row-header]:before {
	content: attr(row-header);
	display: inline-block;
	vertical-align: middle;
	text-align: left;
	width: 50%;
	padding-right:30px;
}	
</code>
</pre>


Below you can see the Unresponsive Table, Responsive Table with Bootstrap and Responsive Table with Custom Style code:

<p data-height="300" data-theme-id="9796" data-slug-hash="wGjpZX" data-default-tab="result" data-user="Sp00ky" data-pen-title="Bootstrap Responsive Table" class="codepen">See the Pen <a href="https://codepen.io/Sp00ky/pen/wGjpZX/">Bootstrap Responsive Table</a> by Andreas Eracleous (<a href="https://codepen.io/Sp00ky">@Sp00ky</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>