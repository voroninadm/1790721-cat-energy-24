//burger-button

let menuButton = document.querySelector('.menu-toggle');
let headerNav = document.querySelector('.header-nav');

menuButton.onclick = function () {
  menuButton.classList.toggle('menu-toggle--active');
  headerNav.classList.toggle('header-nav--active');
}
