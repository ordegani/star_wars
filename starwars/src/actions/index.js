import swapi from "../apis/swapi";

export const selectFilm = (film) => {
  return {
    type: "FILM_SELECTED",
    payload: film,
  };
};

export const saveToFavorites = (favorite) => {
  return {
    type: "FILM_SAVED_TO_FAVORITES",
    payload: favorite,
  };
};

// export const loadData = (favoritesdata) =>{
//   return{
//     type:"LOAD_STATE",
//     payload: favoritesdata
//   }
// }

export const fetchData = () => async (dispatch) => {
  const response = await swapi.get("/");

  dispatch({ type: "FETCHED_DATA", payload: response.results });
};
