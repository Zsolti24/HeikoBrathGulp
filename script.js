// // import Swiper from 'swiper';

// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
direction: 'horizontal',
loop: true,
pagination: {
    el: '.swiper-pagination',
},
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},
scrollbar: {
    el: '.swiper-scrollbar',
},
});
});