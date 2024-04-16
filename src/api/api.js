import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/";
const API_KEY =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTBjZjA4ZmQwNGEwNzAwMjcwMzI0ZTFjYmMzZDU3NiIsInN1YiI6IjY2MWQzOTdhNGNhNjc2MDE4NzFjZDM5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zARM7nH6phbtjdFRCxydiayBT6rQqSlFaSkFHXJoIGw";

export const fetchMovies = async () => {
  const response = await axios.get("3/trending/movie/day", {
    headers: {
      Authorization: API_KEY,
    },
  });
  return response.data;
};

export const fetchMoviesById = async (movieId) => {
  const response = await axios.get(`3/movie/${movieId}`, {
    headers: {
      Authorization: API_KEY,
    },
    params: {
      append_to_response: "images",
    },
  });
  return response.data;
};
