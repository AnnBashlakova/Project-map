
slider()

async function slider() {
    let i = 0
    const posts = document.querySelectorAll('.slider-text__item')
    posts.forEach(t => t.style = 'top:-100px; pacity:0; transition: 0s')
    posts[0].style = "top:0px; opacity:1; transition: 0s";
    
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    while(true) {
        const next = (i + 1) % posts.length
        
        posts[i].style = "top:100px; opacity:0";
        posts[next].style = "top:0px; opacity:1";
        
        await new Promise(resolve => setTimeout(resolve, 2000))
        posts[i].style = "top:-100px; opacity:0; transition: 0s";
        
        i = next
        
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