//----------------Applies To Version 2 button --------
const btn = document.querySelector('#v2');
btn.onclick = function () {
    console.log("YOU CLICKED ME!")
    console.log("I HOPE IT WORKED!!")
}

function scream() {
    console.log("AAAAAHHHHH");
    console.log("STOP TOUCHING ME!");
    console.log("You keeping hovering over me!!!")
}

//Activates scream() when you mouse over
//Basically setting a function as a property
btn.onmouseenter = scream;

//If you set it to an alert without () it will activate automatically
document.querySelector('h1').onclick = () => {
    alert('you clicked the h1!')
}
//--------------------------------



//BEST OPTION addEventListener:
const btn3 = document.querySelector('#v3');
//You listen for a click, then the function is an alert
btn3.addEventListener('click', function () { //There's also dblclick
    alert("THIS IS THE WAY!");
})

//Arrow version way
/*
const btn3 = document.querySelector('#v3');
//You listen for a click, then the function is an alert
btn3.addEventListener('click', () => {
    alert("THIS IS THE WAY!");
})
*/

function twist() {
    console.log("TWIST!")
}
function shout() {
    console.log("SHOUT!")
}

const tasButton = document.querySelector('#tas');

// Onclick is a property, can't have two this way
// tasButton.onclick = twist;
// tasButton.onclick = shout;

//Now we get both now!
tasButton.addEventListener('click', twist)
tasButton.addEventListener('click', shout)
