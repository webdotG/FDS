function myFunction(x) {
    x.classList.toggle("change-btn");
}

let navBtn = document.querySelector(".nav-btn");
let navList = document.querySelector(".nav-list");
let header = document.querySelector("header");
let headerTitle = document.querySelector(".header__title-wrapper");

navBtn.addEventListener('click', function () {
    navList.classList.toggle('nav-list--show');
    header.classList.toggle('background-black');
    headerTitle.classList.toggle('visibility-hidden');
})