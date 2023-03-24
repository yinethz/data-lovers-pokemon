import data from './data/pokemon/pokemon.js';
import { filterType } from './data.js';
import { filterWeaknesses, order, changeOrder } from './data.js';
const alphabeticalOrder = document.querySelector('#alphabeticalOrder')
const pokemones = data.pokemon;
const root = document.querySelector('#root');
let btnSort = false;

function containerElement(dataPokemon) {
  const divElement = document.createElement('div');
  divElement.setAttribute('class', 'div-Element');
  let typePokemon = "";
  dataPokemon.type.forEach((pokemoncategory) => {
    typePokemon += `<span class="tag-type">${pokemoncategory}</span>`
  })
  divElement.innerHTML = `
  <div class="contenedorAdelante">
    <img src='${dataPokemon.img}'/>
    <p>#${dataPokemon.num}</p>
    <h2>${dataPokemon.name}</h2>
    <p class="tag-type"> ${typePokemon}</p>
  </div>
  <div class="contenedorModal">
    <span class="close">&times;</span>
    <h2>${dataPokemon.name}</h2>
    <img class="imgPokemon" src="${dataPokemon.img}"/>
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
function verPokemon(loadPokemon) {
  loadPokemon.forEach((dataPokemon) => {
    insertAllPokemon.appendChild(containerElement(dataPokemon));
  });
}

verPokemon(data.pokemon);

//Función dinamica de selecciòn de tipo de pokemon
function selectPokemon() {
  document.getElementById("cate").addEventListener("click", function (e) {
    const target = e.target.id; // Or any other selector.
    if (target) {
      pokemones.innerHTML = filterType(pokemones, target)
      insertAllPokemon.innerHTML = ''
      verPokemon(filterType(pokemones, target))
      // Do something with `target`.
    }
  })

}
selectPokemon()

//Función dinamica de selecciòn de tipo de pokemon MOBILE
function selectPokemoon() {
  document.getElementById("categoryMobile").addEventListener("change", function (e) {
    const target = e.target.value; // Or any other selector.
    //console.log(e.target.id)
    if (target) {
      pokemones.innerHTML = filterType(pokemones, target)
      insertAllPokemon.innerHTML = ''
      verPokemon(filterType(pokemones, target))
      // Do something with `target`.
    }
  })

}
selectPokemoon()


function seleweaknesses() {
  const weaknesses = document.getElementById("seleweaknesses")
  weaknesses.addEventListener("change", function (e) {
    const target = e.target.value; // Or any other selector.
    if (target) {
      pokemones.innerHTML = filterWeaknesses(pokemones, target)
      insertAllPokemon.innerHTML = ''
      verPokemon(filterWeaknesses(pokemones, target))
      // Do something with `target`.
    }
  })

}
seleweaknesses()

// ordenar A-Z y Z-A
alphabeticalOrder.addEventListener('change', () => {
  if (btnSort === false) {
    root.innerHTML = '';
    alphabeticalOrder.classList.replace('btn-order', 'btn-orderAsc');
    const ascendente = order(pokemones, 'a-z');
    verPokemon(ascendente);
  }
  if (btnSort === true) {
    root.innerHTML = '';
    alphabeticalOrder.classList.replace('btn-orderAsc', 'btn-order');
    const descendente = changeOrder(order(pokemones, 'a-z'));
    verPokemon(descendente);
  }
  btnSort = !btnSort;
});



// eslint-disable-next-line no-undef
_toggle.onclick = () => {
  
  // eslint-disable-next-line no-undef
  _items.classList.toggle("open");
}
const btn = document.getElementById("btnOrder");
btn.addEventListener('click', limpiar)
function limpiar() {
  window.location.reload();

}



