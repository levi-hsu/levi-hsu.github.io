---
layout: page
title: Free help
description: "Free educational and academic help for students with limited local resources, including tutoring, graduate school application sharing, and learning partner sessions."
permalink: /free-help/
---

<div class="office-hours">
  <div class="language-switch" role="group" aria-label="Choose language">
    <button class="language-option active" type="button" data-lang-switch="en">English</button>
    <button class="language-option" type="button" data-lang-switch="zh">繁體中文</button>
  </div>

  <div data-lang-panel="en">
    <p class="office-hours-intro">
      I offer a small, totally free learning help service for students with limited educational resources, local academic support, or people nearby who can help them.
    </p>

    <p class="office-hours-intro office-hours-intro-secondary">
      The service is personal in scale: I read each request, and then decide tell you whether I'm capable of your request.
    </p>

    <div class="office-hours-action office-hours-action-top">
      <a class="btn-link office-hours-apply-link" href="{{ '/free-help/apply/' | relative_url }}">Open request form</a>
    </div>

    <section class="office-hours-section">
      <h2>What I can help with</h2>
      <ul>
        <li>Tutoring: if you cannot afford local tutor fees, you can come to me (but please read the info below).</li>
        <li>Graduate school applications sharing. I do not have decent GPA, so if you do not have it either, maybe my experience may help.</li>
        <li>Learning partner sessions, where you explain what you have learned and I ask questions or push back.</li>
      </ul>
    </section>

    <section class="office-hours-section">
      <h2>What I cannot help with</h2>
      <ul>
        <li>I do not offer mathematics competition or olympiad preparation.</li>
        <li>I may decline undergraduate or graduate topics outside my current expertise.</li>
        <li>I cannot guarantee an online meeting before reviewing the question or materials.</li>
      </ul>
    </section>

    <section class="office-hours-section">
      <h2>How requests are reviewed</h2>
      <p>
        You can ask for either a written reply or an online meeting. After receiving your request, I will read the question, check whether it fits my background and capacity, and then reply by email. If a meeting seems useful, we will arrange the time manually.
      </p>
      <p class="office-hours-note">
        I aim to confirm, decline, or ask for clarification within about 2 days.
      </p>
    </section>

    <section class="office-hours-section">
      <h2>Before you submit</h2>
      <p>
        Please describe your situation clearly and provide any relevant material, such as a problem set, notes, paper, Overleaf project, GitHub repository, or shared drive folder. A precise question is much easier to answer well than a general request.
      </p>
    </section>

    <p class="office-hours-note office-hours-closing">
      If your situation fits this purpose, you are welcome to send a request.
    </p>
  </div>

  <div data-lang-panel="zh" hidden>
    <p class="office-hours-intro">
      為了幫助資源有限的同學，我想提供完全免費的線上助學服務。如果您有現實上的困難使您無法得到及時的幫助，請填寫以下表格。
    </p>

    <p class="office-hours-intro office-hours-intro-secondary">
      我會閱讀每一份申請，所以需要一些時間。不論您的要求是否成立，我都會回覆您。
    </p>

    <div class="office-hours-action office-hours-action-top">
      <a class="btn-link office-hours-apply-link" href="{{ '/free-help/apply/?lang=zh' | relative_url }}">填寫表單</a>
    </div>

    <section class="office-hours-section">
      <h2>我可以協助的方向</h2>
      <ul>
        <li>家教：若您無法負擔高額的家教費用，我可以幫您 (但請先閱讀以下資訊)。</li>
        <li>申請學校經驗分享。</li>
        <li>學習夥伴：您可以分享自己學到的內容，我會聆聽、提問，並給予回饋。</li>
      </ul>
    </section>

    <section class="office-hours-section">
      <h2>無法協助的內容</h2>
      <ul>
        <li>無法提供作業代寫。</li>
        <li>無法提供數學競賽或奧林匹亞相關解題服務。</li>
        <li>超出我能力範圍的大學或以上程度的習題。</li>
        <li>在閱讀您提供的問題或教材前，我無法保證能安排線上會議。</li>
      </ul>
    </section>

    <section class="office-hours-section">
      <h2>申請如何審閱</h2>
      <p>
        您可以選擇書面回覆或線上會議。收到申請後，會先閱讀問題，確認是否符合我的能力與目前能負擔的時間，再以 email 回覆。如果線上會議比較合適，我們可以再另外協調時間。
      </p>
      <p class="office-hours-note">
        預計於約兩天內確認、婉拒，或詢問進一步資訊。
      </p>
    </section>

    <section class="office-hours-section">
      <h2>填寫前請先準備</h2>
      <p>
        請清楚描述您的情況，並附上相關內容，例如作業、筆記、論文、Overleaf 連結、GitHub repository，或共享雲端資料夾。具體的問題比籠統的請求更容易得到有用回應哦～
      </p>
    </section>

    <p class="office-hours-note office-hours-closing">
      如果您的情況符合上述要求，歡迎提交表格。
    </p>
  </div>
</div>

<script>
  (function () {
    var buttons = document.querySelectorAll('[data-lang-switch]');
    var panels = document.querySelectorAll('[data-lang-panel]');
    if (!buttons.length || !panels.length) return;

    function setLanguage(lang) {
      buttons.forEach(function (button) {
        button.classList.toggle('active', button.dataset.langSwitch === lang);
      });
      panels.forEach(function (panel) {
        panel.hidden = panel.dataset.langPanel !== lang;
      });
      try {
        window.localStorage.setItem('officeHoursLanguage', lang);
      } catch (e) {}
    }

    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        setLanguage(button.dataset.langSwitch);
      });
    });

    var params = new URLSearchParams(window.location.search);
    var initial = params.get('lang') || window.localStorage.getItem('officeHoursLanguage') || 'en';
    setLanguage(initial === 'zh' ? 'zh' : 'en');
  })();
</script>
