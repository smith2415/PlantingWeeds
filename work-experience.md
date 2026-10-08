---
layout: page
title: Work Experience
permalink: /work-experience/
heading: Work experience
description: >-
  Austin Schmid's work experience in information operations and countering
  disinformation.
---

{%- assign placeholders = site.data.experience | where: "placeholder", true -%}
{% if placeholders.size > 0 %}
{% include placeholder.html text="The entries on this page are examples of the layout and are not real. Austin's roles, organizations and dates will replace them." %}
{% endif %}

<ol class="timeline">
{%- for job in site.data.experience %}
<li class="job{% if job.placeholder %} job--placeholder{% endif %}">
<h2 class="job__role">{{ job.role }}</h2>
<p class="job__meta">{{ job.organization }}, {{ job.dates }}</p>
<p>{{ job.summary }}</p>
{%- if job.points %}
<ul>
{%- for point in job.points %}
<li>{{ point }}</li>
{%- endfor %}
</ul>
{%- endif %}
</li>
{%- endfor %}
</ol>
