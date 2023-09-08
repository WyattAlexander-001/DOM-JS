const btn = document.querySelector('button'); //Not good practice, use a class or ID
const h1 = document.querySelector('h1');

btn.addEventListener('click', function () {
    console.log('Test Output In Console');
    //document.body.style.backgroundColor = 'gold';
    const randColor = randomColor();
    document.body.style.backgroundColor = randColor;
    h1.innerText = randColor;
});

//could use = () =>
const randomColor = function () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;

};

