import { useEffect, useState } from "react";
import { swapi } from "../api/api";

export const useFilms = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getFilms();
  }, []);

  const getFilms = () => {
    const res = swapi.get("https://swapi.dev/api/films/");
    res.then((response) => {
      console.log(response.data);
    });
  };

  return films;
};
