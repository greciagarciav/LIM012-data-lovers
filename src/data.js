// estas funciones son de ejemplo

// export const example = () => {
//   return 'example';
// };


export const anotherExample = () => 'OMG';

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
