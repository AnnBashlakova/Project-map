
const post = document.getElementsByClassName("slider-text__item");
const p = post.length;
let i = 0;

setInterval(next, 2000);

function next() {
    if (i === 0) {
    post[i + 1].style = "top:-100px;z-index:1;opacity:0";
    
    post[p - 1].style = "top:100px;z-index:1;opacity:0";

    post[i].style = "top:0;z-index:4";
    
    i++;
    } else if (i > 0 && i < p - 1) {
    post[i - 1].style = "top:100px;z-index:1;opacity:0";
    

    post[i].style = "top:0;z-index:3";
    

    post[i + 1].style = "top:-100px;z-index:1;opacity:0";
    
    i++;
    } else if (i === p - 1) {
    post[i - 1].style = "top:100px;z-index:0;opacity:0";
    

    post[i].style = "top:0;z-index:0";
    

    i = 0;

    post[i].style = "top:-100px;z-index:1;opacity:0";
    
    }
}





const phone = document.querySelector('.right_part_img')
// console.log(document.scrollTop());




window.addEventListener('scroll', scrollPhone);
function scrollPhone() {
    let vertical_position = pageYOffset;
    // console.log(vertical_position);
    if(vertical_position > 2410){
        console.log('dfvdfdf');
        phone.classList.remove('stick');
        phone.classList.add('position');
        // phone.style.transform= "translateY(361%)";
    } else {
        phone.classList.add('stick');
        phone.classList.remove('position');
        // phone.style.transform = "translate(236%, -18%)";
    
        // phone.classList.add('pos');
    }
};


const accordionContents = document.getElementsByClassName("accordion__content");
for (i = 0; i < accordionContents.length; i++) {
    accordionContents[i].addEventListener("click", function () {
    this.classList.toggle("active");
    });
}


// const plus = document.getElementsByClassName("img-plus");