import React from "react";
import { useFilms } from "../hooks/useFilms";
import { FilmsRow } from "../components/FilmsRow";

const FilmPage = () => {
  const films = useFilms();

  return (
    <div>
      <h1>FILMS</h1>
      <table>
        <thead>
          <tr>
            <th>NOMBRE</th>
            <th>NÚMERO DE EPISODIO</th>
            <th>DIRECTOR</th>
            <th>PERSONAJES</th>
          </tr>
        </thead>
        <tbody>
          {films.map((film) => (
            <FilmsRow key={film.episode_id} film={film} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FilmPage;
