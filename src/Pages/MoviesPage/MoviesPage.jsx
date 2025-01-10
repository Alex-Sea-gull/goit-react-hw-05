import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../services/api";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchTrendingMovies();
      setMovies(data || []);
    };
    getData();
  }, []);

  return (
    <div>
      <ul>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <li key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                style={{ width: "300px" }}
              />
            </li>
          ))
        ) : (
          <p>Здесь будет лоадер...</p>
        )}
      </ul>
    </div>
  );
};

export default MoviesPage;
