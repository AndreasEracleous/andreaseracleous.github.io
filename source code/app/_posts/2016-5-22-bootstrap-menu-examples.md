---
layout: single-post
page-class: single-post
categories: blog
jumbotron: page
title: Bootstrap Menu Examples
tags: navbar bootstrap menu
excerpt_separator: <!--more-->
---
<p><em><strong>Bootstrap Menu</strong></em> component is a responsive navigation bar for using on a website or a web app. By default, The <strong>Bootstrap responsive menu bar</strong> collapses (vertically stacks) in small devices <em>phones display</em> lower than <strong>768 pixels</strong>.</p>

<p>In this example, I have been experimented with the Bootstrap menu (Navbar component)  and I have made some modification on it through the CSS stylesheet.</p>
<!--more-->
<p>By default, if you click on the <em>dropdown menu</em> of the Navigation bar, you will notice, it appears a submenu with one column.  So I have changed that column to be takes more than one column and also get <span style="line-height: 1.5;">full width 100%.</span></p>

<p>I have used <strong>flex CSS property</strong> to make all their submenus to have the same length, regardless of its content. Therefore I have changed the bootstrap navigation breakpoint to collapse in small devices <em>tablets display</em> between <strong>768 pixels</strong> and <strong>991 pixels</strong></p><p>You can find the CSS code below and see how you can change the <em>Bootstrap NavBar Breakpoint</em>.</p>

<pre class="lang:default decode:true">
<code class="language-css">
@media (max-width: 991px) {
    .navbar-header {
        float: none;
    }
    .navbar-toggle {
        display: block;
    }
    .navbar-collapse {
        border-top: 1px solid transparent;
        box-shadow: inset 0 1px 0 rgba(255,255,255,0.1);
    }
    .navbar-collapse.collapse {
        display: none!important;
    }
    .navbar-nav {
        float: none!important;
        margin: 7.5px -15px;
    }
    .navbar-nav&gt;li {
        float: none;
    }
    .navbar-nav&gt;li&gt;a {
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .navbar-text {
        float: none;
        margin: 15px 0;
    }
    /* since 3.1.0 */
    .navbar-collapse.collapse.in { 
        display: block!important;
    }
    .collapsing {
        overflow: hidden!important;
    }
}
</code>
</pre>

<p data-height="300" data-theme-id="9796" data-slug-hash="pyXypB" data-default-tab="result" data-user="Sp00ky" data-pen-title="Bootstrap Menu Example - 1" class="codepen">See the Pen <a href="https://codepen.io/Sp00ky/pen/pyXypB/">Bootstrap Menu Example - 1</a> by Andreas Eracleous (<a href="https://codepen.io/Sp00ky">@Sp00ky</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>