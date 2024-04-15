import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1>Error! Page not found...</h1>
      <Link to="/"> Go home </Link>
    </div>
  );
};

export default NotFoundPage;
