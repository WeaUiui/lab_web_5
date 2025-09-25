// Ждем загрузки DOM, чтобы элементы точно были доступны
window.addEventListener('DOMContentLoaded', () => {

  const box = document.getElementById('box');


  let pos = 0;
  let animation;
  let direction = 1; 

  function animateBox() {

    pos += 5 * direction;
    box.style.left = pos + 'px';

    if (pos >= window.innerWidth - box.offsetWidth) {
      direction = -1;
    } else if (pos <= 0) {
      direction = 1;
    }

    animation = requestAnimationFrame(animateBox);
  }

  document.getElementById('startBtn').addEventListener('click', () => {
    cancelAnimationFrame(animation); 
    animateBox();
  });

  document.getElementById('stopBtn').addEventListener('click', () => {
    cancelAnimationFrame(animation);
  });

  document.getElementById('resetBtn').addEventListener('click', () => {
    cancelAnimationFrame(animation);
    pos = 0;
    direction = 1;
    box.style.left = pos + 'px';
  });

});