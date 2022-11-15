const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

btn.addEventListener('click', () => {
  btn.classList.toggle('open');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');
});

const yearSpans = document.querySelectorAll('#currentYear');
const currentYear = new Date().getFullYear();
yearSpans.forEach((yearSpan) => {
  yearSpan.textContent = currentYear;
});
