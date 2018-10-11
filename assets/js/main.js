/* UI Elements */
const showcase = document.getElementById('showcase');
const header = document.getElementById('header');
const heroWrapper = document.querySelector('#hero .wrapper');
const scrollNote = document.querySelector('.scroll-note');
const menuButton = document.querySelector('.menu-button');
const menu = document.getElementById('sidemenu');
let isMenuOpen = false;
let heroWrapperTop = 50;

window.addEventListener('scroll', () => {

    let bodyScrollTop = document.scrollingElement.scrollTop;

    // "Scroll Down" text fade
    scrollNote.style.opacity = .5 - (bodyScrollTop / 1000);
    if (bodyScrollTop === 0) scrollNote.style.opacity = 1;

    // Toggle dark theme
    let affectedElements = [document.body, header, menu];
    if (bodyScrollTop >= (showcase.offsetTop - 300)) {
        affectedElements.forEach(elem => {
            elem.classList.add('dark');
        });
    } else {
        affectedElements.forEach(elem => {
            elem.classList.remove('dark');
        });
    }

    // Hero .wrapper parallax
    heroWrapperTop = bodyScrollTop / 16;
    heroWrapper.style.top = `${heroWrapperTop}%`;
});

function toggleMenu() {
    if (!isMenuOpen) {
        menu.classList.add('open');
        isMenuOpen = true;
    } else {
        menu.classList.remove('open');
        isMenuOpen = false;
    }
}

