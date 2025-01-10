import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../services/api";
import MoviesList from "../../components/MoviesList/MoviesList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  // Функція отримання даних з API
  useEffect(() => {
    const getData = async () => {
      const data = await fetchTrendingMovies();
      setMovies(data);
      console.log(data);
    };
    getData();
  }, []);

  return (
    <div>
      <MoviesList movies={movies} />
    </div>
  );
};

export default HomePage;
