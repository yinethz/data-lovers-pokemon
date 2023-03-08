import { filterType } from './data.js';
import data from './data/pokemon/pokemon.js';
const steel = document.getElementById("steel")
const water = document.getElementById("water") 

const pokemones1 = document.getElementById("pokemones1")

const pokemones = data.pokemon
console.log(filterType(pokemones,"steel"));
function selecSteel (){
  steel.addEventListener("click", function() {
    pokemones1.innerHTML = filterType(pokemones,"steel")
  })
}
selecSteel()
function selecWater (){
  water.addEventListener("click", function() {
    pokemones1.innerHTML = filterType(pokemones,"water","img")
  })
}
selecWater()