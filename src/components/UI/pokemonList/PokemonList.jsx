import React, { Component } from "react";
import PokemonTile from "../pokemonTile/PokemonTile";
import sxios from "axios";

class PokemonList extends React.Component {
  state = {
    pokemons: null,
  };

  async componentDidMount() {
    const arr = await sxios.get("https://pokeapi.co/api/v2/pokemon/");
    this.setState({ pokemons: arr.data["results"] });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.pokemons ? (
          <div>
            {this.state.pokemons.map((p) => (
              <PokemonTile name={p.name} key={p.id} />
            ))}
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </React.Fragment>
    );
  }
}

export default PokemonList;
