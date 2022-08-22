
slider()

async function slider() {
    let i = 0;
    const posts = document.querySelectorAll('.slider-text__item');
    posts.forEach(t => t.style = 'top:-100px; pacity:0; transition: 0s');
    posts[0].style = "top:0px; opacity:1; transition: 0s";
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    while(true) {
        const next = (i + 1) % posts.length;
        
        posts[i].style = "top:100px; opacity:0";
        posts[next].style = "top:0px; opacity:1";
        
        await new Promise(resolve => setTimeout(resolve, 2000));
        posts[i].style = "top:-100px; opacity:0; transition: 0s";
        
        i = next;
        
    }
}

const phone = document.querySelector('.right_part_img');


window.addEventListener('scroll', scrollPhone);
function scrollPhone() {
    let vertical_position = pageYOffset;
    if(vertical_position > 2267){
        phone.classList.remove('stick');
        phone.classList.add('position');

    } else {
        phone.classList.add('stick');
        phone.classList.remove('position');

    }
};


//animation-phone

let animation = document.querySelector('.app__container-img');


window.addEventListener('scroll', animationPhone);
function animationPhone() {
    let vertical_position = pageYOffset;
    // console.log(vertical_position)
    if(vertical_position > 6267){
        animation.classList.add('transform-Y');

    } 
};
//select

let selectContainer = document.querySelector(".select-container");
let select = document.querySelector(".select");
let input = document.getElementById("input");
let options = document.querySelectorAll(".select-container .option");


select.onclick = () => {
    selectContainer.classList.toggle("active");
};

// options.forEach((e) => {
//     e.addEventListener("click", () => {
//         input.value = e.innerText;
//         selectContainer.classList.remove("active");
//         options.forEach((e) => {
//             e.classList.remove("selected");
//         });
//         e.classList.add("selected");
//     });
// });


//slider-dots

const imgSliderright = document.querySelector(".project__carousel-right")
const dotsRight = document.querySelector(".carousel_dots-container-right")

const dotsLeft = document.querySelector(".carousel_dots-container-left")
const imgSliderLeft = document.querySelector(".project__carousel-left")


// document.querySelectorAll('.project__carousel').forEach((element) => {
//     element.addEventListener('mouseenter', function () {
//         dots.classList.add('dot-translate');
//     });
// });

// document.querySelectorAll('.project__carousel').forEach((element) => {
//     element.addEventListener('mouseleave', function () {
//         dots.classList.remove('dot-translate');
//     });
// });


// imgSliderright.addEventListener('mouseover', addDots);
// function addDots(){
//     dotsRigh.classList.add('dot-translate')
// }


// imgSliderright.addEventListener('mouseleave', removeDots);
// function removeDots(){
//     dotsRight.classList.remove('dot-translate')
// }


// mouseover



imgSliderLeft.addEventListener('mouseover', addDots);
function addDots(){
    dotsLeft.classList.add('dot-translate-one')
}


imgSliderLeft.addEventListener('mouseleave', removeDots);
function removeDots(){
    dotsLeft.classList.remove('dot-translate-one')
}





//accordion


const accordionContents = document.getElementsByClassName("accordion__content");
for (i = 0; i < accordionContents.length; i++) {
    accordionContents[i].addEventListener("click", function () {
    this.classList.toggle("active");
    });
}


const plus = document.getElementsByClassName("img-plus");