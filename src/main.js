import { filterType } from './data.js';
import data from './data/pokemon/pokemon.js';
console.log(data.pokemon);
// que acceda a la data y de la data al type de pokemones 
const pokemones = data.pokemon
console.log(filterType(pokemones,"water"))