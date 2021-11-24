import React from "react";
import { useParams } from "react-router-dom";
import { CharactersRow } from "../components/CharactersRow";
import { useCharacters } from "../hooks/useCharacters";
export const CharacterPage = () => {
  const params = useParams();
  const characters = useCharacters(params.id);
  return (
    <>
      <h1>CHARACTER</h1>
      <table>
        <thead>
          <tr>
            <th>NOMBRE</th>
            <th>COLOR DE OJOS</th>
            <th>GÉNERO</th>
            <th>FILMS ASOCIADOS</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((character) => (
            <CharactersRow key={character.name} character={character} />
          ))}
        </tbody>
      </table>
    </>
  );
};
