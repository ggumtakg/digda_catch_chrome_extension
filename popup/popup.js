let score = 0;
let currentMole = -1;
let gameInterval = null;
let gameTimeout = null;
let timerInterval = null;

function randomHole() {
  return Math.floor(Math.random() * 9);
}

function showMole() {
  for (let i = 0; i < 9; i++) {
    document.getElementById(`hole${i}`).classList.remove('mole');
  }

  currentMole = randomHole();
  document.getElementById(`hole${currentMole}`).classList.add('mole');
}

function endGame() {
  clearInterval(gameInterval);
  clearTimeout(gameTimeout);
  clearInterval(timerInterval);
  currentMole = -1;

  for (let i = 0; i < 9; i++) {
    document.getElementById(`hole${i}`).classList.remove('mole');
  }

  alert(`게임 종료! 최종 점수: ${score}`);
}

function startGame() {
  score = 0;
  document.getElementById('score').textContent = score;
  document.getElementById('time').textContent = 30;

  if (gameInterval) clearInterval(gameInterval);
  if (gameTimeout) clearTimeout(gameTimeout);
  if (timerInterval) clearInterval(timerInterval);

  let remainingTime = 30;

  showMole();
  gameInterval = setInterval(showMole, 1000);
  gameTimeout = setTimeout(endGame, 30000);

  timerInterval = setInterval(() => {
    remainingTime--;
    document.getElementById('time').textContent = remainingTime;
    if (remainingTime <= 0) {
      clearInterval(timerInterval); // 안전장치
    }
  }, 1000);
}

document.querySelectorAll('.hole').forEach((hole, index) => {
  hole.addEventListener('click', () => {
    if (index === currentMole) {
      score++;
      document.getElementById('score').textContent = score;
      hole.classList.remove('mole');
      currentMole = -1;
    }
  });
});

document.getElementById('startBtn').addEventListener('click', startGame);
