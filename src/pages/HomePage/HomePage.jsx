import { useEffect, useState } from "react";
import { fetchMovies } from "../../api/api";
import { Link } from "react-router-dom";
import css from "./HomePage.module.css";

const HomePage = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    fetchMovies().then((response) => setFilms(response.results));
  }, []);
  return (
    <div>
      <h1>Trending today!</h1>
      <ol className={css.ul}>
        {films.map((film) => (
          <li key={film.id}>
            <Link to={"/movies/" + film.id.toString()} className={css.name}>
              {film.title}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default HomePage;
