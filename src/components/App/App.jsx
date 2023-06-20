import { lazy } from "react";
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

import Cast from "components/Cast/Cast";
import SharedLayout from "components/SharedLayout/SharedLayout";
import MovieDetails from "pages/MovieDetails/MovieDetails";

const Home = lazy(() => import('../../pages/Home/Home'));
const Movies = lazy(() => import('../../pages/Movies/Movies'));
const Reviews = lazy(() => import('../Reviews/Reviews'));



export const App = () => {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home/>} />
          <Route path="movies" element={<Movies/>} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}/>
            <Route path="reviews" element={<Reviews />}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
