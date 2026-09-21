// 自架流量統計；data-endpoint 指定本網站的 HTTPS 收集網址。
(() => {
  'use strict';
  // A non-identifying DOM status makes collection failures diagnosable without logging visitor data.
  const status = value => { document.documentElement.dataset.analyticsStatus = value; };
  status('starting');
  const endpoint = document.currentScript?.dataset.endpoint;
  if (!endpoint || !endpoint.startsWith('https://')) {
    status('endpoint-unavailable');
    console.warn('Portfolio analytics: endpoint unavailable.');
    return;
  }
  // The preference is local to this website and browser profile, never a user identifier.
  function excluded() {
    try { return localStorage.getItem('portfolio-stats-excluded') === '1'; }
    catch (_) { return true; } // Do not collect if the privacy preference cannot be read.
  }
  if (excluded()) { status('excluded'); return; }
  if (navigator.doNotTrack === '1' || navigator.globalPrivacyControl === true) {
    status('browser-privacy');
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
    if (excluded()) { status('excluded'); return; }
    status('sending');
    fetch(endpoint, {method: 'POST', mode: 'cors', credentials: 'omit', keepalive: true, referrerPolicy: 'no-referrer', headers: {'Content-Type': 'text/plain'}, body: payload})
      .then(response => {
        status(response.ok ? 'recorded' : 'http-' + response.status);
        if (!response.ok) console.warn('Portfolio analytics: collection unavailable.');
      })
      .catch(() => { status('connection-unavailable'); console.warn('Portfolio analytics: connection unavailable.'); });
  } catch (_) { status('browser-feature-unavailable'); console.warn('Portfolio analytics: browser feature unavailable.'); }
})();
