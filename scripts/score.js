const score = document.querySelector('.score');
const scoreVar = localStorage.getItem('score');
score.textContent = scoreVar;
localStorage.clear();
