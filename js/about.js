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
        //slideContainer.innerHTML = slides[currentSlideIdx];
        slideContainer.innerHTML =
          `<a href="${slides[currentSlideIdx]}"><img width="100"
            src="${slides[currentSlideIdx]}" alt="slide about us" /></a>`
    
        
        if (window.innerWidth > 768) {
          const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
          slideContainer.innerHTML += `<a href="${slides[secondSlideIdx]}"><img width="100"
            src="${slides[secondSlideIdx]}" alt="slide about us" /></a>`;
          if (window.innerWidth > 990) {
            const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
            slideContainer.innerHTML += `<a href="${slides[thirdSlideIdx]}"><img width="100"
            src="${slides[thirdSlideIdx]}" alt="slide about us" /></a>`;

            const fourthSlideIdx = thirdSlideIdx + 1 >= slides.length ? 0 : thirdSlideIdx + 1;
            slideContainer.innerHTML += `<a href="${slides[fourthSlideIdx]}"><img width="100"
            src="${slides[fourthSlideIdx]}" alt="slide about us" /></a>`;
          }
        }    
    
      }    
    
      function next() {
        currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        renderCarousel();
      }
      setInterval(next, 3000);
      renderCarousel();
      window.addEventListener('resize', renderCarousel); 
       
      
})();