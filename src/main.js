// import { example } from './data.js';
// import data from './data/injuries/injuries.js';
// import data from './data/lol/lol.js';
// import data from './data/patient/patient.js';
// eslint-disable-next-line import/extensions
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
// import data from './data/steam/steam.js';
// import data from './data/worldbank/worldbank.js';

const btnStart = document.getElementById('start');

// eslint-disable-next-line no-shadow
const allPokemons = (data) => {
  let mainView = '';
  data.pokemon.forEach((obj) => {
    mainView += `
        <img class="img1" src="${obj.img}"/>
        <p>${obj.num}</p> 
        <p>${obj.name}</p>
        <p>${obj.type}</p>`;
  });
  return mainView;
};

btnStart.addEventListener('click', () => {
  document.getElementById('root').innerHTML = allPokemons(data);
});
