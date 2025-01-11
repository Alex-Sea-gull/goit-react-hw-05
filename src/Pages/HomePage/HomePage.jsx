import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../services/api";
import MoviesList from "../../components/MoviesList/MoviesList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Функція отримання даних з API
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchTrendingMovies();
        setMovies(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <MoviesList movies={movies} isLoading={isLoading} />
    </div>
  );
};

export default HomePage;
