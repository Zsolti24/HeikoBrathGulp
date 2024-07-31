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
            const images = card.querySelectorAll('img');
            const textLarge = card.querySelector('.textLarge');
            if (index === 1) {
                card.classList.add('large');
                images.forEach(image => {
                    image.style.display = 'block';
                });
                if (textLarge) {
                    textLarge.style.display = 'block';
                }
            } else {
                images.forEach(image => {
                    image.style.display = 'none';
                });
                if (textLarge) {
                    textLarge.style.display = 'none';
                }
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
            document.body.style.backgroundColor = "#c9c9c9";
            document.body.style.color = "#000000F0";
            document.querySelector('.navBottom').style.backgroundColor = "#c1c1c1";
            document.querySelector('.Description').style.color = "#000000F0";
            document.querySelector('.reservationTexth1').style.color = "#000000F0";
            document.querySelector('.enumeration').style.color = "#000000F0";
            document.querySelector('.productTitle').style.color = "#000000F0";
            document.querySelector('.productSecondTitle').style.color = "#000000F0";
            document.querySelector('.productDescription').style.color = "#000000F0";
            document.querySelector('.ProductDescriptionButton').style.color = "#000000F0";
            document.querySelector('.spicesTexth1').style.color = "#000000F0";
            document.querySelector('.spicesh2').style.color = "#000000F0";
            document.querySelector('.spicesDescription').style.color = "#000000F0";
            document.querySelector('.deliveryTitle').style.color = "#000000F0";
            document.querySelector('.otherSideText').style.color = "#000000F0";
            const redButtons = document.querySelectorAll('.redButton');
            redButtons.forEach(rb => {
                rb.style.color = '#000000F0'; 
              });document.querySelector('.medalText').style.color = "#000000F0";
            const medalComponentTexts = document.querySelectorAll('.medalComponentText');
            medalComponentTexts.forEach(mDT => {
                mDT.style.color = '#000000F0'; 
              });
            document.querySelector('.Recommendation').style.color = "#000000F0";
            document.querySelector('.RecommendationTitle').style.color = "#000000F0";
            const messages = document.querySelectorAll('.message');
            messages.forEach(msg => {
                msg.style.color = '#000000F0'; 
              });
              const senders = document.querySelectorAll('.sender');
              senders.forEach(s => {
                  s.style.color = '#000000F0'; 
                });
            document.querySelector('.card.large').style.color = "#000000F0";
            document.querySelector('.footerBottomText').style.color = "#000000F0";
            document.querySelector('.footerBottomTextSP').style.color = "#000000F0";
            document.querySelector('.footerTopRightText').style.color = "#000000F0";
            document.querySelector('.addressesTexrt').style.color = "#000000F0";
            currentMode="light";
        }
        else{
            document.body.style.backgroundColor = "#000000F0";
            document.body.style.color = "#FFFFFF";
            document.querySelector('.navBottom').style.backgroundColor = "#2B2B2B";
            document.querySelector('.Description').style.color = "#FFFFFF";
            document.querySelector('.reservationTexth1').style.color = "#FFFFFF";
            document.querySelector('.enumeration').style.color = "#FFFFFF";
            document.querySelector('.productTitle').style.color = "#FFFFFF";
            document.querySelector('.productSecondTitle').style.color = "#FFFFFF";
            document.querySelector('.productDescription').style.color = "#FFFFFF";
            document.querySelector('.ProductDescriptionButton').style.color = "#FFFFFF";
            document.querySelector('.spicesTexth1').style.color = "#FFFFFF";
            document.querySelector('.spicesh2').style.color = "#FFFFFF";
            document.querySelector('.spicesDescription').style.color = "#FFFFFF";
            document.querySelector('.deliveryTitle').style.color = "#FFFFFF";
            document.querySelector('.otherSideText').style.color = "#FFFFFF";
            const redButtons = document.querySelectorAll('.redButton');
            redButtons.forEach(rb => {
                rb.style.color = '#FFFFFF'; 
              });document.querySelector('.medalText').style.color = "#FFFFFF";
            const medalComponentTexts = document.querySelectorAll('.medalComponentText');
            medalComponentTexts.forEach(mDT => {
                mDT.style.color = '#FFFFFF'; 
              });
            document.querySelector('.Recommendation').style.color = "#FFFFFF";
            document.querySelector('.RecommendationTitle').style.color = "#FFFFFF";
            const messages = document.querySelectorAll('.message');
            messages.forEach(msg => {
                msg.style.color = '#FFFFFF'; 
              });
              const senders = document.querySelectorAll('.sender');
              senders.forEach(s => {
                  s.style.color = '#FFFFFF'; 
                });
            document.querySelector('.card.large').style.color = "#FFFFFF";
            document.querySelector('.footerBottomText').style.color = "#FFFFFF";
            document.querySelector('.footerBottomTextSP').style.color = "#FFFFFF";
            document.querySelector('.footerTopRightText').style.color = "#FFFFFF";
            document.querySelector('.addressesTexrt').style.color = "#FFFFFF";
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