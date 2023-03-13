import data from './data/pokemon/pokemon.js';
import { filterType } from './data.js';
const steel = document.getElementById("steel")
const water = document.getElementById("water")
const pokemones = data.pokemon;
console.log(filterType(pokemones, "steel"))

function containerElement(dataPokemon) {
  const divElement = document.createElement('div');
  divElement.setAttribute('class', 'div-Element');
  let typePokemon = "";

  dataPokemon.type.forEach((pokemonCategoria) => {
    typePokemon += `<span>${pokemonCategoria}</span>`
  })
  divElement.innerHTML = `
  <div class="contenedorAdelante">
    <p>${dataPokemon.num}</p>
    <img src='${dataPokemon.img}'/>
    <h2>${dataPokemon.name}</h2>
    <p> Tipo: ${typePokemon}</p>

  </div>
  <div class="contenedorModal">
    <span class="close">&times;</span>
    <h2>${dataPokemon.name}</h2>
    <img src="${dataPokemon.img}"/>
    <p> Tipo: ${typePokemon}</p>
    <p> Altura: ${dataPokemon.size.height}</p>
    <p> Peso: ${dataPokemon.size.weight}</p>
    <p> Debilidades: ${dataPokemon.weaknesses}</p>
  </div>`;

  divElement.querySelector('.contenedorAdelante').addEventListener('click', () => {
    divElement.querySelector('.contenedorModal').style.display = 'block';
    document.querySelector('.miModal').style.display = 'block';
  });

  divElement.querySelector('.close').addEventListener('click', () => {
    divElement.querySelector('.contenedorModal').style.display = 'none';
    document.querySelector('.miModal').style.display = 'none';
  });

  return divElement;
}
const insertAllPokemon = document.querySelector('#root');
function verPokemon(cargaPokemon) {
  console.log('el array completo: ', cargaPokemon);
  cargaPokemon.forEach((dataPokemon) => {
    console.log('cada elemnto del array filtrado', dataPokemon);
    insertAllPokemon.appendChild(containerElement(dataPokemon));
  });
}

verPokemon(data.pokemon);

function selecSteel() {
  steel.addEventListener("click", function () {
    pokemones.innerHTML = filterType(pokemones,)
    insertAllPokemon.innerHTML = ''
    verPokemon(filterType(pokemones, "steel"))
    console.log('filtrado acero: ', filterType(pokemones, 'steel'));
  })
}
selecSteel()
function selecWater() {
  water.addEventListener("click", function () {
    pokemones.innerHTML = filterType(pokemones, "water")
  })

}
selecWater()

/*function cargaPokemon(){


  data.pokemon;

  let dataPokemon = {
    id : 1,
    name : "Ivasur",
    img : "www.gato.com",
  }
  const cardElement = containerElement(dataPokemon);

  console.log(cardElement);
  const rootElement = document.getElementById("root");
  rootElement.insertAdjacentHTML('afterend', cardElement.outerHTML);
}
//dataPokemon.insertAdjacentHTML('afterend', divElement);


cargaPokemon()

*/
