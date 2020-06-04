import React from "react";
import STL from "./Filter.module.scss";
import TypeFilter from "./TypeFilter";

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      types: [
        "normal",
        "poison",
        "psychic",
        "grass",
        "ground",
        "ice",
        "fire",
        "rock",
        "dragon",
        "water",
        "bug",
        "dark",
        "fighting",
        "ghost",
        "steel",
        "flying",
        "electric",
        "fairy",
      ],
    };
  }

  render() {
    let newSearchElement = React.createRef();

    let onSearchChange = () => {
      let body = newSearchElement.current.value;
      this.props.updateData(body);
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
        {/* <div className={STL.typesFilter}>
          {this.state.types.map((t) => (
            <TypeFilter name={t} type={t} key={t} />
          ))}
        </div> */}
      </div>
    );
  }
}

export default Filter;
