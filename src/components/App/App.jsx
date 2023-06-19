/* import { lazy } from "react"; */
/* import { useState } from "react"; */
import { Route, Routes } from "react-router-dom";
import Movies from "pages/Movies/Movies";
import MovieDetails from "pages/MovieDetails/MovieDetails";
import Home from "pages/Home/Home";
import Cast from "components/Cast/Cast";
import Reviews from "components/Reviews/Reviews";
import SharedLayout from "components/SharedLayout/SharedLayout";


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home/>} />
          <Route path="movies" element={<Movies/>} />
          <Route path=":movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}/>
            <Route path="reviews" element={<Reviews />}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
