import React, {useState} from "react";
import PokemonList from "./pokemonList";
import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState([]);

  axios.get("https://pokeapi.co/api/v2/pokemon").then(res => {
    setPokemon(res.data.results.map(poke => poke.name));
  });
  return <PokemonList pokemon={pokemon} />;
}

export default App;
