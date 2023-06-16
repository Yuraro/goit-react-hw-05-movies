import axios from 'axios';

const API_KEY = '551f04d611d20c4c651c156c841642ab';
const BASE_URL = 'https://api.themoviedb.org/3'; 

export const getTrendingMovies = () => {
    const url = `${BASE_URL}/trending/get-trending?api_key=${API_KEY}`;
    return axios.get(url);
};

export const searchMovies = (keyword) => {
    const url = `${BASE_URL}/search/search-movies?api_key=${API_KEY}&query=${keyword}`;
    return axios.get(url);
};

export const getMovieDetails = (movieId) => {
    const url = `${BASE_URL}/movies/get-movie-details?api_key=${API_KEY}&movie_id=${movieId}`;
    return axios.get(url);
};

export const getMovieCredits = (movieId) => {
    const url = `${BASE_URL}/movies/get-movie-credits?api_key=${API_KEY}&movie_id=${movieId}`;
    return axios.get(url);
};

export const getMovieReviews = (movieId) => {
    const url = `${BASE_URL}/movies/get-movie-reviews?api_key=${API_KEY}&movie_id=${movieId}`;
    return axios.get(url);
};

