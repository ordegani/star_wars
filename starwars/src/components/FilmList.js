import React, { Component } from "react";
import { connect } from "react-redux";
import { selectFilm } from "../actions";

const FilmList = () => {
  const list = () => {
    return props.films.map((film) => {
      return (
        <div className="item" key={film.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectFilm}
            >
              SELECT
            </button>
          </div>
          <div className="content">{film.title}</div>
        </div>
      );
    });
  };
  return <div className="ui divided list">{list()}</div>;
};

const mapStateToProps = (state) => {
  return {
    films: state.films,
  };
};

export default connect(mapStateToProps, { selectFilm })(FilmList);
