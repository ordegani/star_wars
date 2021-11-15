import React from "react";
import FilmList from "./FilmList";
import FilmDetails from "./FilmDetails";
import Favorites from "./Favorites";

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column six wide">
          <FilmList />
        </div>
        <div className="column ten wide">
          <FilmDetails />
          <Favorites />
        </div>
      </div>
    </div>
  );
};

export default App;

