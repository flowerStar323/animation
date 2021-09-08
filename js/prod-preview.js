const mainImg = document.querySelector('.js_prod__img');
let subImgs = document.querySelectorAll('.js_prod__subimg');
subImgs = [...subImgs];
subImgs.forEach(img => {
    img.addEventListener('click', changeMainImg);
})

function changeMainImg(e) {
    const clickedImg = e.currentTarget;
    const clickedImgSrc = clickedImg.getAttribute('src');
    const mainImgSrc = mainImg.getAttribute('src');
    mainImg.setAttribute('src', clickedImgSrc);
    clickedImg.setAttribute('src', mainImgSrc);
}
