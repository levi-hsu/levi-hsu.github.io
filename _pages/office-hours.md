---
layout: page
title: free learning help
permalink: /office-hours/
---

<div class="office-hours">
  <div class="language-switch" role="group" aria-label="Choose language">
    <button class="language-option active" type="button" data-lang-switch="en">English</button>
    <button class="language-option" type="button" data-lang-switch="zh">繁體中文</button>
  </div>

  <div data-lang-panel="en">
    <p class="office-hours-intro">
      I offer a small free learning help service for students who would like mathematical or academic guidance, especially students who do not have sufficient physical resources, local academic support, or people nearby who can help them.
    </p>

    <p class="office-hours-intro office-hours-intro-secondary">
      The service is personal in scale: I read each request first, then decide whether I can respond usefully.
    </p>

    <div class="office-hours-action office-hours-action-top">
      <a class="btn-link office-hours-apply-link" href="{{ '/office-hours/apply/' | relative_url }}">Open request form</a>
    </div>

    <section class="office-hours-section">
      <h2>What I can help with</h2>
      <ul>
        <li>Mathematical thinking: how to approach a problem and develop better habits of thought.</li>
        <li>Graduate school applications, especially for students applying abroad in mathematics or nearby areas.</li>
        <li>Self-directed research: choosing papers, finding a direction, or starting an independent reading project.</li>
        <li>Light research advising on an ongoing project or reading plan.</li>
        <li>Learning partner sessions, where you explain what you have learned and I ask questions or push back.</li>
      </ul>
    </section>

    <section class="office-hours-section">
      <h2>What I cannot help with</h2>
      <ul>
        <li>I do not solve homework or problem sets for you.</li>
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
        I aim to confirm, decline, or ask for clarification within about five business days.
      </p>
    </section>

    <section class="office-hours-section">
      <h2>Before you submit</h2>
      <p>
        Please describe your situation clearly and include a link to any relevant material, such as a problem set, notes, paper, Overleaf project, GitHub repository, or shared drive folder. A precise question is much easier to answer well than a general request.
      </p>
    </section>

    <p class="office-hours-note office-hours-closing">
      If your situation fits this purpose, you are welcome to send a request.
    </p>
  </div>

  <div data-lang-panel="zh" hidden>
    <p class="office-hours-intro">
      我提供一個小規模的免費學習協助服務，給希望獲得數學或學術方向建議的學生，尤其是身邊缺乏實體資源、在地學術支持，或缺少可以討論的人之學生。
    </p>

    <p class="office-hours-intro office-hours-intro-secondary">
      這是一個個人性質的服務：我會先閱讀每一份申請，再判斷我是否能提供有幫助的回應。
    </p>

    <div class="office-hours-action office-hours-action-top">
      <a class="btn-link office-hours-apply-link" href="{{ '/office-hours/apply/?lang=zh' | relative_url }}">填寫申請表</a>
    </div>

    <section class="office-hours-section">
      <h2>我可以協助的方向</h2>
      <ul>
        <li>數學思考：如何接近一個問題，以及如何培養更好的思考習慣。</li>
        <li>研究所申請，特別是數學或相關領域的海外申請。</li>
        <li>自主研究：選擇論文、尋找方向，或開始獨立閱讀計畫。</li>
        <li>對正在進行的研究或閱讀計畫提供輕量建議。</li>
        <li>學習夥伴形式：你說明自己學到的內容，我聆聽、提問，並給予回饋。</li>
      </ul>
    </section>

    <section class="office-hours-section">
      <h2>我無法協助的內容</h2>
      <ul>
        <li>我不會代寫或直接解完作業、問題集。</li>
        <li>我不提供數學競賽或奧林匹亞訓練。</li>
        <li>若大學或研究所程度的主題超出我的能力範圍，我可能會婉拒。</li>
        <li>在閱讀問題或材料之前，我無法保證能安排線上會議。</li>
      </ul>
    </section>

    <section class="office-hours-section">
      <h2>申請如何被審閱</h2>
      <p>
        你可以選擇書面回覆或線上會議。我收到申請後，會先閱讀問題，確認是否符合我的背景與目前能負擔的時間，再以 email 回覆。如果線上會議比較合適，我們會再另外協調時間。
      </p>
      <p class="office-hours-note">
        我預計在約五個工作天內確認、婉拒，或詢問進一步資訊。
      </p>
    </section>

    <section class="office-hours-section">
      <h2>填寫前請先準備</h2>
      <p>
        請清楚描述你的情況，並附上相關材料連結，例如問題集、筆記、論文、Overleaf 專案、GitHub repository，或共享雲端資料夾。具體的問題通常比籠統的請求更容易得到有用回應。
      </p>
    </section>

    <p class="office-hours-note office-hours-closing">
      如果你的情況符合這個服務的目的，歡迎送出申請。
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
