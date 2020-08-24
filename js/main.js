'use strict';

console.log('holi');

function playSound(ev) {
  let code = '';
  if (ev.keyCode) {
    code = ev.keyCode;
  } else {
    code = this.dataset.key;
  }

  const audio = document.querySelector(`audio[data-key="${code}"]`);
  const key = document.querySelector(`.key[data-key="${code}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();

  key.classList.add('playing');
}

function removeTransition(ev) {
  if (ev.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
for (let i = 0, key; (key = keys[i]); i++) {
  key.addEventListener('transitionend', removeTransition);
  key.addEventListener('click', playSound);
}

window.addEventListener('keydown', playSound);
