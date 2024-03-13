const nextbtn = document.querySelector('.next-btn')
const prevtbtn = document.querySelector('.prev-btn')
const slides = document.querySelectorAll('.slide')
const numberOfSlides = slides.length;
let slideNumbers = 0;


nextbtn.addEventListener("click", function(){
    slides.forEach((slide) => {
        slide.classList.remove('active')
    });

    slideNumbers ++ ;

    if(slideNumbers > (numberOfSlides - 1)) {
        slideNumbers = 0;

    }
    slides[slideNumbers].classList.add('active');
})

prevtbtn.addEventListener("click", function(){
    slides.forEach((slide) => {
        slide.classList.remove('active')
    });

    slideNumbers -- ;

    if(slideNumbers < 0) {
        slideNumbers = numberOfSlides - 1;

    }
    slides[slideNumbers].classList.add('active');

})