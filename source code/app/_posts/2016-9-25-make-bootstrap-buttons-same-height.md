---
layout: single-post
page-class: single-post
categories: blog
jumbotron: page
title: Make Bootstrap Buttons same height
tags: css js buttons
excerpt_separator: <!--more-->
---

I have wrote a JavaScript function that read all the buttons height through a page and make them to have same height size using jQuery.
<!--more-->
<h2>How to equal height Javascript function works?</h2>
<p>The Javascript function finds all buttons that are inside of this HTML "<strong>data-equal-btns</strong>" attribute name and then stores all the element button in array.</p>
For example:
<div data-equal-btns=""><!-- Buttons here --></div>
Next Javascript retrieves DOM buttons object from array list and go through until find the maximum height number of a button. Based of maximum button height, I calculate the <strong>top</strong> and <strong>bottom padding</strong> for each button is needed, in order to be equal with the biggest button.

<strong><span style="text-decoration: underline;">Button Equal Height Formula:</span></strong>

<em>Extra Padding = (Max Height Button - Current Height Button) / 2</em>

<em>Total Padding Top Button = Current Padding Top Button + Extra Padding</em>

<em>Total Padding Bottom Button = Current Padding Top Button + Extra Padding</em>

Example:

<p data-height="300" data-theme-id="9796" data-slug-hash="MeewxY" data-default-tab="result" data-user="Sp00ky" data-pen-title="Bootstrap Equal Height Buttons" class="codepen">See the Pen <a href="https://codepen.io/Sp00ky/pen/MeewxY/">Bootstrap Equal Height Buttons</a> by Andreas Eracleous (<a href="https://codepen.io/Sp00ky">@Sp00ky</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>