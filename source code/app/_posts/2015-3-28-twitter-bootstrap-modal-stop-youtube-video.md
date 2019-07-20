---
layout: single-post
page-class: single-post
categories: blog
jumbotron: page
title: Twitter Bootstrap Modal stop Youtube video
description: Solution on how you can stop a Youtube video to still playing on the background using a Twitter Bootstrap Modal. Twitter Bootstrap Modal stop Youtube video.
meta: twitter bootstrap modal component, youtube modal, youtube video modal, iframe Youtube Modal, iframe video bootstrap
tags: js lightbox youtube-video bootstrap-modal
excerpt_separator: <!--more-->
---

I worked on a Bootstrap project, where I had to implement Youtube video on Twitter Bootstrap Modal component.

when I pressed to open the Modal component for playing the video, I noticed something weird on it since after Bootstrap Modal has closed.
<!--more-->
I realised that the Youtube video has continue playing on the background even when it was closed. I had tried many ways to fix it but at the end I found a solution with JavaScript on how I can stop a Youtube video to still playing on the background and below you can see my solution.
<h2>JavaScript Code for Twitter Bootstrap Modal stop Youtube video</h2>
I used the Modal event function "<strong>hidden.bs.modal</strong>" as they mentioned in their documentation in which it starts to execute when the modal has finished being hidden from the user. What I did I remove and set the video URL in iFrame again when it has been closed the Modal. In this way it terminate the procedure of the video as a result to make it to stop.
 
<pre lang="lang">$('#youtubeVideo').on('hidden.bs.modal', function() {
    var $this = $(this).find('iframe'),
      tempSrc = $this.attr('src');
    $this.attr('src', "");
    $this.attr('src', tempSrc);
  });</pre> 

<h2>JavaScript Code for Twitter Bootstrap Modal stop HTML5 video</h2>
 
<pre lang="lang">$('#html5Video').on('hidden.bs.modal', function() {
    var html5Video = document.getElementById("htmlVideo");
    if (html5Video != null) {
      html5Video.pause();
      html5Video.currentTime = 0;
    }
  });</pre> 

<p data-height="300" data-theme-id="9796" data-slug-hash="PwLNbm" data-default-tab="result" data-user="Sp00ky" data-pen-title="Twitter Bootstrap Modal stop Youtube video" class="codepen">See the Pen <a href="https://codepen.io/Sp00ky/pen/PwLNbm/">Twitter Bootstrap Modal stop Youtube video</a> by Andreas Eracleous (<a href="https://codepen.io/Sp00ky">@Sp00ky</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>