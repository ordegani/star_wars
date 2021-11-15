import React from "react";
import { connect } from "react-redux";
import { saveToFavorites } from "../actions";

const Favorites = (props) => {
  if (!props.favorites) {
    return null;
  }
  return (
    <div>
      <div>
        <br />
        favorite: {props.favorites}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
    saveToFavorites: state.saveToFavorites,
  };
};

export default connect(mapStateToProps, { saveToFavorites })(Favorites);
