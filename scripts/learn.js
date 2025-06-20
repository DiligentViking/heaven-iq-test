const prev_page = localStorage.getItem('prev-page');
const referrer = (prev_page === 'score') ? 'score' : 'index';

document.querySelector('.back').addEventListener('click', () => {
  window.location.href = `./${referrer}.html`;
});
