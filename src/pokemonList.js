import React from "react";

const pokemonList = ({pokemon}) => {
  return (
    <div>
      {pokemon.map(poke => (
        <div key={poke}>{poke}</div>
      ))}
    </div>
  );
};

export default pokemonList;
