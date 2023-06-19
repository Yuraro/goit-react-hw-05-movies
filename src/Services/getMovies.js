import axios from 'axios';

const API_KEY = '551f04d611d20c4c651c156c841642ab';
const BASE_URL = 'https://api.themoviedb.org/3'; 

export async function getWeekTrending(page = 1)  {
    const url = `${BASE_URL}/trending/all/week?api_key=${API_KEY}&page=${page}`;
    return await axios
    .get(url)
    .then(response => {
        return response.data;
    })
    .catch(error => {
    console.log(error);
    });
};

export async function getBySearch(query, page) {
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`;
    return await axios
    .get(url)
    .then(response => {
        return response.data;
    })
    .catch(error => {
    console.log(error);
    });
}

export async function getCastInfo(movie_id) {
    const url = `${BASE_URL}/movie/${movie_id}/credits?api_key=${API_KEY}`;
    return await axios
    .get(url)
    .then(response => {
        return response.data;
    })
    .catch(error => {
    console.log(error);
    });
}

export async function getReviewsInfo(movie_id) {
    const url = `${BASE_URL}/movie/${movie_id}/reviews?api_key=${API_KEY}`;
    return await axios
    .get(url)
    .then(response => {
        return response.data;
    })
    .catch(error => {
    console.log(error);
    });
}

export async function getInfoMovie(movie_id) {
    const url = `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}`;
    return await axios
    .get(url)
    .then(response => {
        return response.data;
    })
    .catch(error => {
    console.log(error);
    });
}

