import { fetchMovieCast } from "../../api/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchMovieCast(movieId).then((response) => setCast(response));
  }, [movieId]);

  return (
    <div>
      <h2>Actors:</h2>
      {cast && (
        <ul className={css.ul}>
          {cast.cast.map((actor) => (
            <li className={css.li} key={actor.id}>
              <img
                className={css.img}
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieCast;
