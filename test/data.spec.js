import { searchName, FilterPokemonByResistantType, calculateEPS, ordered, FilterByLeague, orderedAlpha, filterTypePokemon, orderedNum } from '../src/data.js';

// Test de carga de datos en el buscador
const data = [{
  num: '001',
  name: 'bulbasaur',
  generation: {
    num: 'generation i',
    name: 'kanto',
  },
  about: "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
  img: 'https://www.serebii.net/pokemongo/pokemon/001.png',
  size: {
    height: '0.71 m',
    weight: '6.9 kg',
  },
  'pokemon-rarity': 'normal',
  type: [
    'grass',
    'poison',
  ],
  encounter: {
    'base-flee-rate': '0.1',
    'base-capture-rate': '0.2',
  },
  'spawn-chance': '0.69',
  stats: {
    'base-attack': '118',
    'base-defense': '111',
    'base-stamina': '128',
    'max-cp': '1115',
    'max-hp': '113',
  },
  resistant: [
    'water',
    'electric',
    'grass',
    'fighting',
    'fairy',
  ],
  weaknesses: [
    'fire',
    'ice',
    'flying',
    'psychic',
  ],
  'quick-move': [
    {
      name: 'vine whip',
      type: 'grass',
      'base-damage': '7',
      energy: '6',
      'move-duration-seg': '0.6',
    },
    {
      name: 'tackle',
      type: 'normal',
      'base-damage': '5',
      energy: '5',
      'move-duration-seg': '0.5',
    },
  ],
  'special-attack': [
    {
      name: 'sludge bomb',
      type: 'poison',
      'base-damage': '80',
      energy: '-50',
      'move-duration-seg': '2.3',
    },
    {
      name: 'seed bomb',
      type: 'grass',
      'base-damage': '55',
      energy: '-33',
      'move-duration-seg': '2.1',
    },
    {
      name: 'power whip',
      type: 'grass',
      'base-damage': '90',
      energy: '-50',
      'move-duration-seg': '2.6',
    },
  ],
  egg: '2 km',
  'buddy-distance-km': '3',
  evolution: {
    candy: 'bulbasaur candy',
    'next-evolution': [{
      num: '002',
      name: 'ivysaur',
      'candy-cost': '25',
      'next-evolution': [{
        num: '003',
        name: 'venusaur',
        'candy-cost': '100',
      }],
    }],
  },
},
{
  num: '009',
  name: 'blastoise',
  generation: {
    num: 'generation i',
    name: 'kanto',
  },
  about: 'Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet.',
  img: 'https://www.serebii.net/pokemongo/pokemon/009.png',
  size: {
    height: '1.60 m',
    weight: '85.5 kg',
  },
  'pokemon-rarity': 'normal',
  type: [
    'water',
  ],
  encounter: {
    'base-flee-rate': '0.05',
    'base-capture-rate': '0.05',
  },
  'spawn-chance': '0.0067',
  stats: {
    'base-attack': '171',
    'base-defense': '207',
    'base-stamina': '188',
    'max-cp': '2466',
    'max-hp': '160',
  },
  resistant: [
    'fire',
    'water',
    'ice',
    'steel',
  ],
  weaknesses: [
    'electric',
    'grass',
  ],
  'quick-move': [
    {
      name: 'water gun',
      type: 'water',
      'base-damage': '5',
      energy: '5',
      'move-duration-seg': '0.5',
    },
    {
      name: 'bite',
      type: 'dark',
      'base-damage': '6',
      energy: '4',
      'move-duration-seg': '0.5',
    },
  ],
  'special-attack': [
    {
      name: 'flash cannon',
      type: 'steel',
      'base-damage': '100',
      energy: '-100',
      'move-duration-seg': '2.7',
    },
    {
      name: 'ice beam',
      type: 'ice',
      'base-damage': '90',
      energy: '-50',
      'move-duration-seg': '3.3',
    },
    {
      name: 'hydro pump',
      type: 'water',
      'base-damage': '130',
      energy: '-100',
      'move-duration-seg': '3.3',
    },
  ],
  egg: 'not in eggs',
  'buddy-distance-km': '3',
  evolution: {
    candy: 'squirtle candy',
    'prev-evolution': [{
      num: '008',
      name: 'wartortle',
      'candy-cost': '100',
      'prev-evolution': [{
        num: '007',
        name: 'squirtle',
        'candy-cost': '25',
      }],
    }],
  },
}];

const output = [{
  num: '001',
  name: 'bulbasaur',
  generation: {
    num: 'generation i',
    name: 'kanto',
  },
  about: "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
  img: 'https://www.serebii.net/pokemongo/pokemon/001.png',
  size: {
    height: '0.71 m',
    weight: '6.9 kg',
  },
  'pokemon-rarity': 'normal',
  type: [
    'grass',
    'poison',
  ],
  encounter: {
    'base-flee-rate': '0.1',
    'base-capture-rate': '0.2',
  },
  'spawn-chance': '0.69',
  stats: {
    'base-attack': '118',
    'base-defense': '111',
    'base-stamina': '128',
    'max-cp': '1115',
    'max-hp': '113',
  },
  resistant: [
    'water',
    'electric',
    'grass',
    'fighting',
    'fairy',
  ],
  weaknesses: [
    'fire',
    'ice',
    'flying',
    'psychic',
  ],
  'quick-move': [
    {
      name: 'vine whip',
      type: 'grass',
      'base-damage': '7',
      energy: '6',
      'move-duration-seg': '0.6',
    },
    {
      name: 'tackle',
      type: 'normal',
      'base-damage': '5',
      energy: '5',
      'move-duration-seg': '0.5',
    },
  ],
  'special-attack': [
    {
      name: 'sludge bomb',
      type: 'poison',
      'base-damage': '80',
      energy: '-50',
      'move-duration-seg': '2.3',
    },
    {
      name: 'seed bomb',
      type: 'grass',
      'base-damage': '55',
      energy: '-33',
      'move-duration-seg': '2.1',
    },
    {
      name: 'power whip',
      type: 'grass',
      'base-damage': '90',
      energy: '-50',
      'move-duration-seg': '2.6',
    },
  ],
  egg: '2 km',
  'buddy-distance-km': '3',
  evolution: {
    candy: 'bulbasaur candy',
    'next-evolution': [{
      num: '002',
      name: 'ivysaur',
      'candy-cost': '25',
      'next-evolution': [{
        num: '003',
        name: 'venusaur',
        'candy-cost': '100',
      }],
    }],
  },
},
{
  num: '009',
  name: 'blastoise',
  generation: {
    num: 'generation i',
    name: 'kanto',
  },
  about: 'Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet.',
  img: 'https://www.serebii.net/pokemongo/pokemon/009.png',
  size: {
    height: '1.60 m',
    weight: '85.5 kg',
  },
  'pokemon-rarity': 'normal',
  type: [
    'water',
  ],
  encounter: {
    'base-flee-rate': '0.05',
    'base-capture-rate': '0.05',
  },
  'spawn-chance': '0.0067',
  stats: {
    'base-attack': '171',
    'base-defense': '207',
    'base-stamina': '188',
    'max-cp': '2466',
    'max-hp': '160',
  },
  resistant: [
    'fire',
    'water',
    'ice',
    'steel',
  ],
  weaknesses: [
    'electric',
    'grass',
  ],
  'quick-move': [
    {
      name: 'water gun',
      type: 'water',
      'base-damage': '5',
      energy: '5',
      'move-duration-seg': '0.5',
    },
    {
      name: 'bite',
      type: 'dark',
      'base-damage': '6',
      energy: '4',
      'move-duration-seg': '0.5',
    },
  ],
  'special-attack': [
    {
      name: 'flash cannon',
      type: 'steel',
      'base-damage': '100',
      energy: '-100',
      'move-duration-seg': '2.7',
    },
    {
      name: 'ice beam',
      type: 'ice',
      'base-damage': '90',
      energy: '-50',
      'move-duration-seg': '3.3',
    },
    {
      name: 'hydro pump',
      type: 'water',
      'base-damage': '130',
      energy: '-100',
      'move-duration-seg': '3.3',
    },
  ],
  egg: 'not in eggs',
  'buddy-distance-km': '3',
  evolution: {
    candy: 'squirtle candy',
    'prev-evolution': [{
      num: '008',
      name: 'wartortle',
      'candy-cost': '100',
      'prev-evolution': [{
        num: '007',
        name: 'squirtle',
        'candy-cost': '25',
      }],
    }],
  },
}];

const dataPokemon = [{
  num: '001',
  name: 'bulbasaur',
  generation: {
    num: 'generation i',
    name: 'kanto',
  },
  about: "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
  img: 'https://www.serebii.net/pokemongo/pokemon/001.png',
  size: {
    height: '0.71 m',
    weight: '6.9 kg',
  },
  'pokemon-rarity': 'normal',
  type: [
    'grass',
    'poison',
  ],
  encounter: {
    'base-flee-rate': '0.1',
    'base-capture-rate': '0.2',
  },
  'spawn-chance': '0.69',
  stats: {
    'base-attack': '118',
    'base-defense': '111',
    'base-stamina': '128',
    'max-cp': '1115',
    'max-hp': '113',
  },
  resistant: [
    'water',
    'electric',
    'grass',
    'fighting',
    'fairy',
  ],
  weaknesses: [
    'fire',
    'ice',
    'flying',
    'psychic',
  ],
  'quick-move': [
    {
      name: 'vine whip',
      type: 'grass',
      'base-damage': '7',
      energy: '6',
      'move-duration-seg': '0.6',
    },
    {
      name: 'tackle',
      type: 'normal',
      'base-damage': '5',
      energy: '5',
      'move-duration-seg': '0.5',
    },
  ],
  'special-attack': [
    {
      name: 'sludge bomb',
      type: 'poison',
      'base-damage': '80',
      energy: '-50',
      'move-duration-seg': '2.3',
    },
    {
      name: 'seed bomb',
      type: 'grass',
      'base-damage': '55',
      energy: '-33',
      'move-duration-seg': '2.1',
    },
    {
      name: 'power whip',
      type: 'grass',
      'base-damage': '90',
      energy: '-50',
      'move-duration-seg': '2.6',
    },
  ],
  egg: '2 km',
  'buddy-distance-km': '3',
  evolution: {
    candy: 'bulbasaur candy',
    'next-evolution': [{
      num: '002',
      name: 'ivysaur',
      'candy-cost': '25',
      'next-evolution': [{
        num: '003',
        name: 'venusaur',
        'candy-cost': '100',
      }],
    }],
  },
}];

const dataOrder = [{
  num: '250',
  name: 'ho-oh',
  generation: {
    num: 'generation ii',
    name: 'johto',
  },
  resistant: [
    'fighting',
    'bug',
    'grass',
    'steel',
    'fire',
    'fairy',
  ],
},
{
  num: '248',
  name: 'tyranitar',
  generation: {
    num: 'generation ii',
    name: 'johto',
  },
  resistant: [
    'psychic',
    'dark',
    'ghost',
    'fire',
    'poison',
    'flying',
    'normal',
  ],
},
{
  num: '056',
  name: 'mankey',
  generation: {
    num: 'generation i',
    name: 'kanto',
  },
  resistant: [
    'bug',
    'rock',
    'dark',
  ],
}];

const outputOrderMax = [{
  num: '248',
  name: 'tyranitar',
  generation: {
    num: 'generation ii',
    name: 'johto',
  },
  resistant: [
    'psychic',
    'dark',
    'ghost',
    'fire',
    'poison',
    'flying',
    'normal',
  ],
},
{
  num: '250',
  name: 'ho-oh',
  generation: {
    num: 'generation ii',
    name: 'johto',
  },
  resistant: [
    'fighting',
    'bug',
    'grass',
    'steel',
    'fire',
    'fairy',
  ],
},
{
  num: '056',
  name: 'mankey',
  generation: {
    num: 'generation i',
    name: 'kanto',
  },
  resistant: [
    'bug',
    'rock',
    'dark',
  ],
}];
const dataTypePokemon = [
  {
    num: '025',
    name: 'pikachu',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    about: "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.",
    img: 'https://www.serebii.net/pokemongo/pokemon/025.png',
    size: {
      height: '0.41 m',
      weight: '6.0 kg',
    },
    'pokemon-rarity': 'normal',
    type: [
      'electric',
    ],
    encounter: {
      'base-flee-rate': '0.1',
      'base-capture-rate': '0.2',
    },
    'spawn-chance': '0.21',
    stats: {
      'base-attack': '112',
      'base-defense': '96',
      'base-stamina': '111',
      'max-cp': '938',
      'max-hp': '99',
    },
    resistant: [
      'electric',
      'flying',
      'steel',
    ],
    weaknesses: [
      'ground',
    ],
    'quick-move': [
      {
        name: 'thunder shock',
        type: 'electric',
        'base-damage': '5',
        energy: '8',
        'move-duration-seg': '0.6',
      },
      {
        name: 'quick attack',
        type: 'normal',
        'base-damage': '8',
        energy: '10',
        'move-duration-seg': '0.8',
      },
    ],
    'special-attack': [
      {
        name: 'discharge',
        type: 'electric',
        'base-damage': '65',
        energy: '-33',
        'move-duration-seg': '2.5',
      },
      {
        name: 'thunderbolt',
        type: 'electric',
        'base-damage': '80',
        energy: '-50',
        'move-duration-seg': '2.5',
      },
      {
        name: 'wild charge',
        type: 'electric',
        'base-damage': '90',
        energy: '-50',
        'move-duration-seg': '2.6',
      },
      {
        name: 'thunder',
        type: 'electric',
        'base-damage': '100',
        energy: '-100',
        'move-duration-seg': '2.4',
      },
    ],
    egg: '2 km',
    'buddy-distance-km': '1',
    evolution: {
      candy: 'pikachu candy',
      'next-evolution': [{
        num: '026',
        name: 'raichu',
        'candy-cost': '50',
      }],
      'prev-evolution': [{
        num: '172',
        name: 'pichu',
        'candy-cost': '25',
      }],
    },
  },
  {
    num: '026',
    name: 'raichu',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    about: "If the electrical sacs become excessively charged, Raichu plants its tail in the ground and discharges. Scorched patches of ground will be found near this Pokémon's nest.",
    img: 'https://www.serebii.net/pokemongo/pokemon/026.png',
    size: {
      height: '0.79 m',
      weight: '30.0 kg',
    },
    'pokemon-rarity': 'normal',
    type: [
      'electric',
    ],
    encounter: {
      'base-flee-rate': '0.06',
      'base-capture-rate': '0.1',
    },
    'spawn-chance': '0.0076',
    stats: {
      'base-attack': '193',
      'base-defense': '151',
      'base-stamina': '155',
      'max-cp': '2182',
      'max-hp': '134',
    },
    resistant: [
      'electric',
      'flying',
      'steel',
    ],
    weaknesses: [
      'ground',
    ],
    'quick-move': [
      {
        name: 'spark',
        type: 'electric',
        'base-damage': '6',
        energy: '9',
        'move-duration-seg': '0.7',
      },
      {
        name: 'volt switch',
        type: 'electric',
        'base-damage': '20',
        energy: '25',
        'move-duration-seg': '2.3',
      },
      {
        name: 'thunder shock',
        type: 'electric',
        'base-damage': '5',
        energy: '8',
        'move-duration-seg': '0.6',
      },
    ],
    'special-attack': [
      {
        name: 'brick break',
        type: 'fight',
        'base-damage': '40',
        energy: '-33',
        'move-duration-seg': '1.6',
      },
      {
        name: 'thunder punch',
        type: 'electric',
        'base-damage': '45',
        energy: '-33',
        'move-duration-seg': '1.8',
      },
      {
        name: 'wild charge',
        type: 'electric',
        'base-damage': '90',
        energy: '-50',
        'move-duration-seg': '2.6',
      },
      {
        name: 'thunder',
        type: 'electric',
        'base-damage': '100',
        energy: '-100',
        'move-duration-seg': '2.4',
      },
    ],
    egg: 'not in eggs',
    'buddy-distance-km': '1',
    evolution: {
      candy: 'pikachu candy',
      'prev-evolution': [{
        num: '025',
        name: 'pikachu',
        'candy-cost': '50',
        'prev-evolution': [{
          num: '172',
          name: 'pichu',
          'candy-cost': '25',
        }],
      }],
    },
  },
];

const outputDataTypePokemon = [
  {
    num: '025',
    name: 'pikachu',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    about: "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.",
    img: 'https://www.serebii.net/pokemongo/pokemon/025.png',
    size: {
      height: '0.41 m',
      weight: '6.0 kg',
    },
    'pokemon-rarity': 'normal',
    type: [
      'electric',
    ],
    encounter: {
      'base-flee-rate': '0.1',
      'base-capture-rate': '0.2',
    },
    'spawn-chance': '0.21',
    stats: {
      'base-attack': '112',
      'base-defense': '96',
      'base-stamina': '111',
      'max-cp': '938',
      'max-hp': '99',
    },
    resistant: [
      'electric',
      'flying',
      'steel',
    ],
    weaknesses: [
      'ground',
    ],
    'quick-move': [
      {
        name: 'thunder shock',
        type: 'electric',
        'base-damage': '5',
        energy: '8',
        'move-duration-seg': '0.6',
      },
      {
        name: 'quick attack',
        type: 'normal',
        'base-damage': '8',
        energy: '10',
        'move-duration-seg': '0.8',
      },
    ],
    'special-attack': [
      {
        name: 'discharge',
        type: 'electric',
        'base-damage': '65',
        energy: '-33',
        'move-duration-seg': '2.5',
      },
      {
        name: 'thunderbolt',
        type: 'electric',
        'base-damage': '80',
        energy: '-50',
        'move-duration-seg': '2.5',
      },
      {
        name: 'wild charge',
        type: 'electric',
        'base-damage': '90',
        energy: '-50',
        'move-duration-seg': '2.6',
      },
      {
        name: 'thunder',
        type: 'electric',
        'base-damage': '100',
        energy: '-100',
        'move-duration-seg': '2.4',
      },
    ],
    egg: '2 km',
    'buddy-distance-km': '1',
    evolution: {
      candy: 'pikachu candy',
      'next-evolution': [{
        num: '026',
        name: 'raichu',
        'candy-cost': '50',
      }],
      'prev-evolution': [{
        num: '172',
        name: 'pichu',
        'candy-cost': '25',
      }],
    },
  },
  {
    num: '026',
    name: 'raichu',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    about: "If the electrical sacs become excessively charged, Raichu plants its tail in the ground and discharges. Scorched patches of ground will be found near this Pokémon's nest.",
    img: 'https://www.serebii.net/pokemongo/pokemon/026.png',
    size: {
      height: '0.79 m',
      weight: '30.0 kg',
    },
    'pokemon-rarity': 'normal',
    type: [
      'electric',
    ],
    encounter: {
      'base-flee-rate': '0.06',
      'base-capture-rate': '0.1',
    },
    'spawn-chance': '0.0076',
    stats: {
      'base-attack': '193',
      'base-defense': '151',
      'base-stamina': '155',
      'max-cp': '2182',
      'max-hp': '134',
    },
    resistant: [
      'electric',
      'flying',
      'steel',
    ],
    weaknesses: [
      'ground',
    ],
    'quick-move': [
      {
        name: 'spark',
        type: 'electric',
        'base-damage': '6',
        energy: '9',
        'move-duration-seg': '0.7',
      },
      {
        name: 'volt switch',
        type: 'electric',
        'base-damage': '20',
        energy: '25',
        'move-duration-seg': '2.3',
      },
      {
        name: 'thunder shock',
        type: 'electric',
        'base-damage': '5',
        energy: '8',
        'move-duration-seg': '0.6',
      },
    ],
    'special-attack': [
      {
        name: 'brick break',
        type: 'fight',
        'base-damage': '40',
        energy: '-33',
        'move-duration-seg': '1.6',
      },
      {
        name: 'thunder punch',
        type: 'electric',
        'base-damage': '45',
        energy: '-33',
        'move-duration-seg': '1.8',
      },
      {
        name: 'wild charge',
        type: 'electric',
        'base-damage': '90',
        energy: '-50',
        'move-duration-seg': '2.6',
      },
      {
        name: 'thunder',
        type: 'electric',
        'base-damage': '100',
        energy: '-100',
        'move-duration-seg': '2.4',
      },
    ],
    egg: 'not in eggs',
    'buddy-distance-km': '1',
    evolution: {
      candy: 'pikachu candy',
      'prev-evolution': [{
        num: '025',
        name: 'pikachu',
        'candy-cost': '50',
        'prev-evolution': [{
          num: '172',
          name: 'pichu',
          'candy-cost': '25',
        }],
      }],
    },
  },
];

const outputOrderMin = [{
  num: '056',
  name: 'mankey',
  generation: {
    num: 'generation i',
    name: 'kanto',
  },
  resistant: [
    'bug',
    'rock',
    'dark',
  ],
},
{
  num: '250',
  name: 'ho-oh',
  generation: {
    num: 'generation ii',
    name: 'johto',
  },
  resistant: [
    'fighting',
    'bug',
    'grass',
    'steel',
    'fire',
    'fairy',
  ],
},
{
  num: '248',
  name: 'tyranitar',
  generation: {
    num: 'generation ii',
    name: 'johto',
  },
  resistant: [
    'psychic',
    'dark',
    'ghost',
    'fire',
    'poison',
    'flying',
    'normal',
  ],
}];

const outputOrderNameAZ = [{
  num: '250',
  name: 'ho-oh',
  generation: {
    num: 'generation ii',
    name: 'johto',
  },
  resistant: [
    'fighting',
    'bug',
    'grass',
    'steel',
    'fire',
    'fairy',
  ],
},
{
  num: '056',
  name: 'mankey',
  generation: {
    num: 'generation i',
    name: 'kanto',
  },
  resistant: [
    'bug',
    'rock',
    'dark',
  ],
},
{
  num: '248',
  name: 'tyranitar',
  generation: {
    num: 'generation ii',
    name: 'johto',
  },
  resistant: [
    'psychic',
    'dark',
    'ghost',
    'fire',
    'poison',
    'flying',
    'normal',
  ],
}];

const outputOrderNameZA = [{
  num: '248',
  name: 'tyranitar',
  generation: {
    num: 'generation ii',
    name: 'johto',
  },
  resistant: [
    'psychic',
    'dark',
    'ghost',
    'fire',
    'poison',
    'flying',
    'normal',
  ],
},
{
  num: '056',
  name: 'mankey',
  generation: {
    num: 'generation i',
    name: 'kanto',
  },
  resistant: [
    'bug',
    'rock',
    'dark',
  ],
},
{
  num: '250',
  name: 'ho-oh',
  generation: {
    num: 'generation ii',
    name: 'johto',
  },
  resistant: [
    'fighting',
    'bug',
    'grass',
    'steel',
    'fire',
    'fairy',
  ],
}];

const outputNumPokedex = [{
  num: '056',
  name: 'mankey',
  generation: {
    num: 'generation i',
    name: 'kanto',
  },
  resistant: [
    'bug',
    'rock',
    'dark',
  ],
},
{
  num: '248',
  name: 'tyranitar',
  generation: {
    num: 'generation ii',
    name: 'johto',
  },
  resistant: [
    'psychic',
    'dark',
    'ghost',
    'fire',
    'poison',
    'flying',
    'normal',
  ],
},
{
  num: '250',
  name: 'ho-oh',
  generation: {
    num: 'generation ii',
    name: 'johto',
  },
  resistant: [
    'fighting',
    'bug',
    'grass',
    'steel',
    'fire',
    'fairy',
  ],
}];

describe('searchName', () => {
  it('is a function', () => {
    expect(typeof searchName).toBe('function');
  });
  it('debería retornar un array de pokemons cuyo nombre empiecen con b', () => {
    expect(searchName('b', data)).toEqual(output);
  });
});

describe('FilterPokemonByResistantType', () => {
  it('is a function', () => {
    expect(typeof FilterPokemonByResistantType).toBe('function');
  });
  it('debería retornar un array de pokemons cuya resistencia a un elemento sea water', () => {
    expect(FilterPokemonByResistantType(data, 'water')).toEqual(output);
  });
});

describe('calculateEPS', () => {
  it('is a function', () => {
    expect(typeof calculateEPS).toBe('function');
  });
  it('debería retornar un numero con el promedio del Eps', () => {
    expect(calculateEPS(dataPokemon[0])).toEqual('-7.3');
  });
});

describe('ordered', () => {
  it('is a function', () => {
    expect(typeof ordered).toBe('function');
  });
  it('debería retornar un array ordenado de pokemons de mayor nivel de resistencia a menor nivel de resistencia', () => {
    expect(ordered(dataOrder)).toEqual(outputOrderMax);
  });
  it('debería retornar un array ordenado de pokemons de menor nivel de resistencia a mayor nivel de resistencia', () => {
    expect(ordered(dataOrder).reverse()).toEqual(outputOrderMin);
  });
});

describe('FilterByLeague', () => {
  it('is a function', () => {
    expect(typeof FilterByLeague).toBe('function');
  });
  it('debería retornar un array de objetos filtrados por liga kanto', () => {
    expect(FilterByLeague(data, 'kanto')).toEqual(output);
  });
});

describe('orderedAlpha', () => {
  it('is a function', () => {
    expect(typeof orderedAlpha).toBe('function');
  });
  it('debería retornar un array de objetos ordenados de A-Z', () => {
    expect(orderedAlpha(dataOrder)).toEqual(outputOrderNameAZ);
  });
  it('debería retornar un array de objetos ordenados de Z-A', () => {
    expect(orderedAlpha(dataOrder).reverse()).toEqual(outputOrderNameZA);
  });
});

describe('orderedNum', () => {
  it('is a function', () => {
    expect(typeof orderedNum).toBe('function');
  });
  it('debería retornar un array de objetos ordenados por número de pokedex', () => {
    expect(orderedNum(dataOrder)).toEqual(outputNumPokedex);
  });
});

describe('filterTypePokemon', () => {
  it('is a function', () => {
    expect(typeof filterTypePokemon).toBe('function');
  });
  it('debería retornar un array de objetos filtrados por tipo de pokemon eléctrico', () => {
    expect(filterTypePokemon(dataTypePokemon, 'electric')).toEqual(outputDataTypePokemon);
  });
});
