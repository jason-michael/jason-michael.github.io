const showcase = document.getElementById('showcase');
const header = document.getElementById('header');
const heroWrapper = document.querySelector('#hero .wrapper');
let heroWrapperTop = 50;

window.addEventListener('scroll', () => {

    // Toggle dark theme
    let affectedElements = [document.body, header];
    if (document.scrollingElement.scrollTop >= (showcase.offsetTop - 180)) {
        affectedElements.forEach(elem => {
            elem.classList.add('dark');
        });
    } else {
        affectedElements.forEach(elem => {
            elem.classList.remove('dark');
        });
    }

    // Hero wrapper parallax
    heroWrapperTop = document.scrollingElement.scrollTop / 16;
    heroWrapper.style.top = `${heroWrapperTop}%`;
});