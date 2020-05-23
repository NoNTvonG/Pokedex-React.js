import React from "react";
import "../../../variables.scss";
import STL from "./PokemonTile.module.scss";
import { NavLink } from "react-router-dom";

class PokemonTile extends React.Component {
  state = {
    name: "",
    imageURL: "",
    pokemonId: "",
    Link: "",
  };

  componentDidMount() {
    const name = this.props.name;
    const pokemonId = this.props.url.split("/")[6];
    const imageURL =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
      pokemonId +
      ".png";
    const Link = name;

    this.setState({
      name,
      imageURL,
      pokemonId,
      Link,
    });
  }

  render() {
    return (
      <NavLink to={`pokemon/${this.state.pokemonId}`}>
        <div className={STL.pokemonTyle}>
          <img src={this.state.imageURL} alt="ico" />
          <div className={STL.info}>
            <p>{this.state.name}</p>
          </div>
        </div>
      </NavLink>
    );
  }
}

export default PokemonTile;
