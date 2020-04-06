import { searchName, FilterPokemonByResistantType, ordered, calculateEPS, FilterByLeague, orderedAlpha, filterTypePokemon, orderedNum } from './data.js';
// import data from './data/pokemon/pokemon.js';

let globalData = [];
const data = [];

fetch('http://localhost:5500/src/data/pokemon/pokemon.json')
  .then((resp) => resp.json())
  .then((datos) => {
    globalData = datos.pokemon;
    data.pokemon = datos.pokemon;
  });

// Sticky Menu Navbar
const navbar = document.getElementById('navbar');
const searchContainer = document.getElementById('search');
const resultSearch = document.getElementById('ulSearch');
const mediaQueriesMin = window.matchMedia('(min-width:360px)');
const mediaQueriesMax = window.matchMedia('(max-width:760px)');
const sticky = navbar.offsetTop;

const stickyNavbar = () => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
    resultSearch.classList.add('sticky');
    resultSearch.style.position = 'fixed';
    resultSearch.style.top = '45px';
    searchContainer.classList.add('sticky');
    searchContainer.style.position = 'relative';
  } else {
    navbar.classList.remove('sticky');
    resultSearch.classList.remove('sticky');
    resultSearch.style.position = 'absolute';
    resultSearch.style.top = '';
    searchContainer.classList.remove('sticky');
    searchContainer.style.position = 'relative';
  }
  if (mediaQueriesMin.matches && mediaQueriesMax.matches && window.pageYOffset >= sticky) {
    resultSearch.style.top = '42px';
  } else {
    resultSearch.style.position = 'fixed';
  }
};

window.onscroll = () => stickyNavbar();

const btnStart = document.getElementById('start');
const searchPokemon = document.getElementById('searchPokemon');

// toogleMenu
const toogleMenu = document.getElementById('toogleMenu');
toogleMenu.addEventListener('click', () => {
  const menuOption = document.getElementById('menuOption');
  if (menuOption.style.display === 'block') {
    menuOption.style.display = 'none';
  } else {
    menuOption.style.display = 'block';
  }
});

const ShowPokemons = (pokemons) => {
  let mainView = '';
  pokemons.forEach((obj) => {
    let imgTypePokemon = '';
    let letterTypePokemon = '';
    obj.type.forEach((currentPokemonType) => {
      imgTypePokemon += `<img class="imgType" src="./img/types-pokemon/${currentPokemonType}.png"/>`;
      letterTypePokemon += `<span class="color-type-${currentPokemonType} letterType">${currentPokemonType.toUpperCase()}</span>`;
    });

    mainView += `
        <div id="${obj.num}" class="pokemon">
          <div class="containerImg"><img class="img1" src="${obj.img}"/></div>
          <p class="numId"> N°${obj.num}</p>
          <p>${obj.name.toUpperCase()}</p>
          <div>${imgTypePokemon}</div>
          <div>${letterTypePokemon}</div>
        </div>`;
  });
  return mainView;
};

const ResistanceAndWeaknesses = (pokemon) => {
  let resistanceAndWeaknesses = '';
  let resistanceList = '';
  let weaknessesList = '';
  pokemon.resistant.forEach((elementResistance) => {
    resistanceList += `<img class="resist-weak-img" src="./img/types-pokemon/${elementResistance}.png"/>`;
  });
  pokemon.weaknesses.forEach((elementWeaknesses) => {
    weaknessesList += `<img class="resist-weak-img" src="./img/types-pokemon/${elementWeaknesses}.png"/>`;
  });
  resistanceAndWeaknesses += `
    <div class="resist-weak-ctn">
    <h4 class="modal-h4">RESISTANCE</h4>
    <div>${resistanceList}</div>
  </div>
  <div class="resist-weak-ctn">
    <h4 class="modal-h4">WEAKNESSES</h4>
    <div>${weaknessesList}</div>
    </div>
  `;
  return resistanceAndWeaknesses;
};

const Movements = (pokemon) => {
  let templateMovements = '';
  let quickMoves = '';
  let specialAttacks = '';
  pokemon['quick-move'].forEach((quickMove) => {
    quickMoves += `<p class="${quickMove.type} background-color-movements">${quickMove.name} <span class="epsMovement">${(quickMove.energy / quickMove['move-duration-seg']).toFixed(1)}</span></p>`;
  });
  pokemon['special-attack'].forEach((specialAttack) => {
    specialAttacks += `<p class="${specialAttack.type} background-color-movements">${specialAttack.name} <span class="epsMovement">${(specialAttack.energy / specialAttack['move-duration-seg']).toFixed(1)}</span></p>`;
  });
  templateMovements += `
  <div class= "container-movements">
    <div class="sub-container-movements">
      <h4 class="modal-h4">Quick Moves</h4>
      ${quickMoves}
    </div>
    <div class="sub-container-movements">
      <h4 class="modal-h4">Special Attacks</h4>
      ${specialAttacks}
    </div>
  </div>
    `;
  return templateMovements;
};

const Evolution = (pokemon) => {
  let templateEvolution = '';
  if (pokemon.evolution['next-evolution'] === undefined && pokemon.evolution['prev-evolution'] === undefined) {
    templateEvolution += `
  <div class="evolution-each-container">
    <h4 class="">This pokemon is not part of an evolutionary line</h4>
  </div>
  `;
  }
  if (pokemon.evolution['next-evolution'] !== undefined) {
    templateEvolution += `
  <div id="${pokemon.evolution['next-evolution'][0].num}" class="evolution-each-container">
    <img class="evolution-img" src="https://www.serebii.net/pokemongo/pokemon/${pokemon.evolution['next-evolution'][0].num}.png"/>
    <h4 class="evolution-h4">Next-evolution</h4>
    <p class="evolution-p">#${pokemon.evolution['next-evolution'][0].num}</p>
    <p class="evolution-p">${pokemon.evolution['next-evolution'][0].name.toUpperCase()}</p>
  </div>
  `;
    if (pokemon.evolution['next-evolution'][0]['next-evolution'] !== undefined) {
      templateEvolution += `
      <div id="${pokemon.evolution['next-evolution'][0]['next-evolution'][0].num}"  class="evolution-each-container">
        <img class="evolution-img" src="https://www.serebii.net/pokemongo/pokemon/${pokemon.evolution['next-evolution'][0]['next-evolution'][0].num}.png"/>
        <h4 class="evolution-h4">Next-evolution</h4>
        <p class="evolution-p">#${pokemon.evolution['next-evolution'][0]['next-evolution'][0].num}</p>
        <p class="evolution-p">${pokemon.evolution['next-evolution'][0]['next-evolution'][0].name.toUpperCase()}</p>
      </div>
      `;
    }
  }
  if (pokemon.evolution['prev-evolution'] !== undefined) {
    templateEvolution += `
      <div id="${pokemon.evolution['prev-evolution'][0].num}" class="evolution-each-container">
        <img class="evolution-img" src="https://www.serebii.net/pokemongo/pokemon/${pokemon.evolution['prev-evolution'][0].num}.png"/>
        <h4 class="evolution-h4">Prev-evolution</h4>
        <p class="evolution-p">#${pokemon.evolution['prev-evolution'][0].num}</p>
        <p class="evolution-p">${pokemon.evolution['prev-evolution'][0].name.toUpperCase()}</p>
      </div>
      `;
    if (pokemon.evolution['prev-evolution'][0]['prev-evolution'] !== undefined) {
      templateEvolution += `
      <div id="${pokemon.evolution['prev-evolution'][0]['prev-evolution'][0].num}" class="evolution-each-container">
        <img class="evolution-img" src="https://www.serebii.net/pokemongo/pokemon/${pokemon.evolution['prev-evolution'][0]['prev-evolution'][0].num}.png"/>
        <h4 class="evolution-h4">Prev-evolution</h4>
        <p class="evolution-p">#${pokemon.evolution['prev-evolution'][0]['prev-evolution'][0].num}</p>
        <p class="evolution-p">${pokemon.evolution['prev-evolution'][0]['prev-evolution'][0].name.toUpperCase()}</p>
      </div>
      `;
    }
  }
  return templateEvolution;
};

const GetInfoModalHtml = (pokeId) => {
  let infoModal = '';
  infoModal += `
  <div class="modal-content flex">
    <span id="sp" class="close">&times;</span>
        <div id="${pokeId.num}" class="modal__block1">
          <img class="modal__block1-img" src="${pokeId.img}"/>
          <p class="modal__block1-txt">#${pokeId.num}</p>
          <p class="txt-modal-title">${pokeId.name.toUpperCase()}</p>
        </div>
      <div class="modalblock-2">
        <div class="modal__block2">
          <div class="block-2-sub-container"><p class="block2-p">${pokeId.size.weight}</p><p class="block2-p-title">WEIGHT</p></div>
          <div class="block-2-sub-container"><img class="modal__img-egg" src="./img/types-pokemon/${pokeId.type[0]}.png"/><p class="block2-p-title">${pokeId.type[0]}</p></div>
          <div class="block-2-sub-container"><img class="modal__img-egg" src="img/egg-lucky.png"/><p class="block2-p-title">${pokeId.egg}</p></div>
          <div><p class="block2-p">${pokeId.size.height}</p><p class="block2-p-title">HEIGHT</p></div>
        </div>
        <div class="modal__block4">
          ${ResistanceAndWeaknesses(pokeId)}
        </div>
        <div class="modal__block5">
          <h3 class="modal-h3">MOVEMENTS</h3>
          <div class='movements-container'>
          <img id ="previous" class="previous" src="./img/previous.png">
            ${Movements(pokeId)}
            <div class="eps-container">
              <div id="averageEps">
                <h4 class="modal-h4">Total EPS average</h4>
                <h3 class="epsNumber">${calculateEPS(pokeId)}</h3>
              </div>
              <button id="btn-getEps" class="btn-eps">GET</button>
              <span>*Get the EPS</span>
            </div>
          <img id="next" class="next" src="./img/next.png">
          </div>
        </div>
        <div class="modal__block6">
          <h3 class="modal-h3">EVOLUTION</h3>
          <div class="container-evolution">
          ${Evolution(pokeId)}
          </div>
        <div/>
      <div/>
    </div>
        `;
  return infoModal;
};

const ClosePokemonDetailEvent = () => {
  const modal = document.getElementById('modal');
  document.querySelector('.close').addEventListener('click', () => {
    modal.style.display = 'none';
  });
};

const ClosePokemonDetailWindowEvent = () => {
  const modal = document.getElementById('modal');
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
};

// let globalData = data.pokemon;
const GetPokemonById = (id) => {
  const getDataPokemon = globalData.filter((poke) => (poke.num === id))[0];
  return getDataPokemon;
};

const idRightLenght = (idString) => {
  if (idString.length === 4) {
    const arrIdString = idString.split('');
    arrIdString.splice(0, 1);
    return arrIdString.join('');
  }
  if (idString.length > 4) {
    const arrIdString = idString.split('');
    arrIdString.splice(0, 2);
    return arrIdString.join('');
  }
  return idString;
};

const assignNextClickEvent = () => {
  const nextPokemon = document.getElementById('next');
  nextPokemon.addEventListener('click', () => {
    const pokemonId = document.getElementsByClassName('modal__block1')[0].id;
    const getNextPokemonId = parseInt(pokemonId, 10) + 1;
    const nextPokemonId = `00${getNextPokemonId}`;
    const rightId = idRightLenght(nextPokemonId);
    if (rightId !== '252') {
      const infoPokemon = GetPokemonById(rightId);
      // eslint-disable-next-line no-use-before-define
      ShowModalPokemon(infoPokemon);
      ClosePokemonDetailEvent();
      ClosePokemonDetailWindowEvent();
    }
  });
};

const assignPreviousClickEvent = () => {
  document.getElementById('previous').addEventListener('click', () => {
    const pokemonId = document.getElementsByClassName('modal__block1')[0].id;
    const getPreviousPokemonId = parseInt(pokemonId, 10) - 1;
    const previousPokemonId = `00${getPreviousPokemonId}`;
    const rightId = idRightLenght(previousPokemonId);
    if (rightId !== '000') {
      const infoPokemon = GetPokemonById(rightId);
      // eslint-disable-next-line no-use-before-define
      ShowModalPokemon(infoPokemon);
      ClosePokemonDetailEvent();
      ClosePokemonDetailWindowEvent();
    }
  });
};

const ShowModalPokemon = (pokemon) => {
  const modal = document.getElementById('modal');
  modal.innerHTML = GetInfoModalHtml(pokemon);
  const getEps = document.getElementById('btn-getEps');
  getEps.addEventListener('click', () => {
    const epsMovement = document.querySelectorAll('.epsMovement');
    epsMovement.forEach((eps) => {
      const epsElement = eps;
      epsElement.style.display = 'block';
    });
    const averageEps = document.getElementById('averageEps');
    averageEps.style.display = 'block';
  });
  modal.style.display = 'block';
  // eslint-disable-next-line no-use-before-define
  AssignCardEventClickEvolution();
  assignNextClickEvent();
  assignPreviousClickEvent();
};

const AssignCardEventClickEvolution = () => {
  const listPokemon = document.querySelectorAll('.container-evolution .evolution-each-container');

  listPokemon.forEach((itemPokemon) => itemPokemon.addEventListener('click', (event) => {
    const pokemonId = event.target.closest('.evolution-each-container').id;
    const pokemonClicked = GetPokemonById(pokemonId);
    ShowModalPokemon(pokemonClicked);
    ClosePokemonDetailEvent();
    ClosePokemonDetailWindowEvent();
  }));
};

const AssignCardEventClick = () => {
  const listPokemon = document.querySelectorAll('.allPokemons .pokemon');

  listPokemon.forEach((itemPokemon) => itemPokemon.addEventListener('click', (event) => {
    const pokemonId = event.target.closest('.pokemon').id;
    const pokemonClicked = GetPokemonById(pokemonId);
    ShowModalPokemon(pokemonClicked);
    ClosePokemonDetailEvent();
    ClosePokemonDetailWindowEvent();
  }));
};

const amount = document.getElementById('amount-pokemons');
const totalPokemonFiltered = (datos) => {
  const amountPokemons = `Total pokemons: ${datos.length}`;
  const h3Element = document.createElement('h4');
  const textAmount = document.createTextNode(amountPokemons);
  h3Element.appendChild(textAmount);
  amount.appendChild(h3Element);
};

const StartApp = () => {
  const dataHTML = ShowPokemons(globalData);
  document.getElementById('root').innerHTML = dataHTML;
  totalPokemonFiltered(globalData);
  AssignCardEventClick();
  document.getElementById('fundWelcomePortal').style.display = 'none';
};

// Events
btnStart.addEventListener('click', StartApp);

// Search Pokemon
const closeSearchPokemonWindowEvent = () => {
  const inputElement = document.getElementById('searchPokemon');
  const ulSearch = document.getElementById('ulSearch');
  window.addEventListener('click', (event) => {
    if (event.target !== inputElement) {
      ulSearch.innerHTML = '';
    }
  });
};

searchPokemon.addEventListener('keyup', () => {
  const ulSearch = document.getElementById('ulSearch');
  ulSearch.innerHTML = '';

  if (searchPokemon.value.length === 0) {
    return false;
  }

  const filterNameSearch = searchName(searchPokemon.value, data.pokemon);
  filterNameSearch.forEach((filterPokemon) => {
    const searchOptionElement = document.createElement('li');
    const searchOptionText = document.createTextNode(filterPokemon.name);
    searchOptionElement.appendChild(searchOptionText);
    ulSearch.appendChild(searchOptionElement);
    searchOptionElement.setAttribute('data-search-num-pokemon', filterPokemon.num);
    searchOptionElement.addEventListener('click', (event) => {
      const itemEvent = event.target;
      const numPokemon = itemEvent.dataset.searchNumPokemon;
      const pokemonClicked = GetPokemonById(numPokemon);
      ShowModalPokemon(pokemonClicked);
      ClosePokemonDetailEvent();
      ClosePokemonDetailWindowEvent();
    });
    closeSearchPokemonWindowEvent();
  });

  return true;
});

const typeSelect = document.getElementById('pokemon-types');
typeSelect.addEventListener('change', (event) => {
  amount.innerHTML = '';
  const resistantType = event.target.value;
  globalData = FilterPokemonByResistantType(data.pokemon, resistantType);
  document.getElementById('root').innerHTML = ShowPokemons(globalData);
  totalPokemonFiltered(globalData);
  document.getElementById('pokemon-order').value = -1;
  AssignCardEventClick();
});

const orderSelect = document.getElementById('pokemon-order');
orderSelect.addEventListener('change', (event) => {
  const orderType = event.target.value;
  let listOrderPokemon = [];
  if (orderType === 'desc') {
    listOrderPokemon = ordered(globalData, orderType);
    document.getElementById('root').innerHTML = ShowPokemons(listOrderPokemon);
    AssignCardEventClick();
  } else if (orderType === 'asc') {
    listOrderPokemon = ordered(globalData, orderType).reverse();
    document.getElementById('root').innerHTML = ShowPokemons(listOrderPokemon);
    AssignCardEventClick();
  } else if (orderType === '0') {
    listOrderPokemon = orderedAlpha(globalData, orderType);
    document.getElementById('root').innerHTML = ShowPokemons(listOrderPokemon);
    AssignCardEventClick();
  } else if (orderType === '1') {
    listOrderPokemon = orderedAlpha(globalData, orderType).reverse();
    document.getElementById('root').innerHTML = ShowPokemons(listOrderPokemon);
    AssignCardEventClick();
  } else if (orderType === 'ev') {
    listOrderPokemon = orderedNum(globalData, orderType);
    document.getElementById('root').innerHTML = ShowPokemons(listOrderPokemon);
    AssignCardEventClick();
  }
});

const optionLeague = document.querySelectorAll('.dropdown-content a');
optionLeague.forEach((league) => league.addEventListener('click', (event) => {
  amount.innerHTML = '';
  const leagueId = event.target.closest('a').id;
  globalData = FilterByLeague(data.pokemon, leagueId);
  document.getElementById('root').innerHTML = ShowPokemons(globalData);
  totalPokemonFiltered(globalData);
  document.getElementById('pokemon-types').value = -1;
  document.getElementById('pokemon-order').value = -1;
  AssignCardEventClick();
}));

const dropdownTypePokemon = document.querySelectorAll('.dropdownTypePokemon a');
dropdownTypePokemon.forEach((type) => {
  type.addEventListener('click', (event) => {
    amount.innerHTML = '';
    const typeElementId = event.target.closest('a').id;
    globalData = filterTypePokemon(data.pokemon, typeElementId);
    document.getElementById('root').innerHTML = ShowPokemons(globalData);
    totalPokemonFiltered(globalData);
    document.getElementById('pokemon-types').value = -1;
    document.getElementById('pokemon-order').value = -1;
    AssignCardEventClick();
  });
});

const getPokemons = document.getElementById('begin');
getPokemons.addEventListener('click', () => {
  amount.innerHTML = '';
  globalData = data.pokemon;
  document.getElementById('root').innerHTML = ShowPokemons(globalData);
  totalPokemonFiltered(globalData);
  document.getElementById('pokemon-types').value = -1;
  document.getElementById('pokemon-order').value = -1;
  AssignCardEventClick();
});

const checkKey = (e) => {
  // eslint-disable-next-line no-param-reassign
  e = e || window.event;

  if (e.keyCode === 37) {
    document.getElementById('previous').click();
  } else if (e.keyCode === 39) {
    document.getElementById('next').click();
  } else if (e.keyCode === 27) {
    document.querySelector('.close').click();
  }
};

document.onkeydown = checkKey;
