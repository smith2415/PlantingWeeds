---
layout: page
title: InfoTracer
permalink: /infotracer/
heading: InfoTracer
lede: >-
  A tool for tracing a claim back to where it started.
description: >-
  InfoTracer, Austin Schmid's open-source tool for tracing when and where a
  claim first entered the information environment.
scripts: true
---

The first thing people see is often the first thing they believe, so finding where a claim actually started is one of the best ways to pull it out. InfoTracer is a proof of concept for doing that with less guesswork.

Log a claim and its "hook", the distinctive phrase that travels with it. InfoTracer searches Bluesky, worldwide news coverage through GDELT, and X, Reddit, TikTok and Instagram through Xpoz, and saves the earliest sightings it finds. Each one goes on a timeline so you can see how the claim spread. From there you mark the seed (where it began), mark the weeds (accounts deliberately pushing it), and check whether fact-checkers have already covered it.

Results from Xpoz are flagged to be verified by hand, and every search is a starting point for your own checking, not a verdict.

## Try it
{: #try-it}

InfoTracer needs its own free account, separate from this site. Your claims are private to your account.

<div class="app-embed">
<details class="app-embed__preview" data-src="{{ site.infotracer_url }}">
<summary class="doc__button">
<span class="doc__title">InfoTracer</span>
<span class="doc__hint"><span class="when-closed">Open it here</span><span class="when-open">Close</span></span>
</summary>
<div class="doc__frame app-embed__frame">
<p class="doc__fallback">InfoTracer opens here with JavaScript turned on. If nothing appears, <a href="{{ site.infotracer_url }}" target="_blank" rel="noopener">open InfoTracer in a new tab</a>.</p>
</div>
</details>
<p class="doc__actions">
<a class="button" href="{{ site.infotracer_url }}" target="_blank" rel="noopener">Open InfoTracer in a new tab</a>
</p>
<p class="doc__note">Some browsers, including Safari, don't keep you logged in to a tool shown inside another site. If it keeps sending you back to the login page, open it in a new tab instead. InfoTracer only loads when you open it, so this page makes no requests to it until then.</p>
</div>
