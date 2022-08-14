
const post = document.getElementsByClassName("slider-text__item");
const p = post.length;
let i = 0;
setInterval(next, 2000);

// post[0].style = "opacity:1";
// post[1].style = "opacity:0";
// post[2].style = "opacity:0";
// post[3].style = "opacity:0";
// post[4].style = "opacity:0";


function next() {
    if (i === 0) {
    post[i + 1].style = "top:-100px;z-index:1;opacity:0";
    
    post[p - 1].style = "top:100px;z-index:1;opacity:0";

    post[i].style = "top:0;z-index:3";
    i++;

    } else if (i > 0 && i < p - 1) {
    post[i - 1].style = "top:100px;z-index:1;opacity:0";
    post[i + 1].style = "top:-100px;z-index:1;opacity:0";

    post[i].style = "top:0;z-index:3";

    i++;
    } else if (i === p - 1) {
    post[i - 1].style = "top:100px;z-index:1;opacity:0";
    post[i].style = "top:0;z-index:3";
    i = 0;

    post[i].style = "top:-100px;z-index:1;opacity:0";
    
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


// const accordionContents = document.getElementsByClassName("accordion__content");
// for (i = 0; i < accordionContents.length; i++) {
//     accordionContents[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//     });
// }


// const plus = document.getElementsByClassName("img-plus");