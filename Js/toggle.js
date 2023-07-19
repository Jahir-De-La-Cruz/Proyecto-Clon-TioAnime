document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.getElementById('container__toggle');
  var body = document.querySelector('body');
  var icon = document.getElementById('icon');
  var text = document.getElementById('text');

  toggle.onclick = function () {
      toggle.classList.toggle('active');
      body.classList.toggle('active');

      if (toggle.classList.contains('active')) {
          icon.classList.replace('fa-sun', 'fa-moon');
          text.textContent = 'Noche';
      } else {
          icon.classList.replace('fa-moon', 'fa-sun');
          text.textContent = 'Día';
      }
  }
});
