import { combineReducers } from 'redux';

const filmsReducer = () =>{
    return[
        
    ];
}

selectedFilmReducer = (selectedFilm=null, action) =>{
    if (action.type === 'FILM_SELECTED'){
        return action.payload;
    }
    return selectedFilm;
}

export default combineReducers({
    films: filmsReducer,
    selectedFilm: selectedFilmReducer
});