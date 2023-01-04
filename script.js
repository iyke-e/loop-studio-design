const menuButton = document.querySelector(".hamburger");
const navBar = document.querySelector("nav");

menuButton.onclick = () => {
    navBar.classList.toggle('open');
    menuButton.classList.toggle('close-icon')
    document.body.classList.toggle('disable-scrolling')
}