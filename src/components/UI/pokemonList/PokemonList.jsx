import React from "react";
import STL from "./PokemonList.module.scss";
import PokemonTile from "../pokemonTile/PokemonTile";
import sxios from "axios";

class PokemonList extends React.Component {
  state = {
    link: "https://pokeapi.co/api/v2/pokemon/",
    nextPage: null,
    previusPage: null,
    pokemons: null,
  };

  async componentDidMount() {
    const arr = await sxios.get(this.state.link);
    this.setState({
      pokemons: arr.data["results"],
      nextPage: arr.data.next,
      previusPage: arr.data.previous,
    });
  }

  render() {
    const nextPage = async () => {
      const arr = await sxios.get(this.state.nextPage);
      this.setState({
        pokemons: arr.data["results"],
        nextPage: arr.data.next,
        previusPage: arr.data.previous,
      });
    };
    const backPage = async () => {
      if (this.state.previusPage) {
        const arr = await sxios.get(this.state.previusPage);
        this.setState({
          pokemons: arr.data["results"],
          nextPage: arr.data.next,
          previusPage: arr.data.previous,
        });
        console.log(this.state.previusPage);
      }
    };

    return (
      <React.Fragment>
        <div className={STL.pagination}>
          <button onClick={backPage}>Back</button>
          <button onClick={nextPage}>Next</button>
        </div>
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
