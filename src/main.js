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
const searchPokemon = document.getElementById('searchPokemon');

// eslint-disable-next-line no-shadow
const allPokemons = (data) => {
  let mainView = '';
  data.pokemon.forEach((obj) => {
    let imgTypePokemon = '';
    obj.type.forEach((currentPokemonType) => {
      imgTypePokemon += `<img src="./img/types-pokemon/${currentPokemonType}.png"/>`;
    });

    mainView += `
        <div class="pokemon">
        <div class="containerImg"><img class="img1" src="${obj.img}"/></div>
        <p>${obj.num}</p> 
        <p>${obj.name}</p>
        <div>${imgTypePokemon}</div>
        <p>${obj.type}</p>
        </div>`;
  });
  return mainView;
};

btnStart.addEventListener('click', () => {
  const dataHTML = allPokemons(data);
  document.getElementById('root').innerHTML = dataHTML;

  const pokemonClickEvent = document.getElementsByClassName('pokemon');
  for (let i = 0; i < pokemonClickEvent.length; i += 1) {
    pokemonClickEvent[i].addEventListener('click', () => {
      alert('Mostrar Modal');
    });
  }
});

searchPokemon.addEventListener('click', () => {
  const searchOption = document.createElement('li');
  const contentOption = document.createTextNode('hola mundo');
  const content = searchOption.appendChild(contentOption);
  document.body.appendChild(content);
});

// const search = (searchPokemon) => {
//   const dataPokemon = data.pokemon;
//   const dateNames = dataPokemon.map(dateName => `${dateName.name}`);
//   const filteredName = dateNames.filter(details => details.toLowerCase().includes(searchPokemon.toLowerCase()));
//   console.log(filteredName);
// };
// search('rat');
