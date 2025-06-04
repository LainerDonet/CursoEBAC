document.addEventListener("DOMContentLoaded", function() {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.carousel__slide');
  const dots = document.querySelectorAll('.carousel__dot');
  const prevBtn = document.querySelector('.carousel__btn--prev');
  const nextBtn = document.querySelector('.carousel__btn--next');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('carousel__slide--active', i === index);
      dots[i].classList.toggle('carousel__dot--active', i === index);
    });
    currentSlide = index;
  }

  prevBtn.addEventListener('click', () => {
    let newIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(newIndex);
  });

  nextBtn.addEventListener('click', () => {
    let newIndex = (currentSlide + 1) % slides.length;
    showSlide(newIndex);
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => showSlide(i));
  });

  showSlide(0);
});