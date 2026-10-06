document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    loop: true, 
    loopedSlides: 8,
    slidesPerView: "auto",
    spaceBetween: 24,
    centeredSlides: true,
    touchThreshold: 15,
    speed: 400, 
     
    breakpoints: {
      768: { spaceBetween: 40 },   
    }
  });
});



let burgerButton = document.querySelector('[data-js-header-button]')
let overlayElement = document.querySelector('[data-js-header-overlay]')

burgerButton.addEventListener('click',()=>{
  burgerButton.classList.toggle('is-active')
  overlayElement.classList.toggle('is-active')
  document.documentElement.classList.toggle('is-lock')
})