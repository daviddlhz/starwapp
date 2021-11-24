import { useEffect, useState } from "react";
import { swapi } from "../api/api";

export const useFilms = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getFilms();
  }, []);

  const getFilms = async () => {
    const res = await swapi.get("https://swapi.dev/api/films/");
    setFilms(res.data.results);
  };

  return films;
};
