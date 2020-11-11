import { filmsAPI } from "../api/api";

const initialState = {
  films: [],
  totalFilmsCount: 0,
  currentPage: 1,
  film: {},
};

export const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILMS": {
      return { ...state, films: action.films };
    }
    case "SET_FILM": {
      return { ...state, film: action.film };
    }
    case "SET_FILMS_TOTAL_COUNT": {
      return { ...state, totalFilmsCount: action.totalFilmsCount };
    }
    case "SET_CURRENT_PAGE": {
      return { ...state, currentPage: action.currentPage };
    }
    default:
      return state;
  }
};

export const actionsFilms = {
  setFilms: (films) => {
    return {
      type: "SET_FILMS",
      films,
    };
  },
  setFilm: (film) => {
    return {
      type: "SET_FILM",
      film,
    };
  },
  setFilmsTotalCount: (totalFilmsCount) => {
    return {
      type: "SET_FILMS_TOTAL_COUNT",
      totalFilmsCount,
    };
  },
  setCurrentPage: (currentPage) => {
    return {
      type: "SET_CURRENT_PAGE",
      currentPage,
    };
  },
};

export const getItemsThunkCreator = (currentPage) => {
  return async (dispatch) => {
    let data = await filmsAPI.getFilms(currentPage);
    dispatch(actionsFilms.setFilms(data.results));
    dispatch(actionsFilms.setFilmsTotalCount(data.total_results));
    dispatch(actionsFilms.setCurrentPage(currentPage));
  };
};

export const getFilmThunkCreator = (film) => {
  return async (dispatch) => {
    let data = await filmsAPI.getFilm(film);
    dispatch(actionsFilms.setFilm(data));
  };
};

export default itemsReducer;
