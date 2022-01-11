let sliderButtonBefore = document.querySelector(".control__button--before");
let sliderButtonAfter = document.querySelector(".control__button--after");
let sliderToggle = document.querySelector(".control__range");
let sliderCanvas = document.querySelector(".slider");
let scale = document.querySelector(".control__scale");

//slider buttons
sliderButtonBefore.onclick = function () {
  sliderToggle.classList.remove("control__range--move");
  sliderCanvas.style.setProperty("--current-value", "1");
}

sliderButtonAfter.onclick = function () {
  sliderToggle.classList.add("control__range--move");
  sliderCanvas.style.setProperty("--current-value", "0");
}


//slider-function
sliderToggle.onmousedown = function (event) {
  if (document.documentElement.clientWidth > 768) {

    let shiftX = event.clientX - (sliderToggle.getBoundingClientRect().left - 84);

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

    function onMouseMove(event) {

      let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;

      // toggle only in scale
      if (newLeft < 0) {
        newLeft = 0;
      }
      let rightEdge = scale.offsetWidth - sliderToggle.offsetWidth - 2;
      if (newLeft > rightEdge) {
        newLeft = rightEdge;
      }

      sliderToggle.style.left = newLeft + "px";
      let toggleCurrent = sliderToggle.style.left = ((newLeft) / 392);
      sliderCanvas.style.setProperty("--current-value", 1 - toggleCurrent);

    }

    function onMouseUp() {
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mousemove", onMouseMove);
    }

  };
}
