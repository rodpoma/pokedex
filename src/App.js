import React, {useState, useEffect} from "react";
import PokemonList from "./pokemonList";
import Pagination from "./pagination";
import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(currentPage, {
        cancelToke: new axios.CancelToken(c => (cancel = c)),
      })
      .then(res => {
        setLoading(false);
        setNextPage(res.data.next);
        setPrevPage(res.data.previous);
        setPokemon(res.data.results);
      });

    return () => cancel();
  }, [currentPage]);

  const next = () => {
    setCurrentPage(nextPage);
  };

  const prev = () => {
    setCurrentPage(prevPage);
  };

  if (loading) return "Loading...";

  return (
    <>
      <PokemonList pokemon={pokemon} />
      <Pagination next={nextPage ? next : null} prev={prevPage ? prev : null} />
    </>
  );
}

export default App;
