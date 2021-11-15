import React from "react";
import { connect } from "react-redux";

const FilmDetails = (props) => {
  // if (!film) {
  //   return <h2>Select a Film</h2>;
  // }
  return (
    <div>
      <h2>Film:{props.title}</h2>
      <br />
      <h2>Abstract:{props.opening_crawl}</h2>
      <button className="ui button primary" onClick={() => props.title}>SAVE TO FAVORITES</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedFilm: state.selectedFilm,
  };
};

export default connect(mapStateToProps)(FilmDetails);
