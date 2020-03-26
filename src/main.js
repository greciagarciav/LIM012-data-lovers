import { searchName, FilterPokemonByResistantType, ordered, calculateEPS, FilterByLeague, orderedAlpha, filterTypePokemon } from './data.js';
import data from './data/pokemon/pokemon.js';

// const dropdownContent = document.getElementById('dropdownContent');

// dropdownContent.addEventListener('click', () => {

// });

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
    // resultSearch.style.position = 'fixed';
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

// eslint-disable-next-line no-shadow
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
  <div class="evolution-each-container">
    <img class="evolution-img" src="https://www.serebii.net/pokemongo/pokemon/${pokemon.evolution['next-evolution'][0].num}.png"/>
    <h4 class="evolution-h4">Next-evolution</h4>    
    <p class="evolution-p">#${pokemon.evolution['next-evolution'][0].num}</p>
    <p class="evolution-p">${pokemon.evolution['next-evolution'][0].name.toUpperCase()}</p>
  </div>
  `;
    if (pokemon.evolution['next-evolution'][0]['next-evolution'] !== undefined) {
      templateEvolution += `
      <div class="evolution-each-container">
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
      <div class="evolution-each-container">
        <img class="evolution-img" src="https://www.serebii.net/pokemongo/pokemon/${pokemon.evolution['prev-evolution'][0].num}.png"/>
        <h4 class="evolution-h4">Prev-evolution</h4>        
        <p class="evolution-p">#${pokemon.evolution['prev-evolution'][0].num}</p>
        <p class="evolution-p">${pokemon.evolution['prev-evolution'][0].name.toUpperCase()}</p>
      </div>
      `;
    if (pokemon.evolution['prev-evolution'][0]['prev-evolution'] !== undefined) {
      templateEvolution += `
      <div class="evolution-each-container">
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
        <div class="modal__block1">
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
            ${Movements(pokeId)}
            <div class="eps-container">
              <div id="averageEps">
                <h4 class="modal-h4">Total EPS average</h4>
                <h3 class="epsNumber">${calculateEPS(pokeId)}</h3>
              </div>
              <button id="btn-getEps" class="btn-eps">GET</button>
              <span>*Get the EPS</span>
            </div>
          </div>
        </div>
        <div class="modal__block6">
          <h3 class="modal-h3">EVOLUTION</h3>
          <div class="container-movements">
          ${Evolution(pokeId)}
          </div>
        <div/>
      <div/>
    </div>
        `;
  return infoModal;
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

const GetPokemonById = (id) => {
  const getDataPokemon = data.pokemon.filter((poke) => (poke.num === id))[0];
  return getDataPokemon;
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

const StartApp = () => {
  const dataHTML = ShowPokemons(data.pokemon);
  document.getElementById('root').innerHTML = dataHTML;
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
  const resistantType = event.target.value;
  let listTypePokemon = [];
  listTypePokemon = FilterPokemonByResistantType(data.pokemon, resistantType);
  document.getElementById('root').innerHTML = ShowPokemons(listTypePokemon);
  AssignCardEventClick();
});

const orderSelect = document.getElementById('pokemon-order');
orderSelect.addEventListener('change', (event) => {
  const orderType = event.target.value;
  let listOrderPokemon = [];
  if (orderType === 'desc') {
    listOrderPokemon = ordered(data.pokemon, orderType);
    document.getElementById('root').innerHTML = ShowPokemons(listOrderPokemon);
    AssignCardEventClick();
  } else if (orderType === 'asc') {
    listOrderPokemon = ordered(data.pokemon, orderType).reverse();
    document.getElementById('root').innerHTML = ShowPokemons(listOrderPokemon);
    AssignCardEventClick();
  } else if (orderType === '0') {
    listOrderPokemon = orderedAlpha(data.pokemon, orderType);
    document.getElementById('root').innerHTML = ShowPokemons(listOrderPokemon);
    AssignCardEventClick();
  } else if (orderType === '1') {
    listOrderPokemon = orderedAlpha(data.pokemon, orderType).reverse();
    document.getElementById('root').innerHTML = ShowPokemons(listOrderPokemon);
    AssignCardEventClick();
  } else if (orderType === 'ev') {
    StartApp();
  }
});


const optionLeague = document.querySelectorAll('.dropdown-content a');
optionLeague.forEach((league) => league.addEventListener('click', (event) => {
  const leagueId = event.target.closest('a').id;
  const leagueClicked = FilterByLeague(data.pokemon, leagueId);
  document.getElementById('root').innerHTML = ShowPokemons(leagueClicked);
  AssignCardEventClick();
}));

const dropdownTypePokemon = document.querySelectorAll('.dropdownTypePokemon a');
dropdownTypePokemon.forEach((type) => {
  type.addEventListener('click', (event) => {
    const typeElementId = event.target.closest('a').id;
    const getListTypePokemon = filterTypePokemon(data.pokemon, typeElementId);
    document.getElementById('root').innerHTML = ShowPokemons(getListTypePokemon);
    AssignCardEventClick();
  });
});
