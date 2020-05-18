// the matchy-matchy cards

const cardsArray = [
    {
        name: 'shell',

        img: 'img/blueshell.png'
    },

    {
        name: 'mario',

        img: 'img/mario.png'
    },

    {
        name: 'luigi',

        img: 'img/luigi.png'
    },

    {
        name: 'star',

        img: 'img/star.png'
    },

    {
        name: 'bulletbill',

        img: 'img/bulletbill.png'
    },

    {
        name: 'mushroom',

        img: 'img/mushroom.png'
    },

    {
        name: 'coin',

        img: 'img/coin.png'
    },

    {
        name: 'bobomb',

        img: 'img/bobomb.png'
    },

    {
        name: 'peach',

        img: 'img/peach.png'
    },

    {
        name: '1up',

        img: 'img/1up.png'
    },

    {
        name: 'thwomp',

        img: 'img/thwomp.png'
    },

    {
        name: 'goomba',

        img: 'img/goomba.png'
    },
];


// Grab the div with an id of root
const game = document.getElementById('game');

// Create a section with a class of grid
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');

// Append the grid section to the game div
game.appendChild(grid);