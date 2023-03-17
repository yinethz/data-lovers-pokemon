// que acceda a la data y de la data al type de pokemones
export const filterType = (dataArray, typeUser) => {
  return dataArray.filter(element => element.type.includes(typeUser))
};
export const filterWeaknesses = (dataArray, typeUser) => {
  return dataArray.filter(element => element.weaknesses.includes(typeUser))
};

// ordenar de A-Z y Z-A
export const order = (arrayObj, orderBy) => {
  let sortObj = [];
  switch (orderBy) {
    case 'a-z':
      sortObj = arrayObj.sort((a, b) => ((a.name <= b.name) ? -1 : 1));
      break;
  }
  return sortObj;
};
export const changeOrder = array => array.reverse();
