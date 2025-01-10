import Loader from "../Loader/Loader";

const MoviesList = ({ movies, isLoading }) => {
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {movies.length > 0 ? (
            movies.map((item) => (
              <li key={item.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.title}
                  style={{ width: "300px" }}
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
