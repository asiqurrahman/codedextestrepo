const pokemonList = [
  {
    name: "ivysaur",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    type: "grass",
  },
  {
    name: "bulbasaur",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    type: "grass",
  },
  {
    name: "venusaur",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    type: "grass",
  },
  {
    name: "charmander",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    type: "fire",
  },
  {
    name: "charmeleon",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    type: "fire",
  },
  {
    name: "kakuna",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
    type: "bug",
  },
  {
    name: "metapod",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    type: "bug",
  },
  {
    name: "weedle",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
    type: "bug",
  },
  {
    name: "caterpie",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    type: "bug",
  },
  {
    name: "pidgeotto",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
    type: "normal",
  },
  {
    name: "pidgeot",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
    type: "normal",
  },
  {
    name: "raticate",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
    type: "normal",
  },
  {
    name: "spearow",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
    type: "normal",
  },
  {
    name: "fearow",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
    type: "normal",
  },
  {
    name: "raichu",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
    type: "electric",
  },
  {
    name: "beedrill",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
    type: "bug",
  },
  {
    name: "pidgey",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
    type: "normal",
  },
  {
    name: "squirtle",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    type: "water",
  },
  {
    name: "rattata",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    type: "normal",
  },
  {
    name: "ekans",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
    type: "poison",
  },
  {
    name: "nidorina",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
    type: "poison",
  },
  {
    name: "nidoqueen",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
    type: "poison",
  },
  {
    name: "nidorino",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
    type: "poison",
  },
  {
    name: "arbok",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
    type: "poison",
  },
  {
    name: "pikachu",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    type: "electric",
  },
  {
    name: "wartortle",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    type: "water",
  },
  {
    name: "sandslash",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
    type: "ground",
  },
  {
    name: "nidoking",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
    type: "poison",
  },
  {
    name: "charizard",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    type: "fire",
  },
  {
    name: "blastoise",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    type: "water",
  },
  {
    name: "clefable",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
    type: "fairy",
  },
  {
    name: "victreebel",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
    type: "grass",
  },
  {
    name: "butterfree",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    type: "bug",
  },
  {
    name: "ninetales",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
    type: "fire",
  },
  {
    name: "zubat",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
    type: "poison",
  },
  {
    name: "golbat",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
    type: "poison",
  },
  {
    name: "oddish",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
    type: "grass",
  },
  {
    name: "gloom",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
    type: "grass",
  },
  {
    name: "vileplume",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
    type: "grass",
  },
  {
    name: "paras",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
    type: "bug",
  },
  {
    name: "parasect",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
    type: "bug",
  },
  {
    name: "venonat",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
    type: "bug",
  },
  {
    name: "venomoth",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
    type: "bug",
  },
  {
    name: "diglett",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
    type: "ground",
  },
  {
    name: "dugtrio",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
    type: "ground",
  },
  {
    name: "meowth",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
    type: "normal",
  },
  {
    name: "persian",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
    type: "normal",
  },
  {
    name: "psyduck",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
    type: "water",
  },
  {
    name: "golduck",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
    type: "water",
  },
  {
    name: "mankey",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
    type: "fighting",
  },
  {
    name: "primeape",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
    type: "fighting",
  },
  {
    name: "growlithe",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
    type: "fire",
  },
  {
    name: "arcanine",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
    type: "fire",
  },
  {
    name: "poliwag",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
    type: "water",
  },
  {
    name: "poliwhirl",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
    type: "water",
  },
  {
    name: "poliwrath",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
    type: "water",
  },
  {
    name: "abra",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
    type: "psychic",
  },
  {
    name: "kadabra",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
    type: "psychic",
  },
  {
    name: "alakazam",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
    type: "psychic",
  },
  {
    name: "machop",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
    type: "fighting",
  },
  {
    name: "machoke",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
    type: "fighting",
  },
  {
    name: "machamp",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
    type: "fighting",
  },
  {
    name: "bellsprout",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
    type: "grass",
  },
  {
    name: "weepinbell",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
    type: "grass",
  },
  {
    name: "tentacool",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
    type: "water",
  },
  {
    name: "tentacruel",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
    type: "water",
  },
  {
    name: "geodude",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
    type: "rock",
  },
  {
    name: "graveler",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
    type: "rock",
  },
  {
    name: "golem",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
    type: "rock",
  },
  {
    name: "ponyta",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
    type: "fire",
  },
  {
    name: "rapidash",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
    type: "fire",
  },
  {
    name: "slowpoke",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
    type: "water",
  },
  {
    name: "slowbro",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
    type: "water",
  },
  {
    name: "magnemite",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
    type: "electric",
  },
  {
    name: "magneton",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
    type: "electric",
  },
  {
    name: "doduo",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
    type: "normal",
  },
  {
    name: "dodrio",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
    type: "normal",
  },
  {
    name: "seel",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
    type: "water",
  },
  {
    name: "dewgong",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
    type: "water",
  },
  {
    name: "grimer",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
    type: "poison",
  },
  {
    name: "muk",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
    type: "poison",
  },
  {
    name: "shellder",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
    type: "water",
  },
  {
    name: "cloyster",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
    type: "water",
  },
  {
    name: "gastly",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
    type: "ghost",
  },
  {
    name: "haunter",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
    type: "ghost",
  },
  {
    name: "gengar",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
    type: "ghost",
  },
  {
    name: "onix",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
    type: "rock",
  },
  {
    name: "drowzee",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
    type: "psychic",
  },
  {
    name: "hypno",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
    type: "psychic",
  },
  {
    name: "krabby",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
    type: "water",
  },
  {
    name: "kingler",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
    type: "water",
  },
  {
    name: "voltorb",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
    type: "electric",
  },
  {
    name: "electrode",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
    type: "electric",
  },
  {
    name: "exeggcute",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
    type: "grass",
  },
  {
    name: "exeggutor",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
    type: "grass",
  },
  {
    name: "sandshrew",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
    type: "ground",
  },
  {
    name: "vulpix",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
    type: "fire",
  },
  {
    name: "jigglypuff",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
    type: "normal",
  },
  {
    name: "wigglytuff",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
    type: "normal",
  },
  {
    name: "marowak",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
    type: "ground",
  },
  {
    name: "cubone",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
    type: "ground",
  },
  {
    name: "clefairy",
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
    type: "fairy",
  },
];

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const givemeBTN = document.getElementById("random-pokemon");

console.log({ givemeBTN });

const giveMeDiv = document.getElementById("pokemon-container");

function getQoute() {
  const randomNum = randomIntFromInterval(0, pokemonList.length - 1);

  const randomPokemon = pokemonList[randomNum];
  giveMeDiv.innerText = randomPokemon.name;
}
