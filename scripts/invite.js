const btnCancel = document.querySelector('.cancel');
btnCancel.addEventListener('click', () => {
  window.location.href = './about-us.html';
});

const btnSend = document.querySelector('.send');
btnSend.addEventListener('click', () => {
  alert('Message sent!');  // i need to learn about some backend
  window.location.href = './about-us.html';
});
