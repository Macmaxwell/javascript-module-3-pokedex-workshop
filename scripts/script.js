// import { getPokemon } from "./api.js";

// function init(){
// const root = document.getElementById("root");
// root.textContent = "Hello world again!";
// const newstuff = document.createElement("p");
// root.appendChild(newstuff);
// const image = document.createElement("img");
// image.src =  "https://upload.wikimedia.org/wikipedia/en/a/a6/Pok%C3%A9mon_Pikachu_art.png";
// root.appendChild(image);

// let result = getPokemon();
// console.log(result);

// }
// init()

     //Homework notes (17/8/2021)

/*1. Run the repo using a server like [http-server](https://www.npmjs.com/package/http-server) to minimise issues like CORS
2. Make sure you use the latest version of Chrome with the [cache disabled](https://stackoverflow.com/questions/5690269/disabling-chrome-cache-for-website-development?rq=1)
3. Complete the `getOnePokemonSprite` function to make sure we return the URL of a sprite for each Pokemon
4. Complete the `init` function to make sure we render an image for each sprite returned from the API */

import { getAllPokemon, getOnePokemonSprite } from "./api.js";

async function init() {
  const pokemon = await getAllPokemon();


  pokemon.forEach(async ({ name, url }) => {
    const newPokemon = document.createElement("div");
    const pokemonLink = document.createElement("a");
    pokemonLink.href = url;
    pokemonLink.textContent = name;
    newPokemon.appendChild(pokemonLink);
    root.appendChild(newPokemon);

    const spriteUrl = await getOnePokemonSprite(url);
    const pokeImg = document.createElement("img");
    pokeImg.src = spriteUrl;
    newPokemon.appendChild(pokeImg);

    console.log(
      "Here an image will be created with the sprite returned by getOnePokemonSprite"
    );
  });
}

init()