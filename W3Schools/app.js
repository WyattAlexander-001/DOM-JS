/* Verbose way of writing promise
axios.get("https://swapi.dev/api/peopleBLAH/1/") //Results in 404
.then(res =>{
    console.log("Response is: ", res)
})
.catch((e) => {
    console.log("ERROR BRO!", e)
});

axios.get("https://swapi.dev/api/people/1/")
.then(res =>{
    console.log("Response is: ", res);
})
.catch(e => {
    console.log("ERROR BRO!");
});
*/

/*
const getStarWarsCharacter = async (id) => {
    try{
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
        console.log(res.data);
    }catch(e){
        console.log("ERROR BRO!", e);
    }
}
//Call it!
getStarWarsCharacter(1);
getStarWarsCharacter(2);
getStarWarsCharacter(3);
getStarWarsCharacter(4);
getStarWarsCharacter("BLAH");
*/

//Axios Headers, First Use POSTMAN than configure  Axios
const jokes = document.querySelector("#jokes")
const getDadJoke = async () => {
    
    const config = {headers: {Accept: 'application/json'}}
    const res = await axios.get('https://icanhazdadjoke.com/', config)
    //console.log(res)
    console.log(res.data.joke) //dot notation to what you're looking for!
    const newLi = document.createElement('li');
    newLi.append(res.data.joke);
    jokes.append(newLi);

}
const dadButton = document.querySelector('.dadButton');  // Selecting the button element
dadButton.addEventListener('click', getDadJoke);  // Adding click event listener


getDadJoke();
getDadJoke();
getDadJoke();

const form = document.querySelector("#searchForm");
form.addEventListener('submit', async function(e){
    e.preventDefault();
    const userSearchInput = form.elements.query.value;
    const config = {params: {q: userSearchInput}}
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config)
    //console.log(res.data);
    console.log(res.data[0].show.image.medium);// 
    makeImages(res.data);
    form.elements.query.value = '';
});

const makeImages = (shows) => {
    for(let s of shows){
        if(s.show.image){
            const image = document.createElement("img");
            image.src = s.show.image.medium;
            document.body.append(image);
        }
    }
}

