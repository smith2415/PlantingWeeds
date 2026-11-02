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
embeds_infotracer: true
---

The first thing people see is often the first thing they believe, so finding where a claim actually started is one of the best ways to pull it out. InfoTracer is a proof of concept for doing that with less guesswork.

Log a claim and its "hook", the distinctive phrase that travels with it. InfoTracer searches Bluesky, worldwide news coverage through GDELT, and X, Reddit, TikTok and Instagram through Xpoz, and saves the earliest sightings it finds. Each one goes on a timeline so you can see how the claim spread. From there you mark the seed (where it began), the weeds (accounts deliberately pushing it) and any other posts worth highlighting, and check whether fact-checkers have already covered it.

Results from Xpoz are flagged to be verified by hand, and every search is a starting point for your own checking, not a verdict.

## Try it
{: #try-it}

InfoTracer needs its own free account, separate from this site. Your claims are private to your account.

<div class="app-embed">
<div class="app-embed__frame">
<p class="app-embed__waiting" aria-hidden="true">Starting InfoTracer. The first visit in a while can take several seconds while it wakes up. If it doesn't appear, use the button below.</p>
<iframe src="{{ site.infotracer_url }}/" title="InfoTracer" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
</div>
<p class="doc__actions">
<a class="button" href="{{ site.infotracer_url }}" target="_blank" rel="noopener">Open InfoTracer in a new tab</a>
</p>
<p class="doc__note">Some browsers, including Safari, don't keep you logged in to a tool shown inside another site. If it keeps sending you back to the login page, open it in a new tab instead.</p>
</div>
