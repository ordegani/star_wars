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

const favoriteFilmsReducer = (favoriteFilm = [], action) => {
  if (action.type === "FILM_SAVED_TO_FAVORITES") {
    let isExists = false;
    favoriteFilm.find((favorite) => {
      if (favorite=== action.payload) {
        isExists = true;
      }
    });
    if (!isExists) {
    return [...favoriteFilm, action.payload];
  }}
  return favoriteFilm;
};

export default combineReducers({
  films: filmsReducer,
  selectedFilm: selectedFilmReducer,
  favorites: favoriteFilmsReducer,
});
