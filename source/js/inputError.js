//Проверка формы
const inputReq = document.querySelectorAll(".form-group__input[required]");
const btnSubmit = document.querySelector(".form__button");

btnSubmit.onclick = function() {
  for (let i=0; i<inputReq.length; i++){
    if (inputReq[i].value === "") {
      inputReq[i].classList.add("form-group__input--error");
    } else {
      inputReq[i].classList.remove("form-group__input--error");
    }
  }
};