import React from "react";
import FilmList from "./FilmList";
import FilmDetails from "./FilmDetails";

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <FilmList />
        </div>
        <div className="column eight wide">
          <FilmDetails />
        </div>
      </div>
    </div>
  );
};

export default App;

