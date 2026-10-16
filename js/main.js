// Small enhancements. The site works without JavaScript.
(function () {
  // Mobile menu toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? 'Close' : 'Menu';
    });
  }

  // Keep the footer year current
  var years = document.querySelectorAll('.js-year');
  for (var i = 0; i < years.length; i++) {
    years[i].textContent = new Date().getFullYear();
  }
})();
