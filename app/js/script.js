const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");
const fadeElems = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener('click', function () {
  console.log('click hamburger');

  if (header.classList.contains('open')) {
    //close hamburguer menu
    header.classList.remove('open');
    body.classList.remove('no-scroll');
    fadeElems.forEach(function(element){
      element.classList.remove('fade-in');
      element.classList.add('fade-out');  
    });
  } 
  else {
    //open hamburguer menu
    header.classList.add('open');
    body.classList.add('no-scroll');
    fadeElems.forEach(function(element){
      element.classList.remove('fade-out');
      element.classList.add('fade-in');  
    });
    }
});
