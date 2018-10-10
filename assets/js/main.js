const showcase = document.getElementById('showcase');
const header = document.getElementById('header');

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
});