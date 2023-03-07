import { filterType } from './data.js';
import data from './data/pokemon/pokemon.js';

const root = document.getElementById('root');
const showPokemons = document.getElementById('showPokemons');
const dataPokemon = window.POKEMON.pokemon;
//funcion que trae la data con la prepiedades que especifique

const printData = (data) => {
  root.innerHTML = '';

  data.forEach(pokemon => {
    const namePokemon = `
    <div class="tarjeta">
      <h2> ${pokemon.num} </h2>
      <h3> ${pokemon.name} </h3>
      <figure> <img = class "imageBox" src ="${pokemon.img}"> </figure>
    <p> TYPE: ${pokemon.type} </p>
    <p>HEIGHT:${pokemon.height}</p>
    <p>WEIGHT:${pokemon.weight}</p>
    <p>SPAWN CHANCE: ${pokemon.spawn_chance}</p>
    <p>AVERANGE SPAWNS: ${pokemon.avg_spawns}</p>
    <p>SPAWN TIME:${pokemon.spawn_time}</p>
    <p>MULTIPLIERS:${pokemon.multipliers}</p>
    <p>WEAKNESSES:${pokemon.weaknesses}</p> </div>
    `

    root.insertAdjacentHTML("beforeend", namePokemon);
  })
}

showPokemons.addEventListener("click", () => {
  printData(dataPokemon)
})

//Filtra por tipo de pokemon

console.log(data.pokemon);
// que acceda a la data y de la data al type de pokemones
const pokemones = data.pokemon
console.log(filterType(pokemones, "water"))

