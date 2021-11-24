import React from "react";
import { Link } from "react-router-dom";

export const FilmsRow = ({ film, id }) => {
  return (
    <tr>
      <th>{film.title}</th>
      <th>{film.episode_id}</th>
      <th>{film.director}</th>
      <th>
        <Link to={`/characters/${id}`}>Ver persones</Link>
      </th>
    </tr>
  );
};
