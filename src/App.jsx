// import HomePage from "./Pages/HomePage/HomePage";
// import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
// import MoviesPage from "./Pages/MoviesPage/MoviesPage";
// import Navigation from "./components/Navigation/Navigation";
// import MovieDetailsPage from "./Pages/MovieDetailsPage/MovieDetailsPage";
// import MovieCast from "./components/MovieCast/MovieCast";
// import MovieReviews from "./components/MovieReviews/MovieReviews";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader";

const HomePage = lazy(() => import("./Pages/HomePage/HomePage"));
const NotFoundPage = lazy(() => import("./Pages/NotFoundPage/NotFoundPage"));
const MoviesPage = lazy(() => import("./Pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./Pages/MovieDetailsPage/MovieDetailsPage")
);
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);
const Navigation = lazy(() => import("./components/Navigation/Navigation"));

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />

          <Route path="/movies/:moviesId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
