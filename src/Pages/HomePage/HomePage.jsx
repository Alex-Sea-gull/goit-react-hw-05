import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../services/api";
import MoviesPage from "../MoviesPage/MoviesPage";

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
      <MoviesPage movieData={movies} />
    </div>
  );
};

export default HomePage;
