---
layout: default
title: blog
permalink: /blog/
---
<div class="blog-page">
  <h1 class="page-title">blog</h1>

  <div class="blog-list">
    {% assign sorted_posts = site.posts | sort: 'date' | reverse %}
    {% for post in sorted_posts %}
    <div class="blog-entry">
      <div class="blog-entry-header">
        <a class="blog-entry-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <span class="blog-entry-date">{{ post.date | date: "%b %-d, %Y" }}</span>
      </div>

      {% if post.tags %}
      <div class="blog-entry-tags">
        {% for tag in post.tags %}<span class="tag">{{ tag }}</span>{% endfor %}
      </div>
      {% endif %}

      {% if post.abstract %}
      <p class="blog-entry-abstract">{{ post.abstract }}</p>
      {% endif %}

      {% if post.bibtex and post.bibtex != "" %}
      <div class="blog-entry-links">
        <button class="btn-link bib-trigger" data-bib="{{ post.bibtex | escape }}">BIB</button>
      </div>
      {% endif %}
    </div>
    {% endfor %}
  </div>
</div>
