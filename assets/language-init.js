(function () {
  var supported = ['en', 'ko', 'ja', 'zh'];
  var language = new URLSearchParams(location.search).get('lang');
  if (supported.indexOf(language) < 0) {
    var match = location.hash.match(/-(en|ko|ja|zh)$/);
    language = match ? match[1] : ({ '#english': 'en', '#korean': 'ko', '#japanese': 'ja', '#chinese': 'zh' })[location.hash];
  }
  if (supported.indexOf(language) < 0) {
    try { language = localStorage.getItem('grovemind-language'); } catch (_) {}
  }
  if (supported.indexOf(language) < 0) language = 'en';
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : language;
  document.documentElement.classList.add('js');
})();
