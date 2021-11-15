import React from "react";
import { connect } from "react-redux";
import {saveToFavorites} from "../actions";

const Favorites = (props) =>{
if (!favorites){
    return <h2>you haven't chosen any favorites yet</h2>
}
return(
    <div>
    <h2>favorites:{props.favorites.title}</h2>
    </div>
)

const mapStateToProps = (state) => {
    return {
      favorites: state.favorites,
    };
  };
}

export default connect(mapStateToProps, { saveToFavorites })(FilmDetails);
