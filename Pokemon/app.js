// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

//Grab your container ID in section
const container = document.querySelector('#container');
//Save your sprites to a var
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


for (let i = 1; i <= 1010; i++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');
    const label = document.createElement('span');
    label.innerText = `#${i}`;
    const newImg = document.createElement('img');
    newImg.src = `${baseURL}${i}.png`


    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    container.appendChild(pokemon)
}
