const jokes = require('give-me-a-joke');
const colors = require('colors');

//console.log(jokes);

jokes.getRandomDadJoke(function(joke) { // callback function
    console.log(joke.rainbow);
});


//console.log("Omg Rainbows!".rainbow);
//Call in terminal: node index.js