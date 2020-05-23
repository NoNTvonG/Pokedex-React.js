import React from "react";
import STL from "../PokemonInfo.module.scss";

function PokemonState(props) {
  let type = props.type.map((t) => (
    <p className={`${STL.typeBtn} ${t}`} style={{ background: `var(--${t})` }}>
      {t}
    </p>
  ));

  return (
    <div className={STL.blockInfo}>
      <div className={STL.pokName}>
        <h1>{props.name}</h1>
        <div className={STL.typePanel}>{type}</div>
      </div>
      <div className={STL.pokInfo}>
        <Info text="HP:" param={props.hp} />
        <Info text="Attack:" param={props.attack} />
        <Info text="Defense:" param={props.defense} />
        <Info text="Speed:" param={props.speed} />
        <Info text="Special attack:" param={props.specialAttack} />
        <Info text="Special defense:" param={props.specialDefense} />
      </div>
    </div>
  );
}

function Info(props) {
  return (
    <div className={STL.info}>
      <p>{props.text}</p>
      <progress value={props.param} max="100" />
    </div>
  );
}

export default PokemonState;
