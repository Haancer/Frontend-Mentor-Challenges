const menuIcon = document.querySelector(".menu-icon");
const backDrop = document.querySelector(".backdrop");
const navLinks = document.querySelector(".nav-links");
const closeIcon = document.querySelector(".close-icon");


menuIcon.addEventListener('click', () =>{
    navLinks.classList.add('js-active');
    backDrop.classList.add('js-active');
})

backDrop.addEventListener('click',() => {
    backDrop.classList.remove('js-active');
    navLinks.classList.remove('js-active');
})

closeIcon.addEventListener('click',() => {
    navLinks.classList.remove('js-active');
    backDrop.classList.remove('js-active');
})

