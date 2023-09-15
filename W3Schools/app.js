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