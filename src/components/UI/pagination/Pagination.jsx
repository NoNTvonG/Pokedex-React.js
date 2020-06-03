import React from "react";
import STL from "./Pagination.module.scss";

function Pagination(props) {
  const pageNumber = [];

  for (
    let i = 1;
    i <= Math.ceil(props.totalPokemons / props.pokemonsPerPage);
    i++
  ) {
    pageNumber.push(i);
  }

  return (
    <nav className={STL.pagination}>
      <ul className="pagination">
        {pageNumber.map((num) => (
          <li
            key={num}
            className={`${props.currentPage === num && STL.active}`}
          >
            <a onClick={() => props.paginate(num)} href="#">
              {num}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
