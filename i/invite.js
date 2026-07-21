(function () {
  var alphabet = /^[23456789ABCDEFGHJKLMNPQRSTUVWXYZ]{52}$/;
  var parts = window.location.pathname.split('/').filter(Boolean);
  var token = parts.length === 2 && parts[0] === 'i' ? parts[1] : '';
  if (!token) token = new URLSearchParams(window.location.search).get('token') || '';
  token = token.trim().toUpperCase();
  var invite = document.getElementById('invite');
  var missing = document.getElementById('missing');
  if (!alphabet.test(token)) {
    invite.hidden = true;
    missing.hidden = false;
    return;
  }

  // The app receives only the opaque signed token. No phone or user id is
  // placed in the URL, DOM, analytics, localStorage, or logs.
  document.getElementById('open-app').href = 'thedouble://invite/' + token;
  document.getElementById('open-app').click();

  var ua = navigator.userAgent || '';
  var ios = document.getElementById('ios');
  var android = document.getElementById('android');
  if (/Android/i.test(ua)) {
    android.classList.add('primary');
    ios.classList.remove('primary');
  }
})();
