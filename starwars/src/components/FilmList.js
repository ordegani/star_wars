import React, { useEffect } from "react";
import { connect } from "react-redux";
// import { selectFilm } from "../actions";
// import { fetchData } from "../actions";
import swapi from "../apis/swapi";

const FilmList = (props) => {
  useEffect(() => {
    props.fetchData();
  }, []);
  const list = () => {
    return props.films.map((film) => {
      return (
        <div className="item" key={film.title}>
          <div className="right floated content">
            <button
              className="ui small button primary"
              onClick={() => props.selectFilm(film)}
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

const mapDispatchToProps = (dispatch) => {
  return {
    selectFilm: (film) => dispatch({ type: "FILM_SELECTED", payload: film }),
    fetchData: async () => {
      const response = await swapi.get("./");
      return dispatch({
        type: "FETCHED_DATA",
        payload: response?.data?.results,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmList);
