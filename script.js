const carouselTrack = document.querySelector('.carousel-track');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const items = document.querySelectorAll('.carousel-item');

let currentIndex = 0;

prevBtn.addEventListener('click', () => {
  currentIndex = Math.max(currentIndex - 1, 0);
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = Math.min(currentIndex + 1, items.length - 1);
  updateCarousel();
});

function updateCarousel() {
  const itemWidth = items[currentIndex].offsetWidth;
  const offset = -currentIndex * itemWidth;
  carouselTrack.style.transform = `translateX(${offset}px)`;
}

updateCarousel();

document.addEventListener("DOMContentLoaded", function() {
    const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
    const mobileMenu = document.querySelector(".menu");
    
    mobileMenuIcon.addEventListener("click", function() {
        mobileMenu.classList.toggle("mobile-menu-open");
    });
});







