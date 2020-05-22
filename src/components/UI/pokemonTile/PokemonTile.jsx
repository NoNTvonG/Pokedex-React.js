import React from "react";
import "../../../variables.scss";
import STL from "./PokemonTile.module.scss";

class PokemonTile extends React.Component {
  state = {
    name: "",
    imageURL: "",
    pokemonId: "",
  };

  componentDidMount() {
    // debugger;
    const name = this.props.name;
    const pokemonId = this.props.url.split("/")[6];
    const imageURL =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
      pokemonId +
      ".png";

    this.setState({
      name,
      imageURL,
      pokemonId,
    });
  }

  render() {
    return (
      <div className={STL.pokemonTyle}>
        <img src={this.state.imageURL} alt="ico" />
        <span>{this.state.name}</span>

        <h2>{this.state.pokemonId}</h2>
      </div>
    );
  }
}

export default PokemonTile;
