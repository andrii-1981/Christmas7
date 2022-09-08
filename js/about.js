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
    let el = slideContainer.innerHTML =
      `<div><img src="${slides[currentSlideIdx]}" class = "about-slide" alt="slide about us"/></div>`;
    if (window.innerWidth > 768) {
      const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
      slideContainer.innerHTML += `<div><img src="${slides[secondSlideIdx]}" class = "about-slide" alt="slide about us"/></div>`;
      if (window.innerWidth > 990) {
        const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
        slideContainer.innerHTML += `<div><img src="${slides[thirdSlideIdx]}" class = "about-slide" alt="slide about us"/></div>`;

        const fourthSlideIdx = thirdSlideIdx + 1 >= slides.length ? 0 : thirdSlideIdx + 1;
        slideContainer.innerHTML += `<div><img src="${slides[fourthSlideIdx]}" class = "about-slide"  alt="slide about us"/></div>`;
      }
    }
  }
  function next() {
    currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
    removeClassDotActiveAllElements();
    addClassDotActive(aboutDots[currentSlideIdx]);
    renderCarousel();
    aboutSlides = document.querySelectorAll('.about-slide');
    clickSlide();
  }

  //renderDots  
  function renderDots() {
    const slideDotsContainer = document.querySelector('.about__slider-dots');
    for (let i = 0; i < slides.length; i++) {
      if (i === 0) {
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
          clickSlide();
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

  renderCarousel();
  renderDots();
  const aboutDots = document.querySelectorAll('.slider-dot');
  listenerClickDot();
  setInterval(next, 3000);
  window.addEventListener('resize', renderCarousel);

  //modal
  const modal = document.querySelector('.about-modal');
  const modalContentImg = document.querySelector('.about-modal-content-img');
  let aboutSlides = document.querySelectorAll('.about-slide');
  const closeButton = document.querySelector('.about-close-button');

  // aboutSlides.forEach(  (el) => {console.log("el" + el); el.addEventListener("click", toggleModal)});

  function toggleModal(ev) {
    modal.classList.toggle("about-show-modal");
    if (modalContentImg.hasChildNodes()) {
      modalContentImg.removeChild(modalContentImg.childNodes[0]);
    }
    modalContentImg.appendChild(this);
    ev.stopPropagation();
  }

  function CloseToggleModal(ev) {
    modal.classList.toggle("about-show-modal");
    ev.stopPropagation();
  }

  function clickSlide() {
    for (let i = 0; i < aboutSlides.length; i++) {
      aboutSlides[i].addEventListener("click", toggleModal);
      closeButton.addEventListener("click", CloseToggleModal);
      modal.addEventListener("click", CloseToggleModal);
    }
  }
  clickSlide();

  // ScrollTop
  const BtnScrollTop = document.querySelector("#btn-scroll-top");  
  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      BtnScrollTop.style.display = "block";
    } else {
      BtnScrollTop.style.display = "none";
    }
  }
  BtnScrollTop.addEventListener('click',
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  })
})();