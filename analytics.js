// 自架流量統計；data-endpoint 指定本網站的 HTTPS 收集網址。
(() => {
  'use strict';
  const endpoint = document.currentScript?.dataset.endpoint;
  if (!endpoint || !endpoint.startsWith('https://')) return;
  if (navigator.doNotTrack === '1' || navigator.globalPrivacyControl === true) {
    console.info('Portfolio analytics: skipped because this browser requests privacy.');
    return;
  }
  try {
    let session;
    const now = Date.now();
    try { session = JSON.parse(sessionStorage.getItem('portfolio-stats-session')); } catch (_) {}
    if (!session?.id || now - session.last > 1800000) session = {id: crypto.randomUUID()};
    session.last = now;
    try { sessionStorage.setItem('portfolio-stats-session', JSON.stringify(session)); } catch (_) {}
    let referrer = '';
    try { referrer = new URL(document.referrer).hostname; } catch (_) {}
    const ua = navigator.userAgent;
    const device = /iPad|Tablet|Android(?!.*Mobile)/i.test(ua) ? 'tablet' : /Mobile/i.test(ua) ? 'mobile' : 'desktop';
    const payload = JSON.stringify({event: crypto.randomUUID(), session: session.id, path: location.pathname, referrer, device, language: navigator.language || 'unknown'});
    fetch(endpoint, {method: 'POST', mode: 'cors', credentials: 'omit', keepalive: true, referrerPolicy: 'no-referrer', headers: {'Content-Type': 'text/plain'}, body: payload})
      .then(response => { if (!response.ok) console.warn('Portfolio analytics: collection unavailable.'); })
      .catch(() => console.warn('Portfolio analytics: connection unavailable.'));
  } catch (_) { console.warn('Portfolio analytics: browser feature unavailable.'); }
})();
