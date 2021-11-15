import { combineReducers } from "redux";
// import swapi from "../apis/swapi";

const filmsReducer = () => {
  // if (action.type === "FETCHED_DATA"){
  // const response = await axios.get("https://swapi.dev/api/films");
  // return response;
};

const selectedFilmReducer = (selectedFilm = null, action) => {
  if (action.type === "FILM_SELECTED") {
    return action.payload;
  }
  return selectedFilm;
};

const favoriteFilmsReducer = (favoriteFilm = null, action) => {
  if (action.type === "FILM_SAVED_TO_FAVORITES") {
    return [...action.payload, action.payload];
  }
  return favoriteFilm;
};

export default combineReducers({
  films: filmsReducer,
  selectedFilm: selectedFilmReducer,
  favorites: favoriteFilmsReducer,
});
