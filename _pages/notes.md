---
layout: default
title: notes
permalink: /notes/
---
<div class="notes-page">
  <h1 class="page-title">notes</h1>

  <div class="pub-list">
    {% for note in site.data.notes %}
    <div class="pub-entry">

      <!-- Note icon -->
      <div class="pub-image">
        <div class="pub-image-placeholder">
          <i class="bi bi-journal-text"></i>
        </div>
      </div>

      <!-- Note details -->
      <div class="pub-details">
        <h3 class="pub-title">{{ note.title }}</h3>

        <p class="pub-venue">
          <em>{{ note.date | date: "%B %Y" }}</em>
        </p>

        {% if note.tags %}
        <div class="note-tags">
          {% for tag in note.tags %}<span class="tag">{{ tag }}</span>{% endfor %}
        </div>
        {% endif %}

        <!-- Links -->
        <div class="pub-links">
          {% if note.drive and note.drive != "" %}
          <a class="btn-link" href="{{ note.drive }}" target="_blank">
            <i class="bi bi-google" style="font-size:0.75em; margin-right:2px;"></i>Drive
          </a>
          {% endif %}
        </div>

        <!-- Abstract -->
        {% if note.abstract and note.abstract != "" %}
        <div class="pub-abstract">
          {{ note.abstract | markdownify }}
        </div>
        {% endif %}
      </div>

    </div>
    {% endfor %}
  </div>
</div>
