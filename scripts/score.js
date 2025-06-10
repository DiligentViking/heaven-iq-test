// Get and display score
const score = document.querySelector('.score');
const scoreVar = localStorage.getItem('score');
score.textContent = scoreVar;
localStorage.clear();

// Link option-buttons to referred pages
const options = document.querySelector('.options');
options.addEventListener('click', (e) => {
  localStorage.setItem('prev-page', 'score');
  const choice = e.target.classList[1];
  if (choice) { // options container only has classList[0]
    window.location.href = `./${choice}.html`;
  }
});

// Link home button to index
document.querySelector('.home').addEventListener('click', () => {
  window.location.href = './index.html';
});
