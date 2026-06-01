export function funcIndex(){
    const slideShowContainer = document.querySelector('.start-slideshow')
    const slider = document.querySelector('.mySlides')
    const slides = document.querySelectorAll('.mySlide')
    const prevBtn = document.querySelector('.prev')
    const nextBtn = document.querySelector('.next')
    const totalSlides = slides.length

    let currentSlide = 0
    let autoSlideInterval;

    function showSlides(index){
        if (index >= totalSlides) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = index;
        }
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }


    function nextSlide() {
        showSlides(currentSlide + 1);
    }

    function prevSlide() {
        showSlides(currentSlide - 1);
    }


    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 4000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }


    nextBtn.addEventListener('click', nextSlide)
    prevBtn.addEventListener('click', prevSlide)


    slideShowContainer.addEventListener('mouseover', stopAutoSlide)
    slideShowContainer.addEventListener('mouseout', startAutoSlide)

    startAutoSlide();
}