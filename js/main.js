document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    loop: true, 
    slidesPerView: 3,
    spaceBetween: 24,

    breakpoints: {
      768: { spaceBetween: 40 },   // на планшете
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