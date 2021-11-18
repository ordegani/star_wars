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
    return [...favoriteFilm, action.payload];
  }
  return favoriteFilm;
};

// const favoritesdataReducer = (favoritesdataReducer, action) => {
//   if (action.type === "LOAD_STATE") {
//     return action.payload;
//   }
//   return favoritesdataReducer;
// };

export default combineReducers({
  films: filmsReducer,
  selectedFilm: selectedFilmReducer,
  favorites: favoriteFilmsReducer,
  // favoritesdata: favoritesdataReducer,
});
