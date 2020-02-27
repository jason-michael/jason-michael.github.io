const menu = document.getElementById('sidemenu');
const header = document.getElementById('header');
const footer = document.getElementById('contact');
const themedElements = [document.body, header, menu];
let isMenuOpen = false;

const projectsArea = document.getElementById('projects');

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

function onImgClick(e) {

    // Create lightbox igmg
    let img = document.createElement('img');

    // Set attributes
    img.src = e.src;
    img.classList.add("lightbox-img");

    // Add listener to close img
    img.addEventListener("click", () => {
        document.body.removeChild(img);
    });

    // Add img to document
    document.body.appendChild(img);
}

function createProject(id, title, description, imgPath, codeUrl, siteUrl, siteDesc) {
    let _id = 'project-' + id;
    let _isFlipped;
    let imgAlign;

    if (id % 2 === 1) {
        _isFlipped = ' project-flipped';
        imgAlign = 'right';
    } else {
        _isFlipped = '';
        imgAlign = 'left';
    }

    const project = (`
        <div id=${_id} class="project${_isFlipped}">
            <div class="project-image-box">
                <img src="${imgPath}" class="project-img" alt="" style="object-position:${imgAlign};" onclick="onImgClick(this)">
            </div>
            <div class="project-info-box">
                <h1 class="project-title">${title}</h1>
                <p class="project-description">${description}</p>
                <ul class="project-links">
                ${codeUrl ? `<li><a href="${codeUrl}" class="project-link" target="_blank">Code</a></li>` : ""}                    
                    <li><a href="${siteUrl}" class="project-link" target="_blank">${siteDesc || "Site"}</a></li>
                </ul>
            </div>
        </div>
    `);

    return project;
}

const projects = [{
        title: 'FLSD',
        description: `A safety solution engineered for to prevent forklift-related accidents, injuries, and property damage
        by providing real-time monitoring and safety alerts well before accidents occur.`,
        imgPath: 'assets/images/flsd-web-demo.png',
        siteUrl: 'https://amh-dev.github.io/flsd-web-demo/',
        siteDesc: 'Interactive Demo'
    },
    {
        title: 'Midwaste',
        description: 'Top-down zombie survival game you can play in your web browser.',
        imgPath: 'assets/images/mw-1.png',
        codeUrl: 'https://github.com/jason-michael/project3',
        siteUrl: 'http://midwaste.herokuapp.com/home',
        siteDesc: 'Play'
    },
    {
        title: 'ISS Tracker',
        description: 'View the overhead location of the International Space Station. Users can enter a street address and get an estimation of when the ISS will be over that location next, and for how long. Mobile-responsive.',
        imgPath: 'assets/images/iss.png',
        codeUrl: 'https://github.com/jason-michael/iss-tracker',
        siteUrl: 'https://jason-michael.github.io/iss-tracker/',
    },
    {
        title: 'Simple Todo',
        description: `This is a basic Node application with an Express/MySQL backend. Features include standard todo list functionality: add, toggle, edit, and delete todos, all stored in a MySQL database.`,
        imgPath: 'https://user-images.githubusercontent.com/30272940/48655852-8c44cd00-e9e2-11e8-8f54-394877f4f30e.jpg',
        codeUrl: 'https://github.com/jason-michael/express-mysql-todo',
        siteUrl: 'https://desolate-ravine-82175.herokuapp.com/',
    },
    {
        title: 'Rock Paper Scissors Multiplayer',
        description: 'Rock/paper/scissors multiplayer game using Firebase\'s real-time database. Features include a single lobby that supports two players, spectators, cross-platform gameplay, and instant chat. Mobile-responsive.',
        imgPath: 'assets/images/rps.png',
        codeUrl: 'https://github.com/jason-michael/rps-multiplayer',
        siteUrl: 'https://jason-michael.github.io/rps-multiplayer/',
    },
    {
        title: 'Trivia Game',
        description: 'Timed trivia game using JS timeouts and intervals and the Open Trivia DB API. Features multiple question categories, difficulties, and question counts. Mobile-responsive.',
        imgPath: 'assets/images/trivia.png',
        codeUrl: 'https://github.com/jason-michael/trivia-game',
        siteUrl: 'https://jason-michael.github.io/trivia-game/',
    }
];

function addProjects() {
    const separator = '<hr class=project-separator>';

    projects.forEach((p, index) => {
        const project = createProject((index + 1), p.title, p.description, p.imgPath, p.codeUrl, p.siteUrl, p.siteDesc, p.isFlipped);
        
        projectsArea.innerHTML += project;
        projectsArea.innerHTML += separator;
    });
}

addProjects();