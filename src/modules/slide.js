const slideshow = (() => {
  const slides = document.querySelectorAll('.slide');
  const slideDots = document.querySelectorAll('.slideBtn');
  const slidesText = document.querySelectorAll('.text');
  const prev = document.getElementById('leftArrow');
  const next = document.getElementById('rightArrow');

  let slideIndex = 1;

  prev.addEventListener('click', () => {
    plusSlides(-1);
  });
  next.addEventListener('click', () => {
    plusSlides(1);
  });
  function plusSlides(n) {
    displaySlides((slideIndex += n));
  }

  for (let i = 0; i < slideDots.length; i++) {
    slideDots[i].addEventListener('click', () => {
      currentSlide(i + 1);
    });
  }

  function currentSlide(n) {
    displaySlides((slideIndex = n));
  }

  function displaySlides(n) {
    let i;
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < slideDots.length; i++) {
      slideDots[i].classList.remove('selected');
    }
    for (i = 0; i < slidesText.length; i++) {
      slidesText[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
    slideDots[slideIndex - 1].classList.add('selected');
    slidesText[slideIndex - 1].style.display = 'block';
  }
  function autoDisplay() {
    plusSlides(1);
  }
  return {
    displaySlides,
    autoDisplay,
  };
})();

export default slideshow;
