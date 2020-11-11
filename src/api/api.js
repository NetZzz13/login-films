import axios from "axios";

export const API_KEY = "24738de3a89c5cdf89d55632e3f30008";

export const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export const filmsAPI = {
  getFilms(currentPage) {
    return instance
      .get(
        `trending/all/week?api_key=${API_KEY}&language=en-US&page=${currentPage}`
      )
      .then((response) => response.data);
  },

  getFilm(filmId) {
    return instance
      .get(`movie/${filmId}?api_key=${API_KEY}&language=en-US`)
      .then((response) => response.data);
  },
};
