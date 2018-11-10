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

function createProject(id, title, description, imgPath, codeUrl, siteUrl) {

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
                <img src="${imgPath}" class="project-img" alt="" style="object-position:${imgAlign};">
            </div>
            <div class="project-info-box">
                <h1 class="project-title">${title}</h1>
                <p class="project-description">${description}</p>
                <ul class="project-links">
                    <li><a href="${codeUrl}" class="project-link" target="_blank">Code</a></li>
                    <li><a href="${siteUrl}" class="project-link" target="_blank">Site</a></li>
                </ul>
            </div>
        </div>
    `);

    return project;
}

const projects = [
    {
        title: 'Friend Finder',
        description: `This full stack site will take a user's survey results, compare their answers with those from other (fictional) users, and find the most compatible match. <br><br>This site uses Express for Node.`,
        imgPath: 'https://user-images.githubusercontent.com/30272940/48278425-0ee1f100-e413-11e8-9c5c-395341d09086.jpg',
        codeUrl: 'https://github.com/jason-michael/friend-finder',
        siteUrl: 'https://blooming-refuge-40534.herokuapp.com/',
    }, 
    {
        title: 'Bamazon - Node & MySQL',
        description: 'Bamazon is a fictional app that lets users modify data (CRUD) in a SQL database using the node command line.<br><br>The link below contains a full (and larger) demonstration of Bamazon\'s functionality.',
        imgPath: 'assets/images/bamazon.gif',
        codeUrl: 'https://github.com/jason-michael/bamazon',
        siteUrl: '',
    },    
    {
        title: 'Node Word Guess CLI Game',
        description: 'Command-line word guess game using node.js, inquirer (npm) and constructor functions.<br><br>This project can be played by installing the package from npm. Installation instructions are provided in the link below.<br>',
        imgPath: 'assets/images/node_hangman.gif',
        codeUrl: 'https://github.com/jason-michael/node-hangman',
        siteUrl: '',
    },
    {
        title: 'Node Language Interpretation and Recognition Interface (LIRI)',
        description: 'LIRI is a very basic command line node app that accepts input and returns data. Functionality includes quickly searching Spotify for song info, returning upcoming concert data for a given band, and more. Check out the link below to see all of LIRI\'s functions.',
        imgPath: 'assets/images/liri.gif',
        codeUrl: 'https://github.com/jason-michael/liri-node-app',
        siteUrl: '',
    },
    {
        title: 'ISS Tracker',
        description: 'View the overhead location of the International Space Station. Users can enter a street address and get an estimation of when the ISS will be over that location next, and for how long. Mobile-responsive.',
        imgPath: 'assets/images/iss.png',
        codeUrl: 'https://github.com/jason-michael/iss-tracker',
        siteUrl: 'https://jason-michael.github.io/iss-tracker/',
    },
    {
        title: 'Rock Paper Scissors Multiplayer',
        description: 'Rock/paper/scissors multiplayer game using Firebase\'s real-time database. Features include a single lobby that supports two players, spectators, cross-platform gameplay, and instant chat. Mobile-responsive.',
        imgPath: 'assets/images/rps.png',
        codeUrl: 'https://github.com/jason-michael/rps-multiplayer',
        siteUrl: 'https://jason-michael.github.io/rps-multiplayer/',
    },
    {
        title: 'Giphy Studio',
        description: 'Explore gifs from GIPHY. Users can search for topics, see what\'s trending and save their favorites. Mobile-responsive.',
        imgPath: 'assets/images/giphy.png',
        codeUrl: 'https://github.com/jason-michael/giphy-studio',
        siteUrl: 'https://jason-michael.github.io/giphy-studio/',
    },
    {
        title: 'Trivia Game',
        description: 'Timed trivia game using JS timeouts and intervals and the Open Trivia DB API. Features multiple question categories, difficulties, and question counts. Mobile-responsive.',
        imgPath: 'assets/images/trivia.png',
        codeUrl: 'https://github.com/jason-michael/trivia-game',
        siteUrl: 'https://jason-michael.github.io/trivia-game/',
    },
    {
        title: 'Hangman Game',
        description: 'Simple word guess game with an automotive theme. Guess letters correctly to figure out the word.',
        imgPath: 'assets/images/hangman.png',
        codeUrl: 'https://github.com/jason-michael/hangman-game',
        siteUrl: 'https://jason-michael.github.io/hangman-game/',
    }
];

function addProjects() {
    const separator = '<hr class=project-separator>';

    projects.forEach((p, index) => {
        const project = createProject((index + 1), p.title, p.description, p.imgPath, p.codeUrl, p.siteUrl, p.isFlipped);

        projectsArea.innerHTML += project;
        projectsArea.innerHTML += separator;
    });
}

addProjects();