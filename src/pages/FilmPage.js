import React from "react";
import { useFilms } from "../hooks/useFilms";
import { FilmsRow } from "../components/FilmsRow";

const FilmPage = () => {
  const films = useFilms();

  return (
    <>
      <h1>FILMS</h1>
      <table className="styled-table">
        <thead>
          <tr>
            <th>NAME</th>
            <th>EPISODE NUMBER</th>
            <th>DIRECTOR</th>
            <th>CHARACTERS</th>
          </tr>
        </thead>
        <tbody>
          {films.map((film) => (
            <FilmsRow
              key={film.episode_id}
              film={film}
              id={films.indexOf(film) + 1}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default FilmPage;
