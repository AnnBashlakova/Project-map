

window.addEventListener('scroll', scrollPhone);
function scrollPhone() {
    const imgPhone = document.getElementById('img_phone');
    console.log(imgPhone);

    let vertical_position = pageYOffset;
    console.log(vertical_position);
    imgPhone.style.marginTop = (vertical_position - 100) + 'px';
    // imgPhone.style.marginTop = (vertical_position + 100) + 'px';
    // if(vertical_position > 1250){
    //   // console.log('finish')
    //   imgPhone.style.marginTop = (vertical_position + 100) + 'px';
    //   // your_div.style.marginTop = (vertical_position-100) + 'px';
    // } else if(vertical_position == 2060) {
    //   imgPhone.style.marginTop = (vertical_position - 200) + 'px';
    // }
};
