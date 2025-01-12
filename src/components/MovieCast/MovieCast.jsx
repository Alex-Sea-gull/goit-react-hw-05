import { useEffect, useState } from "react";
import { getCast } from "../../services/api";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const { moviesId } = useParams();
  const [movieCast, setMovieCast] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getMovieCast = async () => {
      setIsLoading(true);
      try {
        const data = await getCast(moviesId);
        setMovieCast(data);
      } catch (error) {
        console.error("Error fetching movie cast:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (moviesId) {
      getMovieCast();
    }
  }, [moviesId]);

  return (
    <div className={s.wrapperActor}>
      {isLoading ? (
        <Loader />
      ) : movieCast && movieCast.length > 0 ? (
        movieCast.map((actor) => (
          <div className={s.idActor} key={actor.id}>
            {actor.profile_path && (
              <img
                className={s.imgActor}
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
              />
            )}
            <div className={s.informActer}>
              <p className={s.nameActor}>
                <strong>{actor.name}</strong>
              </p>
              <p className={s.characterActor}>Character: {actor.character}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No cast available</p>
      )}
    </div>
  );
};

export default MovieCast;
