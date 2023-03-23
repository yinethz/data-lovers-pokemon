import {dataAfeterOrdened} from './mockData.js'
import { filterType,filterWeaknesses, order, } from '../src/data.js';
const pokemon = [{
  "num": "001","name": "bulbasaur","type": ["Hierba","Veneno"],"weaknesses": ["Fuego","Hielo","Volador","Psíquico"]},
{"num": "002","name": "ivysaur", "type": ["Hierba","Veneno" ], "weaknesses": [ "Fuego","Hielo", "Volador", "Psíquico"]},
{"num": "003","name": "venusaur","type": ["Hierba", "Veneno"],"weaknesses": ["Fuego","Hielo", "Volador","Psíquico"]},
{"num": "004","name": "charmander", "type": ["Fuego"], "weaknesses": [ "Agua","Tierra", "Roca" ]}]


describe('filterType', () => {
  it('es una función', () => {
    expect(typeof filterType).toBe('function')
  })
  it('deberia de retornar un array de objetos de pokemones del tipo Fuego', () => {
    const result = [{"num": "004","name": "charmander", "type": ["Fuego"], "weaknesses": [ "Agua","Tierra", "Roca" ]}]
    expect(filterType(pokemon, "Fuego")).toEqual(result);
  });

});


describe('filterWeaknesses', () => {
  it('Es una función', () => {
    expect(typeof filterWeaknesses).toBe('function');
  });
  it("deberia de retornar un array de objetos con pokemones con debilidades de fuego", () => {
    const weaknesses = [{"num": "004","name": "charmander", "type": ["Fuego"], "weaknesses": [ "Agua","Tierra", "Roca" ]}
    ]
    expect(filterWeaknesses(pokemon,"Roca")).toEqual(weaknesses);
  });
});
// test de ordenar
const order1 = [{name: "bulbasaur"},{name: "ivysaur"},{name: "venusaur"},{name: "charmander"}]


describe('order', () => {
  it('Es una función', () => {
    expect(typeof order).toBe('function');
  });
  it("deberia de retornar un array de objetos por orden alfabetico", () => {
    

    expect(order(order1, 'a-z')).toEqual(dataAfeterOrdened);
  });
});
