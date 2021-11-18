import React from "react";
import { connect } from "react-redux";
import { saveToFavorites } from "../actions";
import { loadState } from "./LocalStorage";

const Favorites = (props) => {

  // loadState();
  // props.loadState();
  // if (props.favoritesdata = undefined){return null}
  if (props.favorites === []) {
    return null}
    return props.favorites.map((favorite) => {
      return (
        <div className="ui divided list">
          <div className="right floated content"/>
          <div className="item" key={favorite}>
          ⭐{favorite}
          </div>
        </div>
      );
    });
};
const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
    saveToFavorites: state.saveToFavorites,
  };
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     loadState: (favoritesdata) => dispatch({ type: "LOAD_STATE", payload: favoritesdata }),
//   };
// };


export default connect(mapStateToProps,
  //  mapDispatchToProps
   )(Favorites);
