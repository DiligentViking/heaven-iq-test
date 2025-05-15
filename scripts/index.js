const container = document.querySelector('.container');
const startTest = document.querySelector('.start-test');
const note = document.querySelector('.note');

startTest.addEventListener('click', (e) => {
  e.preventDefault();  /* so i guess the a is just for accessibility? (because <a> tags are for navigation, <button> tags are for other actions) */
  const elems = Array.from(container.children);
  elems.forEach((elem) => elem.setAttribute('style', 'visibility: hidden'));
  note.showModal();
});
