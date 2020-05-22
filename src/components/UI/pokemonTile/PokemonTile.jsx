import React from "react";
import "../../../variables.scss";

function PokemonTile(props) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}

export default PokemonTile;
