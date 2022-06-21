import React from "react";
import pokemons from "./data";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  render() {
    return (
      <div id="pokedex">
        {pokemons.map((pokemon) => <Pokemon about={pokemon} key={pokemon.name} />)}
      </div>
    );
  }
}

export default Pokedex;
