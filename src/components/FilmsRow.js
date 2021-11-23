import React from "react";

export const FilmsRow = ({ film }) => {
  return (
    <tr>
      <th>{film.title}</th>
      <th>{film.episode_id}</th>
      <th>{film.director}</th>
      <th></th>
    </tr>
  );
};
