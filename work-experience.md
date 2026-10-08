---
layout: page
title: Work Experience
permalink: /work-experience/
heading: Work experience
description: >-
  Austin Schmid's work experience as a US Army infantry and Psychological
  Operations officer and a Hiring Our Heroes Fellow at Edelman Smithfield.
---

{%- assign pending = 0 -%}
{%- for org in site.data.experience -%}
{%- for job in org.roles -%}
{%- if job.placeholder -%}{%- assign pending = pending | plus: 1 -%}{%- endif -%}
{%- endfor -%}
{%- endfor -%}
{% if pending > 0 %}
{% include placeholder.html text="Key results and responsibilities for each role are still to be added." %}
{% endif %}

{% include experience.html %}
