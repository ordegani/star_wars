import React from "react";

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
