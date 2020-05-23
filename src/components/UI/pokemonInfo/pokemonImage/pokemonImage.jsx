import React from "react";
import STL from "../PokemonInfo.module.scss";

function PokemonImage(props) {
  return (
    <div className={STL.blockImage}>
      <img src={props.image} alt="ico" />
    </div>
  );
}
export default PokemonImage;
