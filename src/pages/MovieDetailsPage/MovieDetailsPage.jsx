import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchMoviesById } from "../../api/api";
import css from "./MovieDetails.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetchMoviesById(movieId).then((response) => setMovie(response));
  }, [movieId]);

  return (
    <div className={css.card}>
      <Link to="/">Back </Link>
      <div>
        <img
          className={css.img}
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt=""
        />
      </div>
      <div className={css.text}>
        <h1 className={css.title}>{movie.title}</h1>
        <h2>User score: {Math.round(movie.vote_average * 10)}%</h2>
        <h3 className={css.overview}>Overview:</h3>
        <p className={css.overview}> {movie.overview}</p>
        <h3 className={css.overview}>Genres</h3>
        <ul className={css.ul}>
          {movie.genres
            ? movie?.genres.map((genre) => {
                return <li key={genre.id}>#{genre.name}</li>;
              })
            : ""}
        </ul>
      </div>
    </div>
  );
};
export default MovieDetailsPage;
