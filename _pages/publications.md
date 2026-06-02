---
layout: default
title: publications
permalink: /publications/
---
<div class="publications-page">
  <h1 class="page-title">publications</h1>

  {% assign pubs = site.data.publications | where_exp: "p", "p.title" %}
  {% if pubs.size > 0 %}

  <p class="pub-note"><sup>*</sup> Equal contribution &nbsp; <sup>†</sup> Corresponding author</p>

  <div class="pub-list">
    {% for pub in pubs %}
    <div class="pub-entry">

      <!-- Paper image / thumbnail -->
      <div class="pub-image">
        {% if pub.image and pub.image != "" %}
        <img src="{{ pub.image | relative_url }}" alt="{{ pub.title }}">
        {% else %}
        <div class="pub-image-placeholder">
          <i class="bi bi-file-earmark-text"></i>
        </div>
        {% endif %}
      </div>

      <!-- Paper details -->
      <div class="pub-details">
        <h3 class="pub-title">{{ pub.title }}</h3>

        <p class="pub-authors">
          {% for author in pub.authors %}
            {% if author.url and author.url != "" %}
              <a href="{{ author.url }}" target="_blank">{{ author.name }}</a>
            {% else %}
              {{ author.name }}
            {% endif %}
            {% if author.first_author %}<sup>*</sup>{% endif %}
            {% unless forloop.last %},{% endunless %}
          {% endfor %}
        </p>

        <p class="pub-venue">
          <em>{{ pub.venue }}</em>
        </p>

        <!-- Action buttons -->
        <div class="pub-links">
          {% if pub.bibtex and pub.bibtex != "" %}
          <button class="btn-link bib-trigger" data-bib="{{ pub.bibtex | escape }}">BIB</button>
          {% endif %}
          {% if pub.arxiv and pub.arxiv != "" %}
          <a class="btn-link" href="{{ pub.arxiv }}" target="_blank">arXiv</a>
          {% endif %}
          {% if pub.venue_url and pub.venue_url != "" %}
          <a class="btn-link" href="{{ pub.venue_url }}" target="_blank">{{ pub.venue | split: ' ' | first }}</a>
          {% endif %}
          {% if pub.pdf and pub.pdf != "" %}
          <a class="btn-link" href="{{ pub.pdf }}" target="_blank">PDF</a>
          {% endif %}
          {% if pub.code and pub.code != "" %}
          <a class="btn-link" href="{{ pub.code }}" target="_blank">Code</a>
          {% endif %}
        </div>

        <!-- Abstract -->
        {% if pub.abstract and pub.abstract != "" %}
        <div class="pub-abstract">
          {{ pub.abstract | markdownify }}
        </div>
        {% endif %}
      </div>

    </div>
    {% endfor %}
  </div>

  {% else %}

  <div class="empty-state">
    <div class="empty-state-icon">📭</div>
    <h2 class="empty-state-title">Nothing here (yet)</h2>
    <!-- <p class="empty-state-msg">
      Papers are like buses:<br>
      you wait for ages, then three arrive at once.<br>
      <span class="empty-state-sub">Currently at the waiting stage.</span>
    </p> -->
  </div>

  {% endif %}
</div>
