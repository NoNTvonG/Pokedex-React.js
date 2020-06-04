import React from "react";
import STL from "./Filter.module.scss";

function TypeFilter(props) {
  return (
    <div className={STL.typePanel}>
      <div className={STL.inner_typePanel}>
        <input type="checkbox" name={props.name} id={props.type} />
        <label htmlFor={props.type}>{props.type}</label>
      </div>
    </div>
  );
}

export default TypeFilter;
