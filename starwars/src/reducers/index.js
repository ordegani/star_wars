import { combineReducers } from "redux";
// import swapi from "../apis/swapi";

const filmsReducer = (state = [], action) => {
  if (action.type === "FETCHED_DATA") {
    return action.payload;
  }
  return state;
};

const selectedFilmReducer = (selectedFilm = null, action) => {
  if (action.type === "FILM_SELECTED") {
    return action.payload;
  }
  return selectedFilm;
};

const favoriteFilmsReducer = (favoriteFilm = null, action) => {
  if (action.type === "FILM_SAVED_TO_FAVORITES") {
    return action.payload;
  }
  return favoriteFilm;
};

export default combineReducers({
  films: filmsReducer,
  selectedFilm: selectedFilmReducer,
  favorites: favoriteFilmsReducer,
});
