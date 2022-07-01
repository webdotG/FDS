function myFunction(x) {
    x.classList.toggle("change-btn");
}

let navBtn = document.querySelector(".nav-btn");
let navList = document.querySelector(".nav-list");

navBtn.addEventListener('click', function () {
    navList.classList.toggle('nav-list--show');
})