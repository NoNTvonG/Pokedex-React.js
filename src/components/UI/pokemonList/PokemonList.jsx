import React from "react";
import STL from "./PokemonList.module.scss";
import PokemonTile from "../pokemonTile/PokemonTile";
import Pagination from "../pagination/Pagination";
import sxios from "axios";

class PokemonList extends React.Component {
  state = {
    link: "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=99999",
    nextPage: null,
    previusPage: null,
    pokemons: null,
    pageSize: 21,
    currentPage: 1,
    pokemonsCount: 0,
  };

  async componentDidMount() {
    const arr = await sxios.get(this.state.link);
    this.setState({
      pokemons: arr.data["results"],
      nextPage: arr.data.next,
      previusPage: arr.data.previous,
      pokemonsCount: arr.data.count,
    });
  }
  render() {
    let currentPokemon = null;
    // Створення масиву з покемонами
    const indexOfNextPokemon = this.state.currentPage * this.state.pageSize;
    const indexOfPreviousPokemon = indexOfNextPokemon - this.state.pageSize;
    if (this.state.pokemons) {
      currentPokemon = this.state.pokemons.slice(
        indexOfPreviousPokemon,
        indexOfNextPokemon
      );
    }
    // Зміна сторінки
    const paginate = (pageNumber) =>
      this.setState({
        currentPage: pageNumber,
      });

    return (
      <React.Fragment>
        <Pagination
          pokemonsPerPage={this.state.pageSize}
          totalPokemons={this.state.pokemonsCount}
          paginate={paginate}
          currentPage={this.state.currentPage}
        />
        {this.state.pokemons ? (
          <div className={STL.list}>
            {currentPokemon.map((p) => (
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
