import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadState } from "./LocalStorage";

const FilmDetails = (props) => {
  useEffect(() => {
loadState()
    
  }, [props.selectedFilm])
  if (!props.selectedFilm) {
    return <div>Select a film to show its abstract</div>
  }
  return (
    <div>
      <div>Film:{props.selectedFilm.title}</div>
      <div>Abstract:{props.selectedFilm.opening_crawl}</div>
      <br />
      <button
        className="ui button primary"
        onClick={() => props.saveToFavorites(props.selectedFilm.title)}
      >
        SAVE TO FAVORITES
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedFilm: state.selectedFilm,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    saveToFavorites: (film) =>
      dispatch({ type: "FILM_SAVED_TO_FAVORITES", payload: film }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FilmDetails);
