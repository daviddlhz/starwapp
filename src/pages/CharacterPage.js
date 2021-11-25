import React from "react";
import { useParams } from "react-router-dom";
import { CharactersRow } from "../components/CharactersRow";
import { useCharacters } from "../hooks/useCharacters";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

export const CharacterPage = () => {
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);

  const params = useParams();
  const characters = useCharacters(params.id);
  const slice = characters.slice(offset, offset + perPage);

  const pagination = async () => {
    setPageCount(Math.ceil(characters.length / perPage));
  };
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  useEffect(() => {
    pagination();
  }, [offset]);
  return (
    <>
      <h1>CHARACTERS</h1>
      <table className="styled-table">
        <thead>
          <tr>
            <th>NAME</th>
            <th>EYE COLOR</th>
            <th>GENDER</th>
            <th>FILMS</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((character) => (
            <CharactersRow key={character.name} character={character} />
          ))}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </>
  );
};
