import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilmPage from "./pages/FilmPage";
import { CharacterPage } from "./pages/CharacterPage";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FilmPage />}></Route>
          <Route path="/characters/:id" element={<CharacterPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
