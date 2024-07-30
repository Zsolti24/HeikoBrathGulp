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
        // Középső kártya nagyobbítása
        cards.forEach((card, index) => {
            card.classList.remove('large'); // Eltávolítjuk a nagyobb osztályt
            if (index === 1) { // Középső kártya (index 1)
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
