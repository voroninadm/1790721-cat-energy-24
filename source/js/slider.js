let sliderButtonBefore = document.querySelector('.control__button--before');
let sliderButtonAfter = document.querySelector('.control__button--after');
let sliderToggle = document.querySelector('.control__range');
let sliderCanvas = document.querySelector('.slider');


sliderButtonBefore.onclick = function() {
  sliderToggle.classList.remove('control__range--move');
  sliderCanvas.style.setProperty('--current-value', '1');
}

sliderButtonAfter.onclick = function() {
  sliderToggle.classList.add('control__range--move');
  sliderCanvas.style.setProperty('--current-value', '0');
}
