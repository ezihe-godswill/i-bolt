const menu = document.querySelector(".menu-box");
const leftCarouselBtn = document.querySelector(".left-btn");
const rightCarouselBtn = document.querySelector(".right-btn");
const header = document.querySelector('.header');

const mySiema = new Siema({
    perPage: 1,
    duration: 600,
    easing: "cubic-bezier(0.175, 0.485, 0.32, 1.075)",
});


menu.addEventListener("click", function () { this.classList.toggle("active"); });

leftCarouselBtn.addEventListener("click", () => mySiema.prev());

rightCarouselBtn.addEventListener("click", () => mySiema.next());

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
})