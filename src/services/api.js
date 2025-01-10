import axios from 'axios';

const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjNjZTk4YzJkMjE3ZDRiYmU5NDBlNTRmN2MzZGU3MSIsIm5iZiI6MTczNjM0NjkzMS42NzgwMDAyLCJzdWIiOiI2NzdlOGQzMzM0YTRlNzVlNDk3YjBlYzEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0._wkB66gnq8cyvaO9YW9-vLn5oiW0TfTRaaIVs79vIsM';
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchTrendingMovies = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/trending/movie/day`, {
            headers: {
                Authorization: `Bearer ${API_KEY}`,
            },
        });

        return response.data.results;

    } catch (error) {
        console.error("Ошибка при получении данных:", error);
        return [];
    }
};

export { fetchTrendingMovies };