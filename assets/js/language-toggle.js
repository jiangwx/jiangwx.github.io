document.addEventListener('DOMContentLoaded', function () {
  var toggleButtons = document.querySelectorAll('[data-language-toggle]');

  if (!toggleButtons.length) {
    return;
  }

  var storageKey = 'jiangwx-site-language';

  function readLanguage() {
    try {
      return window.localStorage.getItem(storageKey) === 'en' ? 'en' : 'zh';
    } catch (error) {
      return 'zh';
    }
  }

  function writeLanguage(language) {
    try {
      window.localStorage.setItem(storageKey, language);
    } catch (error) {
      return;
    }
  }

  function applyLanguage(language) {
    var nextLanguage = language === 'en' ? 'en' : 'zh';
    document.documentElement.setAttribute('lang', nextLanguage === 'en' ? 'en' : 'zh-CN');

    document.querySelectorAll('[data-language-root]').forEach(function (root) {
      root.setAttribute('data-language', nextLanguage);
    });

    document.querySelectorAll('[data-language-panel]').forEach(function (element) {
      element.hidden = element.getAttribute('data-language-panel') !== nextLanguage;
    });

    toggleButtons.forEach(function (button) {
      button.textContent = nextLanguage === 'zh' ? 'English' : '中文';
      button.setAttribute('aria-label', nextLanguage === 'zh' ? '切换到英文' : '切换到中文');
      button.classList.toggle('is-language-active', nextLanguage === 'en');

      var navItem = button.closest('.nav-item');
      if (navItem) {
        navItem.classList.toggle('language-active', nextLanguage === 'en');
      }
    });
  }

  toggleButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var currentLanguage = readLanguage();
      var nextLanguage = currentLanguage === 'zh' ? 'en' : 'zh';
      writeLanguage(nextLanguage);
      applyLanguage(nextLanguage);
    });
  });

  applyLanguage(readLanguage());
});