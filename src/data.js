// estas funciones son de ejemplo

// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };

export const searchName = (searchPokemonName, dataPokemon) => {
  const dateNames = dataPokemon.map((dateName) => `${dateName.name}`);
  const filteredName = dateNames
    .filter((details) => details.toLowerCase().includes(searchPokemonName.toLowerCase()));
  return filteredName.splice(0, 10);
};
