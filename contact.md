---
layout: page
title: Contact
permalink: /contact/
heading: Contact
lede: >-
  For questions about my work, training, or speaking.
description: >-
  How to get in touch with Austin Schmid about countering mis- and
  disinformation.
---

{%- assign placeholders = site.data.contact | where: "placeholder", true -%}
{% if placeholders.size > 0 %}
{% include placeholder.html text="Contact details have not been added yet. The rows below show where they will appear." %}
{% endif %}

<dl class="contact-list">
{%- for row in site.data.contact %}
<div class="contact-list__row{% if row.placeholder %} contact-list__row--placeholder{% endif %}">
<dt>{{ row.label }}</dt>
<dd>{% if row.url and row.url != "" %}<a href="{{ row.url }}">{{ row.value }}</a>{% else %}{{ row.value }}{% endif %}</dd>
</div>
{%- endfor %}
</dl>
