let plus = document.querySelectorAll('.question-block i');

let boxOpen = false;

let populateText = document.querySelectorAll('.populate-text');
// let keys = plus.map((x, index) => {return[x, populateText[index]]});
// console.log(keys);
for (let [index, i] of plus.entries()) {
    i.addEventListener('click', () => {
        for (let [index_j ,j] of plus.entries()) {
            if(i !== j) {
                if (!populateText[index_j].classList.contains('disabled')) {
                    populateText[index_j].classList.add('disabled');
                }

                if (j.classList.contains('close-btn')) {
                    j.classList.remove('close-btn');
                }
            }

            else {
                populateText[index].classList.toggle('disabled');
                populateText[index].classList.add('dropdown-animation');
                i.classList.toggle('close-btn');
            }
        }
    })
}

let switchPages = (page) => {
    for (i of pagesRedirect) {
        if (i === page) {
            document.querySelector(page).classList.remove('disabled')
        }

        else {
            document.querySelector(i).classList.add('disabled');
        }
    }
}


let redirectButtonsId = ['#sign-in-redirect', '#sign-up-now', '#new-to-netflix', '#already-a-user', '.logo-original', '.get-started-btn'];

let pagesRedirect = ['.default-page', '.sign-in-page', '.showcase-movies'];



// whenever the get started button is clicked, the showcase of movies will be displayed
let showcaseRedirect = document.querySelectorAll('.showcase-redirect');

for (let i of showcaseRedirect) {
    i.addEventListener('click', () => {
        switchPages('.showcase-movies');
    })
}


// whenever the netflix logo is clicked, the main screen will be displayed
let defaultPageRedirect = document.querySelectorAll('.default-page-redirect');

for (let i of defaultPageRedirect) {
    i.addEventListener('click', () => {
        switchPages('.default-page');
    })
}


// whenever the sign in button is clicked, the sign in page will be displayed
let signin = document.querySelectorAll('.signin');

for (let i of signin) {
    i.addEventListener('click', () => {
        switchPages('.sign-in-page');

        document.getElementById('new-to-netflix').classList.remove('disabled');
        document.getElementById('already-a-user').classList.add('disabled');

        document.getElementById('sign-up-now').classList.remove('disabled');
        document.getElementById('sign-in-now').classList.add('disabled');

        document.getElementById('first-name-input').classList.add('disabled');
    })
}

document.getElementById('sign-up-now').addEventListener('click', () => {
    document.getElementById('new-to-netflix').classList.add('disabled');
    document.getElementById('already-a-user').classList.remove('disabled');

    document.getElementById('sign-up-now').classList.add('disabled');
    document.getElementById('sign-in-now').classList.remove('disabled');

    document.getElementById('first-name-input').classList.remove('disabled');
});

let movieCards = document.querySelectorAll('.movies-list img');
let enlargedCard = document.querySelectorAll('.enlarged-card-section');

let genres = ['drama', 'thriller', 'children', 'suspense', 'romance']

for (let i of movieCards) {
    i.addEventListener('click', () => {
        let cl = i.parentElement.classList;
        cl = Array.from(cl);
        let genre = cl[1];

        for (let j of enlargedCard) {
            if (j.classList.contains(genre)) {
                j.classList.remove('disabled')
            }

            else {
                j.classList.add('disabled');
            }
        }

        //here we change the text info and image of the card according to the card clicked

        let customEnlargedCard = document.querySelector(`.enlarged-card-section.${genre}`);

        let srcDir = i.src;
        srcDir = srcDir.split('/');
        let movieName = srcDir[srcDir.length - 2];
        srcDir.splice(-1, 1, 'large.jpg');
        srcDir = srcDir.join('/');

        customEnlargedCard.querySelector('img').src = srcDir;

        movieName = movieName.split('-');

        for (let [index_k, k] of movieName.entries()) {
            movieName[index_k] = k.charAt(0).toUpperCase() + k.slice(1);
        }

        movieName = movieName.join(' ');

        customEnlargedCard.firstElementChild.firstElementChild.innerHTML = movieName;
    })
}