import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilmPage from "./pages/FilmPage";
import { CharacterPage } from "./pages/CharacterPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FilmPage />}></Route>
        <Route path="/characters/:id" element={<CharacterPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
