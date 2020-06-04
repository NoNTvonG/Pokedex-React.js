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
    loading: true,
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
      // loading: false,
    });
  }

  render() {
    return (
      <NavLink to={`pokemon/${this.state.pokemonId}`}>
        <div className={STL.pokemonTyle}>
          {this.state.loading ? <div className={STL.loader}></div> : null}
          <img
            onLoad={() => this.setState({ loading: false })}
            src={this.state.imageURL}
            alt="ico"
            style={
              this.state.loading ? { display: "none" } : { display: "block" }
            }
          />
          <div className={STL.info}>
            <p>{this.state.name}</p>
          </div>
        </div>
      </NavLink>
    );
  }
}

export default PokemonTile;
