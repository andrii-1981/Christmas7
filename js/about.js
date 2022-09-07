(function () {
  const slides = [
    `img/section-about/partner-canadian-homes.svg`,
    `img/section-about/partner-home-interiorg.svg`,
    `img/section-about/partner-home-shopping.svg`,
    `img/section-about/partner-jrwins.svg`,
    `img/section-about/partner-hallmark.svg`,
  ];

  //renderSlide
  let currentSlideIdx = 0;
  function renderCarousel() {
    const slideContainer = document.querySelector('.about__info-slider-imgs');
    slideContainer.innerHTML =
      `<a href="${slides[currentSlideIdx]}"><img src="${slides[currentSlideIdx]} class = "trigger" alt="slide about us"/></a>`;    
    if (window.innerWidth > 768) {
      const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
      slideContainer.innerHTML += `<a href="${slides[secondSlideIdx]}"><img src="${slides[secondSlideIdx]}" class = "trigger" alt="slide about us"/></a>`;
      if (window.innerWidth > 990) {
        const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
        slideContainer.innerHTML += `<a href="${slides[thirdSlideIdx]}"><img src="${slides[thirdSlideIdx]}" class = "trigger" alt="slide about us"/></a>`;

        const fourthSlideIdx = thirdSlideIdx + 1 >= slides.length ? 0 : thirdSlideIdx + 1;
        slideContainer.innerHTML += `<a href="${slides[fourthSlideIdx]}"><img src="${slides[fourthSlideIdx]}" class = "trigger"  alt="slide about us"/></a>`;
      }
    }
  }
  function next() {
    currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
    removeClassDotActiveAllElements();
    addClassDotActive(aboutDots[currentSlideIdx]);
    renderCarousel();
  }

  //renderDots  
  function renderDots() {
    const slideDotsContainer = document.querySelector('.about__slider-dots');
    for (let i = 0; i < slides.length; i++) {
      if ( i === 0 ) {
        slideDotsContainer.innerHTML +=
        `<span class="slider-dot slide-${[i]} dot-active"></span>`;
      } else {
        slideDotsContainer.innerHTML +=
        `<span class="slider-dot slide-${[i]}"></span>`;      
      }
    }
  }

  //ListenerClickDots
  function listenerClickDot() {
    for (let i = 0; i < aboutDots.length; i++) {
      if (aboutDots[i].addEventListener) {
        aboutDots[i].addEventListener('click', () => {          
          removeClassDotActiveAllElements();
          addClassDotActive(aboutDots[i]);
          currentSlideIdx = i;
          renderCarousel();          
        });
      }
    }
  }

  //Add and Remove class dot-active
  function addClassDotActive(el) {
    el.classList.add('dot-active');
  }
  function removeClassDotActiveAllElements() {
    for (let j = 0; j < aboutDots.length; j++) {
      if (aboutDots[j].classList.contains('dot-active')) {
        aboutDots[j].classList.remove('dot-active');
      } 
    }
  }

  const modal = document.querySelector(".modal");
    const trigger = document.querySelector(".trigger");
    const closeButton = document.querySelector(".close-button");
    
    function toggleModal(ev) {
        modal.classList.toggle("show-modal");
        ev.stopPropagation();
    }
        
    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    modal.addEventListener("click", toggleModal);








  renderCarousel();
  renderDots();
  const aboutDots = document.querySelectorAll('.slider-dot');
  listenerClickDot();
  setInterval(next, 3000);
  window.addEventListener('resize', renderCarousel);
})();