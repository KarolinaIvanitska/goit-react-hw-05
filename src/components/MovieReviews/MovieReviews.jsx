import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../api/api";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchMovieReviews(movieId)
      .then((response) => setReviews(response))
      .catch((error) => console.log(error));
  }, [movieId]);

  if (reviews && reviews.results.length === 0) {
    return <h2>We not have any reviews for this movie</h2>;
  }

  return (
    <div>
      {reviews && (
        <ul>
          {reviews.results.map((review) => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default MovieReviews;
