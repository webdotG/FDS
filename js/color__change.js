const about = document.getElementById("about");
const whyWe = document.getElementById("why-we");

window.addEventListener('scroll', (evt) => {
    changeColor(about, '#ff6347')
})


function changeColor(elem,color) {
    console.log(window.scrollY, elem.getBoundingClientRect());
    console.log(elem.getBoundingClientRect().y - window.scrollY);
    const diff = elem.getBoundingClientRect().y - window.scrollY;
    if (diff <= elem.getBoundingClientRect().height / 0.3 && diff >= 0) {
        elem.style.background = color;
    } else {
        elem.style.background = '#000000';
    }
}