import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
const Navigation = () => {
  return (
    <header>
      <div>
        <ul className={css.ul}>
          <li className={css.nav}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={css.nav}>
            <NavLink to="/movies">MovieList</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Navigation;
