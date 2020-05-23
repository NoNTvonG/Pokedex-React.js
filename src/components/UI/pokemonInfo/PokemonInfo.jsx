import React from "react";
import STL from "./PokemonInfo.module.scss";
import axios from "axios";
import PokemonImage from "./pokemonImage/pokemonImage";
import PokemonState from "./pokemonStats/PokemonStats";

class PokemonInfo extends React.Component {
  state = {
    name: "",
    pokemonImage: "",
    pokemonLink: "",
    stats: {
      hp: null,
      attack: null,
      defense: null,
      speed: null,
      specialAttack: null,
      specialDefense: null,
    },
    types: [],
  };

  async componentDidMount() {
    const { pokemonId } = this.props.match.params;
    const pokemonLink = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    const pokemonInfo = await axios.get(pokemonLink);

    const pokemonImage = pokemonInfo.data.sprites.front_default;
    const name = pokemonInfo.data.name;

    let { hp, attack, defense, speed, specialAttack, specialDefense } = "";

    pokemonInfo.data.stats.map((s) => {
      switch (s.stat.name) {
        case "hp":
          return (hp = s.base_stat);
        case "attack":
          return (attack = s.base_stat);
        case "defense":
          return (defense = s.base_stat);
        case "speed":
          return (speed = s.base_stat);
        case "special-attack":
          return (specialAttack = s.base_stat);
        case "special-defense":
          return (specialDefense = s.base_stat);
        default:
          break;
      }
    });
    const types = pokemonInfo.data.types.map((t) => t.type.name);

    this.setState({
      name,
      pokemonImage,
      pokemonLink,
      stats: {
        hp,
        attack,
        defense,
        speed,
        specialAttack,
        specialDefense,
      },
      types,
    });
  }

  render() {
    return (
      <div className={STL.pokemonInfo}>
        <div className={STL.blockFirst}>
          <PokemonImage image={this.state.pokemonImage} />
          <PokemonState
            name={this.state.name}
            hp={this.state.stats.hp}
            attack={this.state.stats.attack}
            defense={this.state.stats.defense}
            speed={this.state.stats.speed}
            specialAttack={this.state.stats.specialAttack}
            specialDefense={this.state.stats.specialDefense}
            type={this.state.types}
          />
        </div>
      </div>
    );
  }
}

export default PokemonInfo;
