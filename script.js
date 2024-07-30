document.addEventListener('DOMContentLoaded', function () {

    var rellax = new Rellax('.bcgImg');
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

function swapImage(thumbnail) {
    const mainImage = document.getElementById('mainImage');
    const tempSrc = mainImage.src;
    mainImage.src = thumbnail.src;
    thumbnail.src = tempSrc;
}





document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const cards = Array.from(carousel.querySelectorAll('.card'));
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    function updateCarousel() {
        carousel.innerHTML = '';
        cards.forEach(card => {
            carousel.appendChild(card);
        });
        cards.forEach((card, index) => {
            card.classList.remove('large'); 
            if (index === 1) { 
                card.classList.add('large');
            }
        });
    }

    prevButton.addEventListener('click', () => {
        cards.push(cards.shift());
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        cards.unshift(cards.pop());
        updateCarousel();
    });

    updateCarousel();
});

function HamburgerClick(){
    const sidebar = document.querySelector('.sideBar');
    if(sidebar.classList.contains('active')){
        sidebar.classList.remove('active');
    }
    else{
        sidebar.classList.add('active');
    }
}

var time = false;
var currentMode = "dark";
function modeChange(){
    if (time==false){
        time=true;
        const logo = document.querySelector('.imgLogo');
        logo.classList.add('spin');


        if(currentMode=="dark"){
            document.body.style.backgroundColor = "#c5c5c5";
            currentMode="light";
        }
        else{
            document.body.style.backgroundColor = "#000000F0";
            currentMode="dark";
        }

        setTimeout(function () {
            logo.classList.remove('spin');
            time=false;
        }, 2500);
    }
    
}



function closePopUp(){
    const popUpElement = document.querySelector('.popUp');
    popUpElement.style.zIndex = "-1";
    popUpElement.style.opacity = "0";
    document.body.style.overflow="auto";
}




let accumulatedScrollTime = 0;
let lastScrollEventTime = null;
let popped = false;
const SCROLL_THRESHOLD = 5000; 

function handleScroll() {
  const currentTime = Date.now();

  if (lastScrollEventTime !== null) {
    accumulatedScrollTime += (currentTime - lastScrollEventTime);
  }

  lastScrollEventTime = currentTime;

  if (accumulatedScrollTime >= SCROLL_THRESHOLD) {
    if(popped == false){
        popped = true;
        const popUpElement = document.querySelector('.popUp');
        popUpElement.style.zIndex = "25";
        popUpElement.style.opacity = "1";
        document.body.style.overflow="hidden";
    }
  }
}

window.addEventListener('scroll', handleScroll);