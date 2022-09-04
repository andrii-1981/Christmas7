(function(){
    const slides = [
        `img/section-about/partner-canadian-homes.svg`,
        `img/section-about/partner-home-interiorg.svg`,
        `img/section-about/partner-home-shopping.svg`,
        `img/section-about/partner-jrwins.svg`,
        `img/section-about/partner-hallmark.svg`,       
      ];
     
      let currentSlideIdx = 0;    
      function renderCarousel() {
        const slideContainer = document.querySelector('.about__info-slider-imgs');
        
        
        slideContainer.innerHTML =
          `<a href="${slides[currentSlideIdx]}"><img src="${slides[currentSlideIdx]}" alt="slide about us"/></a>`        
          
        if (window.innerWidth > 768) {
          const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
          slideContainer.innerHTML += `<a href="${slides[secondSlideIdx]}"><img src="${slides[secondSlideIdx]}" alt="slide about us"/></a>`;
          if (window.innerWidth > 990) {
            const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
            slideContainer.innerHTML += `<a href="${slides[thirdSlideIdx]}"><img src="${slides[thirdSlideIdx]}" alt="slide about us"/></a>`;

            const fourthSlideIdx = thirdSlideIdx + 1 >= slides.length ? 0 : thirdSlideIdx + 1;
            slideContainer.innerHTML += `<a href="${slides[fourthSlideIdx]}"><img src="${slides[fourthSlideIdx]}" alt="slide about us"/></a>`;
          }
        }
      }
      function next() {
        currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        renderCarousel();
      }

      function addDotsToSlides() {
        const slideDotsContainer = document.querySelector('.about__slider-dots');
        for( let i = 0; i < slides.length; i++) {
          slideDotsContainer.innerHTML +=
          `<span class="slider-dot slide-${[i]}"></span>`;          
        }      
      }      
      addDotsToSlides();


      for( let i = 0; i < slides.length; i++) {
        let currentDot = '.slide-' + [i];        
        let el = document.querySelector(currentDot);

        if (el.addEventListener) {
            el.addEventListener('click', ()=>{
            if(document.querySelector('.slider-dot').classList.contains('dot-activ')){
              document.querySelector('.slider-dot').classList.remove("dot-activ");
            };
            
            el.classList.add("dot-activ"); 
            console.log(currentDot);
          }); 
        }
      }      
      



      setInterval(next, 3000);
      renderCarousel();
      window.addEventListener('resize', renderCarousel);
})();