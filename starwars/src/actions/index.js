export const selectFilm = (film)=> {
    return{
        type:'FILM_SELECTED',
        payload:film
    };
};