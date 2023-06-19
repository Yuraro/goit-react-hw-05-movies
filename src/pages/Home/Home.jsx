
import React, { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";
import { getWeekTrending } from 'Services/getMovies';
import { Link } from "./Home.styled";

const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        const getTrending = async () => {
            try {
                const response = await getWeekTrending();
                const weekTrendingMovies = response.results;
                setTrendingMovies(weekTrendingMovies);
            } catch (error) {
                console.log(error);
            }
        };
        getTrending();
    }, []);

    return (
        <>
            <h1>Trending today</h1>
            <ul>
                {trendingMovies.map(movie => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>
                            {movie.title ?? movie.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <Outlet />
        </>
    );
};

export default Home;
