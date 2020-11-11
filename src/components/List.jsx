import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { getItemsThunkCreator } from "../redux/items-reducer";
import { Pagination } from "antd";

import noposter from "../assets/noposter.jpg";
import "../scss/List.scss";

export const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w200/";

const List = (props) => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const films = useSelector((state) => state.items.films);
  const totalFilmsCount = useSelector((state) => state.items.totalFilmsCount);
  const currentPage = useSelector((state) => state.items.currentPage);

  const dispatch = useDispatch();

  useEffect(() => dispatch(getItemsThunkCreator(currentPage)), []);

  const onChangePage = (currentPage) => {
    dispatch(getItemsThunkCreator(currentPage));
  };

  return isAuth ? (
    <div className="films__container">
      <Pagination
        defaultCurrent={currentPage}
        onChange={onChangePage}
        total={totalFilmsCount}
        showSizeChanger={false}
        pageSize={20}
      />

      <div className="films">
        {films &&
          films.map((film) => (
            <Link to={`/list/${film.id}`} key={film.id}>
              <img
                className="film"
                src={
                  film.poster_path
                    ? `${BASE_IMAGE_URL}${film.poster_path}`
                    : noposter
                }
                alt={film.title}
                title={film.title}
              />
            </Link>
          ))}
      </div>
    </div>
  ) : (
    <Redirect to="/login" />
  );
};

export default List;
