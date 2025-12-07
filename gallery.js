const mainImages = document.querySelectorAll('.default .main-img img');
const thumbnails = document.querySelectorAll('.default .thumb-list div');

const ligtboxMainImages = document.querySelectorAll('.lightbox .main-img img');
const ligtboxThumnailsImages = document.querySelectorAll('.lightbox .thumb-list div');

const lightboxElem = document.querySelector('.lightbox');
const closeIconElem = document.querySelector('.icon-close');
const nextElem = document.querySelector('.icon-next');
const prevElem = document.querySelector('.icon-prev');

let currentImage = 0;


mainImages.forEach((mainImage, index)=>{
    mainImage.addEventListener('click',()=>{
        lightboxElem.classList.add('active');
        changeImage(index,ligtboxMainImages,ligtboxThumnailsImages);
    })
})

closeIconElem.addEventListener('click',()=>{
    lightboxElem.classList.remove('active');
})


 function changeImage (index, mainImages, thumbnails) {
    mainImages.forEach((img) => {
        img.classList.remove("active");
    });

    thumbnails.forEach((thumbnail) => {
        thumbnail.classList.remove("active");
    });

    mainImages[index].classList.add('active');
    thumbnails[index].classList.add('active');
    currentImage = index;
 }

 thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click",()=>{
        changeImage(index,mainImages,thumbnails);
    })
 })


  function changeLightboxImage (index, mainImages, thumbnails) {
    ligtboxMainImages.forEach((img) => {
        img.classList.remove("active");
    });

    ligtboxThumnailsImages.forEach((thumbnail) => {
        thumbnail.classList.remove("active");
    });

    ligtboxMainImages[index].classList.add('active');
    ligtboxThumnailsImages[index].classList.add('active');
 }

  ligtboxThumnailsImages.forEach((ligtboxThumnailsImage, index) => {
    ligtboxThumnailsImage.addEventListener("click",()=>{
        changeImage(index,ligtboxMainImages,ligtboxThumnailsImages);
    })
 })

 nextElem.addEventListener('click',()=>{
    if(currentImage > 2){
        currentImage = 0;
        changeImage(currentImage,ligtboxMainImages,ligtboxThumnailsImages);
    }else{
        currentImage+=1;
        changeImage(currentImage,ligtboxMainImages,ligtboxThumnailsImages);
    }
 })

 prevElem.addEventListener('click',()=>{
    if(currentImage <= 0){
        currentImage = 3;
        changeImage(currentImage,ligtboxMainImages,ligtboxThumnailsImages);
    }else{
        currentImage-=1;
        changeImage(currentImage,ligtboxMainImages,ligtboxThumnailsImages);
    }
 })