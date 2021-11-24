import React from "react";

export const CharactersRow = ({ character }) => {
  return (
    <tr>
      <th>{character.name}</th>
      <th>{character.eye_color}</th>
      <th>{character.gender}</th>
      <th>{}</th>
    </tr>
  );
};
