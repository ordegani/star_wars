import React, { Component } from "react";
import { connect } from "react-redux";

const FilmDetails = (props) => {
  if (!selectedFilm) {
    return <h2>Select a Film</h2>;
  }
  return (
    <div>
      <h2>Film:{}</h2>
      <br />
      <h4>Abstract:{}</h4>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedFilm: state.selectedFilm,
  };
};

export default connect(mapStateToProps)(FilmDetails);
