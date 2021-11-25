import { useEffect, useState } from "react";
import { swapi } from "../api/api";

export const useCharacters = (id) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = async () => {
    const res = await swapi.get(`https://swapi.dev/api/films/${id}`);
    await getData(res.data.characters);
  };

  const getData = async (character) => {
    const data = [];

    for (let index = 0; index < character.length; index++) {
      await swapi.get(character[index]).then((res) => data.push(res.data));
    }
    setCharacters(data);
  };

  return characters;
};
