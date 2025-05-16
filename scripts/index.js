const containerDiv = document.querySelector('.container');
const startTestLink = document.querySelector('.start-test');
const noteModal = document.querySelector('.note');
const okBtn = document.querySelector('.ok');

startTestLink.addEventListener('click', (e) => {
  e.preventDefault();  /* so i guess the a is just for accessibility? (because <a> tags are for navigation, <button> tags are for other actions) */
  // container.setAttribute('style', 'visibility: hidden');  // but this makes the background image disappear as well
  const elems = Array.from(containerDiv.children);
  elems.forEach((elem) => elem.setAttribute('style', 'opacity: 0; visibility: hidden'));
  noteModal.showModal();
  noteModal.setAttribute('style', 'opacity: 1');  // i had to put it after
});

okBtn.addEventListener('click', () => {
  window.location.href = './quiz.html';
});
