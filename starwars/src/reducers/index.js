import { combineReducers } from "redux";

const filmsReducer = () => {
  return [];
};

const selectedFilmReducer = (selectedFilm = null, action) => {
  if (action.type === "FILM_SELECTED") {
    return action.payload;
  }
  return selectedFilm;
};

const favoriteFilmsReducer = (favoriteFilm = null, action) => {
  if (action.type === "FILM_SAVED_TO_FAVORITES") {
    return [...favorites, action.payload];
  }
  return favoriteFilm;
};

export default combineReducers({
  films: filmsReducer,
  selectedFilm: selectedFilmReducer,
  favorites: favoriteFilmsReducer
});
