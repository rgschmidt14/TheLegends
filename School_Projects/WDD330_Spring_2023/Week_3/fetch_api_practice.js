// my attempt below

// first url now updated to include more pokemon for html addition
// const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
const url = 'https://pokeapi.co/api/v2/pokemon/';

async function getPokemon(url) {
    const response = await fetch(url);
    if (response.ok){
        const results = await response.json();
        console.log(results, "inside");
        addHtml(results)
        return results
    } else {
        console.log("try again, sorry")
    }
    
}
results = getPokemon(url);
console.log(results, "outside");

// What I learned:
// Anything you want to do with the response needs to be done in the async function after the await response and conversion to json. Doing it outside of the async function will result in a promise returned and not the data we wanted.


// html addition
function addHtml(mons) {
    let num = 0;
    mons.results.forEach(pokemon => {
        num += 1;
        const section = document.createElement('section');
        section.textContent = `${num}. ${pokemon.name}`;
        document.querySelector("body").appendChild(section);
        
    });
}








// class copy paste below

// const url = "https://pokeapi.co/api/v2/pokemon/ditto";
// let results = null;
// async function getPokemon(url) {
//   const response = await fetch(url);
//   //check to see if the fetch was successful
//   if (response.ok) {
//     // the API will send us JSON...but we have to convert the response before we can use it
//     // .json() also returns a promise...so we await it as well.
//     const data = await response.json();
//     doStuff(data);
//   }
// }
// function doStuff(data) {
//   results = data;
//   console.log("first: ", results);
// }
// getPokemon(url);
// console.log("second: ", results);