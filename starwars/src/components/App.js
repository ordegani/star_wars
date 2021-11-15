import React from "react";
import FilmList from "./FilmList";
import FilmDetails from "./FilmDetails";
import Favorites from "./Favorites";

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <FilmList />
        </div>
        <div className="column eight wide">
          <FilmDetails />
          <Favorites />
        </div>
      </div>
    </div>
  );
};

export default App;

