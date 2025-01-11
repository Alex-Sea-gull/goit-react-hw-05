import { NavLink, Outlet } from "react-router-dom";

const MovieDetailsPage = () => {
  return (
    <div>
      <h1>MovieDetailsPage</h1>
      <nav>
        <NavLink to="movieCast">Cast</NavLink>
        <NavLink to="movieReviews">Reviews</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
