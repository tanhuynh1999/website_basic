new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: () => ({
        menus: [{
                name: 'About',
                link: 'welcome'
            },
            {
                name: 'Work',
                link: 'projects'
            },
            {
                name: 'Contact',
                link: 'contact'
            }
        ],
        projects: [{
                name: 'Tribute Page',
                image: 'https://cdn.freecodecamp.org/testable-projects-fcc/images/tribute.jpg',
                link: 'https://codepen.io/freeCodeCamp/full/zNqgVx'
            },
            {
                name: 'Random Quote Machine',
                image: 'https://cdn.freecodecamp.org/testable-projects-fcc/images/random-quote-machine.png',
                link: 'https://codepen.io/freeCodeCamp/full/qRZeGZ'
            },
            {
                name: 'JavaScript Calculator',
                image: 'https://cdn.freecodecamp.org/testable-projects-fcc/images/calc.png',
                link: 'https://codepen.io/freeCodeCamp/full/wgGVVX'
            },
            {
                name: 'Map Data Across the Globe',
                image: 'https://cdn.freecodecamp.org/testable-projects-fcc/images/map.jpg',
                link: 'https://codepen.io/freeCodeCamp/full/mVEJag'
            },
            {
                name: 'Wikipedia Viewer',
                image: 'https://cdn.freecodecamp.org/testable-projects-fcc/images/wiki.png',
                link: 'https://codepen.io/freeCodeCamp/full/wGqEga'
            },
            {
                name: 'Tic Tac Toe Game',
                image: 'https://cdn.freecodecamp.org/testable-projects-fcc/images/tic-tac-toe.png',
                link: 'https://codepen.io/freeCodeCamp/full/KzXQgy'
            }
        ],
        links: [{
                name: 'Facebook',
                icon: 'mdi-facebook',
                link: 'https://www.facebook.com/freecodecamp'
            },
            {
                name: 'Github',
                icon: 'mdi-github',
                link: 'https://github.com/freecodecamp'
            },
            {
                name: 'Twitter',
                icon: 'mdi-twitter',
                link: 'https://twitter.com/freecodecamp'
            },
            {
                name: 'Send a mail',
                icon: 'mdi-email',
                link: 'https://codepen.io/freeCodeCamp/full/zNBOYG'
            },
            {
                name: 'Call me',
                icon: 'mdi-cellphone',
                link: 'https://codepen.io/freeCodeCamp/full/zNBOYG'
            }
        ],
        titleProject: 'These are some of my projects',
        linkProject: 'https://codepen.io/FreeCodeCamp/'
    }),
})