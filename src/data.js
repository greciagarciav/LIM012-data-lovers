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

export const ordered = (data) => data.sort((element1, element2) => (element1.resistant.length < element2.resistant.length ? 1 : -1));
export const orderedAlpha = (data) => data.sort((element1, element2) => (element1.name > element2.name ? 1 : -1));
export const orderedNum = (data) => data.sort((element1, element2) => (element1.num > element2.num ? 1 : -1));

export const calculateEPS = (data) => {
  const arrayEpsByMovement = [];
  data['quick-move'].forEach((quickMove) => {
    arrayEpsByMovement.push((quickMove.energy / quickMove['move-duration-seg']).toFixed(1));
  });
  data['special-attack'].forEach((specialAttack) => {
    arrayEpsByMovement.push((specialAttack.energy / specialAttack['move-duration-seg']).toFixed(1));
  });
  const converterArrayEpsByMovement = arrayEpsByMovement.map((eps) => parseFloat(eps));
  const sumTotalEps = converterArrayEpsByMovement.reduce((eps, eps1) => eps + eps1);
  const averageTotalEps = (sumTotalEps / converterArrayEpsByMovement.length).toFixed(1);
  return averageTotalEps;
};

export const FilterByLeague = (data, league) => {
  const leagueSelected = data.filter((pokemon) => pokemon.generation.name.includes(league));
  return leagueSelected;
};

export const filterTypePokemon = (data, typePokemon) => {
  const pokemonByType = data.filter((currentPokemon) => currentPokemon.type.includes(typePokemon.toLowerCase()));
  return pokemonByType;
};
