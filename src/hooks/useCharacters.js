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
    let i = 0;
    for (let char of character) {
      await swapi.get(char).then((res) => data.push(res.data));
      if (i > 8) {
        break;
      }
      i++;
    }
    setCharacters(data);
  };

  return characters;
};
