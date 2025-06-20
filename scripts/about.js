document.querySelector('.feedback').addEventListener('click', () => {
  localStorage.setItem('prev-page', 'about');
  window.location.href = './feedback.html';
});

document.querySelector('.back').addEventListener('click', () => {
  const prev_page = localStorage.getItem('prev-page');
  const referrer = (prev_page && prev_page !== 'about') ? prev_page : 'index';
  window.location.href = `./${referrer}.html`;
});
