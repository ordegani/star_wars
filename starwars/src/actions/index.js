import swapi from '../apis/swapi';

export const selectFilm = (film)=> {
    return{
        type:'FILM_SELECTED',
        payload:film
    };
};

export const saveToFavorites = (favorite)=> {
    return{
        type:'FILM_SAVED_TO_FAVORITES',
        payload:favorite
    };
};

export const fetchPost = () =>{
    return {
        type:'FETCHED_POST'
    }

}