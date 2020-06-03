import React from "react";
import STL from "./Filter.module.scss";

function Filter(props) {
  let newSearchElement = React.createRef();

  let onSearchChange = () => {
    let body = newSearchElement.current.value;
    props.updateData(body);
  };

  return (
    <div className={STL.filterPanel}>
      <div className={STL.searchPanel}>
        <div className={STL.inner_searchPanel}>
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="Enter pokemon name"
            autoComplete="off"
            onChange={onSearchChange}
            ref={newSearchElement}
          />
        </div>
      </div>
      <div className={STL.typeFilter}></div>
    </div>
  );
}

export default Filter;
