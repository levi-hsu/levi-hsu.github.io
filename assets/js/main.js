/* ── Theme Toggle ── */
(function () {
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');
  const icon = document.getElementById('theme-icon');

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (icon) {
      icon.className = theme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
    }
  }

  const saved = localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  setTheme(saved);

  if (btn) {
    btn.addEventListener('click', function () {
      setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });
  }
})();

/* ── Mobile Nav Toggle ── */
(function () {
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  if (!toggle || !links) return;
  toggle.addEventListener('click', function () {
    links.classList.toggle('open');
  });
  // Close on link click
  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { links.classList.remove('open'); });
  });
})();

/* ── BibTeX Modal ── */
(function () {
  const overlay = document.getElementById('bib-modal-overlay');
  const content = document.getElementById('bib-content');
  const hint = document.getElementById('bib-copy-hint');
  const closeBtn = document.getElementById('bib-modal-close');
  if (!overlay) return;

  function openBib(bibtex) {
    content.textContent = bibtex;
    content.classList.remove('copied');
    hint.textContent = 'Click to copy';
    overlay.classList.add('active');
  }

  function closeBib() {
    overlay.classList.remove('active');
  }

  // Attach to all .bib-trigger buttons (pub page, blog listing, post header)
  function attachTriggers() {
    document.querySelectorAll('.bib-trigger').forEach(function (btn) {
      if (btn._bibAttached) return;
      btn._bibAttached = true;
      btn.addEventListener('click', function () {
        openBib(btn.dataset.bib || '');
      });
    });
  }
  attachTriggers();

  // Copy on click
  content.addEventListener('click', function () {
    if (!navigator.clipboard) {
      const sel = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(content);
      sel.removeAllRanges();
      sel.addRange(range);
      document.execCommand('copy');
      sel.removeAllRanges();
    } else {
      navigator.clipboard.writeText(content.textContent);
    }
    content.classList.add('copied');
    hint.textContent = 'Copied!';
    setTimeout(function () {
      content.classList.remove('copied');
      hint.textContent = 'Click to copy';
    }, 2000);
  });

  closeBtn.addEventListener('click', closeBib);
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeBib();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeBib();
  });
})();

/* ── Table of Contents (blog posts) ── */
(function () {
  const nav = document.getElementById('toc-nav');
  const postContent = document.getElementById('post-content');
  if (!nav || !postContent) return;

  const headings = postContent.querySelectorAll('h2, h3, h4');
  if (headings.length === 0) {
    const sidebar = document.getElementById('toc-sidebar');
    if (sidebar) sidebar.style.display = 'none';
    return;
  }

  headings.forEach(function (h, i) {
    if (!h.id) {
      h.id = 'heading-' + i + '-' + h.textContent.trim()
        .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    }
    const a = document.createElement('a');
    a.href = '#' + h.id;
    a.textContent = h.textContent;
    a.className = 'toc-' + h.tagName.toLowerCase();
    nav.appendChild(a);
  });

  // Highlight active section on scroll
  const tocLinks = nav.querySelectorAll('a');
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        tocLinks.forEach(function (a) { a.classList.remove('active'); });
        const active = nav.querySelector('a[href="#' + entry.target.id + '"]');
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-10% 0px -80% 0px' });

  headings.forEach(function (h) { observer.observe(h); });
})();
