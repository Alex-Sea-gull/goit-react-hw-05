import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import s from "./MoviesList.module.css";

const MoviesList = ({ movies, isLoading }) => {
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={s.movies}>
          {movies.filter((item) => item.poster_path).length > 0 ? (
            movies
              .filter((item) => item.poster_path)
              .map((item) => (
                <li key={item.id} className={s.movieItem}>
                  <Link to={`/movies/${item.id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      alt={item.title}
                    />
                  </Link>
                  <h3>{item.title}</h3>
                  <p>
                    Release:{" "}
                    {item.release_date ? item.release_date : "Date unknown"}
                  </p>
                  <p>
                    Vote average:{item.vote_average ? item.vote_average : "N/A"}
                  </p>
                </li>
              ))
          ) : (
            <p>No movies found</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default MoviesList;
