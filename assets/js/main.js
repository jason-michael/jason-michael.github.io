/**
 * UI elements
 */
const menu = document.getElementById('sidemenu');
const header = document.getElementById('header');
const footer = document.getElementById('contact');
const showcase = document.getElementById('showcase');
const scrollNote = document.querySelector('.scroll-note');
const wrapper = document.querySelector('#hero .wrapper');
const themedElements = [document.body, header, menu];

let isMenuOpen = false;
let wrapperY = 50;

function toggleSidemenu() {
    if (!isMenuOpen) {
        menu.classList.add('open');
        isMenuOpen = true;
    } else {
        menu.classList.remove('open');
        isMenuOpen = false;
    }
}

function flashFooter() {
    footer.classList.add('flash');
    setTimeout(() => {
        footer.classList.remove('flash');
    }, 1000);
}

/**
 *  Contains all of the page's scroll-based effects.
 */
window.addEventListener('scroll', () => {

    let scrollPosition = document.scrollingElement.scrollTop;

    // "Scroll Down" text fade in/out.
    scrollNote.style.opacity = .5 - (scrollPosition / 1000);
    if (scrollPosition === 0) scrollNote.style.opacity = 1;

    // Toggle dark/light theme.
    if (scrollPosition >= (showcase.offsetTop - 300)) {
        themedElements.forEach(elem => {
            elem.classList.add('dark');
        });
    } else {
        themedElements.forEach(elem => {
            elem.classList.remove('dark');
        });
    }

    // Hero parallax effect.
    wrapperY = scrollPosition / 16;
    wrapper.style.top = `${wrapperY}%`;
});