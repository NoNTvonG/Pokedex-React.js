import React from "react";
import STL from "./PokemonList.module.scss";
import PokemonTile from "../pokemonTile/PokemonTile";
import Pagination from "rc-pagination";
import sxios from "axios";
import Filter from "../filter/Filter";

class PokemonList extends React.Component {
  state = {
    link: "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=99999",
    nextPage: null,
    previusPage: null,
    pokemons: null,
    pageSize: 21,
    currentPage: 1,
    pokemonsCount: 0,
    search: "",
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
  onChange = (page) => {
    console.log(page);
    this.setState({
      currentPage: page,
    });
  };
  updateSearch = (value) => {
    this.setState({ search: value });
  };

  render() {
    let currentPokemon = null;
    let filterPokemons = null;
    // Створення масиву з покемонами
    const indexOfNextPokemon = this.state.currentPage * this.state.pageSize;
    const indexOfPreviousPokemon = indexOfNextPokemon - this.state.pageSize;
    if (this.state.pokemons) {
      currentPokemon = this.state.pokemons.slice(
        indexOfPreviousPokemon,
        indexOfNextPokemon
      );
      filterPokemons = this.state.pokemons.filter((p) => {
        return (
          p.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        );
      });
    }

    return (
      <React.Fragment>
        <Filter updateData={this.updateSearch} />
        {this.state.pokemons ? (
          <div>
            {this.state.search ? (
              <div className={STL.list}>
                {filterPokemons.map((p) => (
                  <PokemonTile name={p.name} url={p.url} key={p.name} />
                ))}
              </div>
            ) : (
              <div className={STL.list}>
                {currentPokemon.map((p) => (
                  <PokemonTile name={p.name} url={p.url} key={p.name} />
                ))}
              </div>
            )}
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
        <Pagination
          className={STL.pagination}
          current={this.state.currentPage}
          total={this.state.pokemonsCount}
          onChange={this.onChange}
          defaultPageSize={this.state.pageSize}
          totalBoundaryShowSizeChanger={this.state.pokemonsCount}
          jumpPrevIcon={<i className="fas fa-angle-double-left"></i>}
          jumpNextIcon={<i className="fas fa-angle-double-right"></i>}
          prevIcon={<i className="fas fa-angle-left"></i>}
          nextIcon={<i className="fas fa-angle-right"></i>}
        />
      </React.Fragment>
    );
  }
}

export default PokemonList;
