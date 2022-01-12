//burger-button

let menuButton = document.querySelector(".menu-toggle");
let headerNav = document.querySelector(".header-nav");

  menuButton.classList.remove("menu-toggle--noJS");
  headerNav.classList.remove("header-nav--noJS");


  menuButton.addEventListener("click", function () {
    if (headerNav.classList.contains("header-nav--closed")) {
      headerNav.classList.remove("header-nav--closed");
      headerNav.classList.add("header-nav--open");
      menuButton.classList.toggle("menu-toggle--active");
    }
    else {
      headerNav.classList.remove("header-nav--open");
      headerNav.classList.add("header-nav--closed")
      menuButton.classList.toggle("menu-toggle--active");
    }
  });
