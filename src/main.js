import data from './data/pokemon/pokemon.js';
import { filterType } from './data.js';
import{filterWeaknesses}from './data.js';
const pokemones = data.pokemon;
//console.log(filterWeaknesses(pokemones,"water"));
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
  //console.log('el array completo: ', cargaPokemon);
  cargaPokemon.forEach((dataPokemon) => {
    //console.log('cada elemnto del array filtrado', dataPokemon);
    insertAllPokemon.appendChild(containerElement(dataPokemon));
  });
}

verPokemon(data.pokemon);

//Prueba para fubciòn dinamica de selecciòn de tipo de pokemon
function selectPokemon() {
  document.getElementById("cate").addEventListener("click", function (e) {
    const target = e.target.id; // Or any other selector.
    //console.log(e.target.id)
    if (target) {
      pokemones.innerHTML = filterType(pokemones, target)
      insertAllPokemon.innerHTML = ''
      verPokemon(filterType(pokemones, target))
      // Do something with `target`.
    }
  })

}
selectPokemon()

function seleweaknesses() {
  const weaknesses = document.getElementById("seleweaknesses")
  weaknesses.addEventListener("change", function (e) {
    const target = e.target.value; // Or any other selector.
    console.log(e.target.value)
    if (target) {
      pokemones.innerHTML = filterWeaknesses(pokemones, target)
      insertAllPokemon.innerHTML = ''
      verPokemon(filterWeaknesses(pokemones, target))
      // Do something with `target`.
    }
  })

}
seleweaknesses()

// funcion para organizar pokemones por nombre



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
