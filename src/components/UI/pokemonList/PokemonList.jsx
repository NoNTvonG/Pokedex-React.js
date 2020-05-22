import React from "react";
import STL from "./PokemonList.module.scss";
import PokemonTile from "../pokemonTile/PokemonTile";
import sxios from "axios";

class PokemonList extends React.Component {
  state = {
    link: "https://pokeapi.co/api/v2/pokemon/",
    pokemons: null,
  };

  async componentDidMount() {
    const arr = await sxios.get(this.state.link);
    this.setState({ pokemons: arr.data["results"] });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.pokemons ? (
          <div className={STL.list}>
            {this.state.pokemons.map((p) => (
              <PokemonTile name={p.name} url={p.url} key={p.name} />
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
