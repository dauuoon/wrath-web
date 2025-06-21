const clickSound = new Audio('src/assets/click-sound.mp3');
document.addEventListener('click', () => {
  clickSound.currentTime = 0; // 효과음을 처음부터 재생
  clickSound.play();
});