import React from "react";
import FilmList from "./FilmList";
import FilmDetails from "./FilmDetails";
import Favorites from "./Favorites";

const App = () => {
  return (
    <div className="ui container vertically padded grid">


      {/* <div class="ui divider"></div> */}

      <div className="ui row">
        <div className="column four wide">
          <FilmList />
        </div>
        <div className="column eight wide">
          <FilmDetails />
        </div>
        <div className="column four wide">
          <Favorites />
        </div>
      </div>
    </div>
  );
};

export default App;