import React from "react";
import "../../../variables.scss";
import STL from "./Dashboard.module.scss";
import PokemonList from "../../UI/pokemonList/PokemonList";

function Dashboard(props) {
  return (
    <div className={STL.pokemonTile}>
      <PokemonList />
    </div>
  );
}

export default Dashboard;
