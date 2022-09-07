(function() {

    const slides = [
     `<div class="carousel_item">
     <img class="img_carousel" src="./img/happy_clients/happy_family_dog.png" alt="happy_dog">
     <p class="carousel_name">Dean and Alice Peterson</p>
     <div class="divider"></div>
     <p class="carousel_text">“Christmas is a special time! We always buy Christmas decorations in 
       advance. For the third
       year now, we have been making orders in this store and are completely satisfied with the quality
       of each bauble
       purchased."</p>
     <p class="carousel_date">December 15, 2019</p>
   </div>`,
   `<div class="carousel_item">
     <img class="img_carousel" src="./img/happy_clients/happy_tree.jpg" alt="tree">
     <p class="carousel_name">Daniella Lexington</p>
     <div class="divider"></div>
     <p class="carousel_text">“The anticipation of Christmas is the best thing in December. I like the
       feeling that magic is
       coming and try to start Christmas decorations in early December. This year, I've bought a new
       X-mas
       tree and lots of
       baubles."</p>
     <p class="carousel_date">December 02, 2020</p>
   </div>`,
   `<div class="carousel_item">                    
     <img class="img_carousel" src="./img/happy_clients/happy_kid.jpg" alt="kid">
     <p class="carousel_name">Susan Owler</p>
     <div class="divider"></div>
     <p class="carousel_text">“My daughter is 4 years old and she has been waiting for Christmas
       preparations
       since October!
       We start decorating the Christmas tree in early December, and I always buy something new at
       Christmas
       Decorations
       Shop."</p>
     <p class="carousel_date">December 08, 2018</p>
   </div>`
   ];
   
   let currentSlideIdx = 0;
   
   function renderCarousel() {
     const slideContainer = document.querySelector('.products-carousel_slides');
   
     slideContainer.innerHTML = slides[currentSlideIdx];
   
     if (window.innerWidth > 600) {
         const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx+1;
         slideContainer.innerHTML += slides[secondSlideIdx];
     }
   }
   
   function prev() {
     currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
     renderCarousel();
   }
   
   function next() {
     currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
     renderCarousel();
   }
   
   
   // setInterval(next, 3000);
   
   const prevButton = document.querySelector('.products-carousel__btn-prev');
   prevButton.addEventListener('click', prev);
   
   const nextButton = document.querySelector('.products-carousel__btn-next');
   nextButton.addEventListener('click', next);
   
    renderCarousel();
    window.addEventListener('resize', renderCarousel);
   }) ();