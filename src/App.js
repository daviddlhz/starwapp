import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const FilmPage = React.lazy(() => import("./pages/FilmPage"));
const CharacterPage = React.lazy(() => import("./pages/CharacterPage"));

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback={<h1>Loading...</h1>}>
                <FilmPage />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/characters/:id"
            element={
              <React.Suspense fallback={<h1>Loading...</h1>}>
                <CharacterPage />
              </React.Suspense>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
