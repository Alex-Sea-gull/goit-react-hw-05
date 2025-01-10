import Loader from "../Loader/Loader";
import s from "./MoviesList.module.css";

const MoviesList = ({ movies, isLoading }) => {
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={s.movies}>
          {movies.length > 0 ? (
            movies.map((item) => (
              <li key={item.id} className={s.movieItem}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.title}
                />
                <h3>{item.title}</h3>
                <p>Release: {item.release_date}</p>
                <p>Vote average: {item.vote_average}</p>
                <p>Popularity: {item.popularity}</p>
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
