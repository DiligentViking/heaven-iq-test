const btnCancel = document.querySelector('.cancel');
const btnSend = document.querySelector('.send');

const prev_page = localStorage.getItem('prev-page');
const referrer = prev_page ? prev_page : 'about';

btnCancel.addEventListener('click', () => {
  window.location.href = `./${referrer}.html`;
});
btnSend.addEventListener('click', () => {
  alert('Message sent!');
  window.location.href = `./${referrer}.html`;
});
