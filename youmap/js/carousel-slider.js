const carousel = document.querySelector('.project__carousel')
const sliders = document.querySelector('.carousel_track')
const buttons = carousel.querySelectorAll('.carousel_btn')
let slides = [...sliders.children]

sliders.prepend(slides[slides.length - 1])
console.log(slides);

const handleArrowClick = arrow => {
    arrow.addEventListener('click', () => {
    slides = [...sliders.children];
    const currSlide = sliders.querySelector('.is-selected');
    currSlide.classList.remove('is-selected');
    let targetSlide;

    if (arrow.classList.contains('jsPrev')) {
        targetSlide = currSlide.previousElementSibling
        slider.prepend(slides[slides.length - 1])
    }

    if (arrow.classList.contains('jsNext')) {
        targetSlide = currSlide.nextElementSibling
        slider.append(slides[0])

        targetSlide.classList.add('is-selected');
    })
    }

buttons.forEach(handleArrowClick)