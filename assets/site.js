(function () {
  'use strict';
  var supported = ['en', 'ko', 'ja', 'zh'];
  var titles = JSON.parse(document.body.dataset.titles || '{}');
  var dialog = document.querySelector('.contact-dialog');
  var feedback = document.querySelector('.contact-feedback');
  var opener;
  function currentLanguage() { return document.documentElement.lang === 'zh-CN' ? 'zh' : document.documentElement.lang; }
  function select(language, persist) {
    if (supported.indexOf(language) < 0) language = 'en';
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : language;
    if (titles[language]) document.title = titles[language];
    document.querySelectorAll('[data-set-lang]').forEach(function (link) {
      if (link.dataset.setLang === language) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
    document.querySelectorAll('[data-locale-link]').forEach(function (link) {
      var url = new URL(link.href); url.searchParams.set('lang', language); link.href = url.href;
    });
    if (persist) {
      try { localStorage.setItem('grovemind-language', language); } catch (_) {}
      var url = new URL(location.href); url.searchParams.set('lang', language);
      if (/-(en|ko|ja|zh)$/.test(url.hash)) url.hash = url.hash.replace(/-(en|ko|ja|zh)$/, '-' + language);
      else if (/^#(english|korean|japanese|chinese)$/.test(url.hash)) url.hash = '';
      history.replaceState(null, '', url.pathname + url.search + url.hash);
    }
    if (feedback) feedback.textContent = '';
  }
  document.querySelectorAll('[data-set-lang]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault(); select(link.dataset.setLang, true);
    });
  });
  select(currentLanguage(), false);
  window.addEventListener('hashchange', function () {
    var match = location.hash.match(/-(en|ko|ja|zh)$/);
    if (match) select(match[1], false);
  });
  document.querySelectorAll('[data-contact]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      if (!dialog || typeof dialog.showModal !== 'function' || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault(); opener = link; feedback.textContent = ''; dialog.showModal();
      dialog.querySelector('[data-copy-email]').focus();
    });
  });
  if (dialog) {
    dialog.querySelector('[data-close-contact]').addEventListener('click', function () { dialog.close(); });
    dialog.addEventListener('close', function () { if (opener) opener.focus(); });
    dialog.querySelector('[data-copy-email]').addEventListener('click', async function () {
      var copied = false;
      try { await navigator.clipboard.writeText('kimsung92@gmail.com'); copied = true; } catch (_) {
        var input = dialog.querySelector('.email-value'); input.focus(); input.select();
        try { copied = document.execCommand('copy'); } catch (_) {}
      }
      var messages = copied ? {
        en: 'Email address copied.', ko: '이메일 주소를 복사했습니다.', ja: 'メールアドレスをコピーしました。', zh: '邮箱已复制。'
      } : {
        en: 'Select and copy the email address above.', ko: '위 이메일 주소를 선택하여 복사해 주세요.', ja: '上のメールアドレスを選択してコピーしてください。', zh: '请选中上方邮箱地址并手动复制。'
      };
      feedback.textContent = messages[currentLanguage()] || messages.en;
    });
  }
})();
