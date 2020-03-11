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
    let imgType = '';
    obj.type.forEach((typeActual) => {
      imgType += `<img src="./img/types-pokemon/${typeActual}.png"/>`;
    });

    mainView += `
        <div class="pokemon">
        <div class="containerImg"><img class="img1" src="${obj.img}"/></div>
        <p>${obj.num}</p> 
        <p>${obj.name}</p>
        <div>${imgType}</div>
        <p>${obj.type}</p>
        </div>`;
  });
  return mainView;
};

btnStart.addEventListener('click', () => {
  document.getElementById('root').innerHTML = allPokemons(data);

  // const imgClick = document.getElementsByClassName('img1');
  // for(let i = 0; i < imgClick.length; i++)
  // {
  // }
  // imgClick.forEach((clickMostrar) => {
  //   clickMostrar.addEventListener('click', () => {
  //     alert('aqui esta');
  //   });
  // });
});

const btnModal = document.getElementById('btnModal');
const close = document.getElementById('close');


btnModal.addEventListener('click', () => {
  const containerModal = document.getElementById('containerModal');
  containerModal.style.display = 'block';
});
close.addEventListener('click', () => {
  const containerModal = document.getElementById('containerModal');
  containerModal.style.display = 'block';
});

 
// const toogleMenu = document.getElementById('toogleMenu');
// toogleMenu.addEventListener('click', () => {
//   const ulMenu = document.getElementById('ulMenu');
//   let menuToogle = document.getElementById('menuToogle');
//   menuToogle = ulMenu.nextSibling;
// });
