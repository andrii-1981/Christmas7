(function(){
    const slides = [
        `<div class="article-one">
            <article class="decoration-december2">
                    <img src="./img/hoetostoreandclean/foot.png" alt="foot"/>
                <div class="ikon-december2">
                    <img src="./img/hoetostoreandclean/star.jpg" alt="cap"/>
                    <p class="ikon-paragraphphoto">TIPS</p>
                </div>
                <h3 class="foot-title">The Best Color Combinations for Your Christmas Tree</h3>
                <p class="foot-paragraph">We all want our Christmas tree to look like pictures from a fashion magazine. But when we start decorating it, it looks not as stylish as we want it to be. We asked several stylists about how to achieve the perfect Christmas look and create a New Year's interior you can be proud of.</p>
                <span class="data-foot">December 02, 2020 | by Erica White</span>           
            </article>            
        </div>`,
        `<div class="article-two">
            <article class="decoration-december3">
                <img src="./img/hoetostoreandclean/motherwithchildren.png" alt="motherwithchildren"/>
                <div class="ikon-december3">
                    <img src="./img/hoetostoreandclean/star.jpg" alt="star"/>
                    <p class="ikon-paragraphphoto">TIPS</p>
                </div>
                <h3 class="mother-title">How to Beautifully Wrap Christmas Gifts</h3>
                <p class="mother-paragraph">You will find a huge selection of wrapping paper in our store. The most popular kinds are those with snowflakes, Santa Claus, deer. Plain craft paper is also gaining popularity, especially with contrast  shining bands. And now we will tell you how to wrap gifts like a pro.</p>
                <span class="data-mother">December 03, 2020 | by Erica White</span>
            </article>
        </div>`,
        `<div class="article-three">
            <article class="decoration-december5">
                <img src="./img/hoetostoreandclean/santawithchildren.png" alt="santawithchildren."/>
                <div class="ikon-december5">
                    <img src="./img/hoetostoreandclean/cap.jpg" alt="star"/>
                    <p class="ikon-paragraphphoto">DECORATION</p>
                </div>
                <h3 class="santa-title">Mission Possible: Buying Gifts for Everyone in One Place</h3>
                <p class="santa-paragraph">Christmas holidays are not only about decorations but also about buying presents literally for everyone. If you're going to celebrate with your family and/or friends, you'd better hurry up and start making up lists of presents. And yes, it's possible to buy everything in one place.</p>
                <span class="data-santa">December 05, 2020 | by Erica White</span>
            </article>
        </div>`     
    ]

    let currentSlideIdx = 0;
    function renderCarousel(){
        const slideConteiner = document.querySelector('.carousel-slides');
        slideConteiner.innerHTML = slides[currentSlideIdx];
        if(window.innerWidth > 761){
            const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
            slideConteiner.innerHTML += slides[secondSlideIdx];
        }
    }

    function prev(){
        currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length -1 : currentSlideIdx - 1;
        renderCarousel();
    }

    function next(){
        currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        renderCarousel();
    }

     const prevButton = document.querySelector('.carousel_btn-prev');
    prevButton.addEventListener('click', prev);

    const nextButton = document.querySelector('.carousel_btn-next');
    nextButton.addEventListener('click', next);

    renderCarousel();

    window.addEventListener('resize', renderCarousel)
    
})();