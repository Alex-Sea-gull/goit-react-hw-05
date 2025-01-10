import { NavLink, Outlet } from "react-router-dom";

const MovieDetailsPage = () => {
  return (
    <div>
      <h1>MovieDetailsPage</h1>
      <nav>
        <NavLink to="movieCast">MovieCast</NavLink>
        <NavLink to="movieReviews">MovieReviews</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
