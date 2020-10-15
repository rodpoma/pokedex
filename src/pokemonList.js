import React from "react";

const pokemonList = ({pokemon}) => {
  return (
    <div>
      {pokemon.map(poke => (
        <a href={poke.url}>
          <p key={poke}>{poke.name}</p>
        </a>
      ))}
    </div>
  );
};

export default pokemonList;
