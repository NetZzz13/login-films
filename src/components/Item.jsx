import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { getFilmThunkCreator } from "../redux/items-reducer";
import noposter from "../assets/noposter.jpg";
import { BASE_IMAGE_URL } from "./List";
import "../scss/Item.scss";

const Item = (props) => {
  const dispatch = useDispatch();
  const film = useSelector((state) => state.items.film);
  const filmId = props.match.params.filmId;

  useEffect(() => dispatch(getFilmThunkCreator(filmId)), []);

  // console.log(film)

  return (
    film && (
      <div className="item">
        <div className="item__title"> {film.title || film.original_title}</div>
        <img
          className="item__cover"
          src={
            film.poster_path ? `${BASE_IMAGE_URL}${film.poster_path}` : noposter
          }
          alt={film.title}
          title={film.title || film.original_title}
        />
        <div className="item__overview"> {film.overview}</div>
      </div>
    )
  );
};

let withUrlData = withRouter(Item);

export default withUrlData;
