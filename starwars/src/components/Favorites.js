import React from "react";
import { connect } from "react-redux";
import { saveToFavorites } from "../actions";

const Favorites = (props) => {
  if (props.favorites != []) {
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
  }
};
const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
    saveToFavorites: state.saveToFavorites,
  };
};

export default connect(mapStateToProps, { saveToFavorites })(Favorites);
