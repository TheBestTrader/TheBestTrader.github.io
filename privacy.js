(() => {
  'use strict';
  const key = 'portfolio-stats-excluded';
  const en = new URLSearchParams(location.search).get('lang') === 'en';
  const messages = en ? {
    back:'← Back to résumé', eyebrow:'ANALYTICS PREFERENCE · THIS BROWSER', title:'Exclude your own visits',
    intro:'Keep your own visits out of the count while reviewing, editing and sharing your résumé.',
    settingTitle:'Current status', exclude:'Exclude this browser', include:'Allow analytics again',
    localOnly:'This preference stays in this browser. No sign-in or IP identification is used, and other visitors are unaffected.',
    notesTitle:'When do I need to set this again?',
    devices:'Set this separately on your phone, other browsers, browser profiles and private windows.',
    clearing:'Clearing this site’s data or closing a private window may remove the preference.',
    history:'Only future visits are excluded. Existing records cannot be identified as yours or removed automatically.',
    signals:'Allowing analytics again only removes this site’s exclusion preference. Browser privacy requests are still respected.',
    untracked:'This settings page does not send analytics. JavaScript is needed for these controls; when JavaScript is disabled, visit tracking also does not run.',
    excluded:'This browser is excluded. Future visits to the résumé pages will not send analytics.',
    included:'This browser currently allows visit analytics.',
    signal:'Your browser requests Do Not Track or Global Privacy Control. This site skips analytics even if you allow it here.',
    storageError:'The preference cannot be read or saved in this browser. This site skips analytics while storage is unavailable.',
    saveError:'The preference could not be saved. Exclusion has not been confirmed; please check this browser’s site-data settings.'
  } : {
    excluded:'已排除此瀏覽器。之後瀏覽履歷頁面，不會送出流量統計。',
    included:'目前允許統計這個瀏覽器的瀏覽。',
    signal:'這個瀏覽器已要求不追蹤或全域隱私控制；即使在此允許，本站仍會略過統計。',
    storageError:'目前無法讀取或儲存這個瀏覽器的設定；本站會在無法讀取設定時略過統計。',
    saveError:'設定未能保存，尚未確認排除成功。請檢查瀏覽器是否允許儲存本站資料。'
  };
  if (en) {
    document.documentElement.lang = 'en';
    document.title = 'Exclude your visits | Jia-You Li';
    document.querySelectorAll('[data-text]').forEach(el => { el.textContent = messages[el.dataset.text]; });
    document.getElementById('back').href = 'en.html';
    document.getElementById('language').href = 'privacy.html';
    document.getElementById('language').textContent = '繁體中文';
  }
  const state = document.getElementById('preference');
  const excludeButton = document.getElementById('exclude');
  const includeButton = document.getElementById('include');
  const signal = navigator.doNotTrack === '1' || navigator.globalPrivacyControl === true;
  function render() {
    document.getElementById('privacy-signal').textContent = signal ? messages.signal : '';
    try {
      const excluded = localStorage.getItem(key) === '1';
      state.textContent = excluded ? messages.excluded : signal ? messages.signal : messages.included;
      state.dataset.state = excluded || signal ? 'excluded' : 'included';
      document.getElementById('privacy-signal').textContent = excluded && signal ? messages.signal : '';
      excludeButton.disabled = excluded;
      includeButton.disabled = !excluded;
    } catch (_) {
      state.textContent = messages.storageError;
      state.dataset.state = 'unavailable';
      excludeButton.disabled = true;
      includeButton.disabled = true;
    }
  }
  function save(excluded) {
    try {
      if (excluded) localStorage.setItem(key, '1');
      else localStorage.removeItem(key);
      if ((localStorage.getItem(key) === '1') !== excluded) throw new Error('Preference was not retained');
      try { sessionStorage.removeItem('portfolio-stats-session'); } catch (_) {}
      render();
    } catch (_) {
      state.textContent = messages.saveError;
      state.dataset.state = 'unavailable';
    }
  }
  excludeButton.addEventListener('click', () => save(true));
  includeButton.addEventListener('click', () => save(false));
  addEventListener('storage', event => { if (event.key === key || event.key === null) render(); });
  render();
})();
