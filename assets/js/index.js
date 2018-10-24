const menu = document.getElementById('sidemenu');
const header = document.getElementById('header');
const footer = document.getElementById('contact');
const showcase = document.getElementById('showcase');
const scrollNote = document.querySelector('.scroll-note');
const wrapper = document.querySelector('#hero .wrapper');
const themedElements = [document.body, header, menu];
let isMenuOpen = false;
let wrapperY = 50;

function navigate(url) {
    window.location.href = url;
}

function toggleSidemenu() {
    if (!isMenuOpen) {
        menu.classList.add('open');
        document.getElementById('menu-button-icon').classList.toggle('fa-bars');
        document.getElementById('menu-button-icon').classList.toggle('fa-times');
        isMenuOpen = true;
    } else {
        menu.classList.remove('open');
        document.getElementById('menu-button-icon').classList.toggle('fa-bars');
        document.getElementById('menu-button-icon').classList.toggle('fa-times');
        isMenuOpen = false;
    }
}

function flashFooter() {
    footer.classList.add('flash');
    setTimeout(() => {
        footer.classList.remove('flash');
    }, 3000);
}

/**
 *  Contains all of the page's scroll-based effects.
 */
window.addEventListener('scroll', () => {

    let scrollPosition = document.scrollingElement.scrollTop;

    // "Scroll Down" text fade in/out.
    scrollNote.style.opacity = 1 - (scrollPosition / 500);
    if (scrollPosition === 0) scrollNote.style.opacity = 1;

    // Hero wrapper fade in/out.
    wrapper.style.opacity = 1 - (scrollPosition / 500);
    if (scrollPosition === 0) wrapper.style.opacity = 1;

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