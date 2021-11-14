import React, { Component } from "react";
import { connect } from "react-redux";
import {fetchPost} from "../actions";

const FilmDetails = (props) => {
  if (!selectedFilm) {
    return <h2>Select a Film</h2>;
  }
  return (
    <div>
      <h2>Film:{}</h2>
      <br />
      <h4>Abstract:{}</h4>
      <button className="ui button primary" onClick={}>SAVE TO FAVORITES</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedFilm: state.selectedFilm,
  };
};

export default connect(mapStateToProps, { fetchPost })(FilmDetails);
