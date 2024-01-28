const slideshow = (() => {
  const slideButtons = document.querySelectorAll('.slideBtn');
  function selectBtn() {
    slideButtons.forEach((btn) =>
      btn.addEventListener('click', () => {
        const selectedEL = document.querySelector('.selected');
        if (selectedEL) selectedEL.classList.remove('selected');
        btn.classList.add('selected');
      })
    );
  }

  const slides = [
    {
      title: 'Lion',
      source: 'images/lion.jpg',
      alt: 'photo of a lion',
    },
    {
      title: 'Giraffe',
      source: 'images/giraffe.jpg',
      alt: 'photo of a giraffe',
    },
    {
      title: 'Deer',
      source: 'images/deer.jpg',
      alt: 'photo of a deer',
    },
    {
      title: 'tiger',
      source: 'images/tiger.jpg',
      alt: 'photo of a tiger',
    },
    {
      title: 'toucan',
      source: 'images/toucan.jpg',
      alt: 'photo of a toucan',
    },
  ];

  function displaySlide(slide) {
    const frame = document.getElementById('imageFrame');
    const title = document.getElementById('imageTitle');
    const p = document.createElement('p');
    p.textContent = slide.title;
    const image = document.createElement('img');
    image.src = slide.source;
    image.alt = slide.alt;
    frame.appendChild(image);
    title.appendChild(p);
  }

  const dotsWrapper = document.querySelector('dotsWrapper');
  dotsWrapper.addEventListener('click', (event) => {
    const btn = event.target.closest('.slideBtn');
    if (btn) {
      displaySlide(slides[0]);
    }
  });
  return {
    selectBtn,
    displaySlide,
  };
})();

export default slideshow;
