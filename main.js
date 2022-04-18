import './style.css'

const menuButton = document.querySelector(".menu-toggle");

const toggleMenu = () => {
  menuButton.classList.toggle("open");
}

menuButton.addEventListener("click", toggleMenu);