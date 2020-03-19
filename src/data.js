// estas funciones son de ejemplo

// export const example = () => {
//   return 'example';
// };


export const anotherExample = () => 'OMG';

export const searchName = (searchPokemonName, dataPokemon) => {
  const dateNames = dataPokemon.map((dateName) => `${dateName.name}`);
  const subStringDateName = searchPokemonName.substring(0, searchPokemonName.length);
  const filteredName = dateNames
    .filter((details) => details.substring(0, searchPokemonName.length)
      .toLowerCase().includes(subStringDateName.toLowerCase()));
  return filteredName.splice(0, 10);
};

export const FilterPokemonByTypes = (data, kind) => {
  const arrByType = data.filter((element) => element.type.includes(kind));
  return arrByType;
};
