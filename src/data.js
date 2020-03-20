/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */

export const searchName = (searchPokemonName, dataPokemon) => {
  const filteredName = dataPokemon
    .filter((details) => details.name.substring(0, searchPokemonName.length)
      .toLowerCase() === searchPokemonName.toLowerCase());
  return filteredName.splice(0, 10);
};

export const FilterPokemonByResistantType = (data, typeResistant) => {
  const arrByType = data.filter((element) => element.resistant.includes(typeResistant.toLowerCase()));
  return arrByType;
};

export const orderedMa = (data) => data.sort((element1, element2) => {
  const orderedResultMa = element1.resistant.length < element2.resistant.length ? 1 : element2.resistant.length < element1.resistant.length ? -1 : 0;
  return orderedResultMa;
});

export const orderedMe = (data) => data.sort((element1, element2) => {
  const orderedResultMe = element1.resistant.length > element2.resistant.length ? 1 : element2.resistant.length > element1.resistant.length ? -1 : 0;
  return orderedResultMe;
});
export const calculateEPS = (energy, move) => {
  let eachEps = '';
  energy.forEach((itemEnergy) => {
    move.forEach((itemMove) => {
      eachEps += (itemEnergy * itemMove);
    });
  });
  console.log(eachEps);
};
calculateEPS([1, 1], [2, 2]);
