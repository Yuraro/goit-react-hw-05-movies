
import React, { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";
import { getWeekTrending } from 'Services/getMovies';
import { Link, TrendingItem, TrendingList, TrendingTitle, TrendingWrap } from "./Home.styled";

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
        <TrendingWrap>
            <TrendingTitle>Trending today</TrendingTitle>
            <TrendingList>
                {trendingMovies.map(movie => (
                    <TrendingItem key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>
                            {movie.title ?? movie.name}
                        </Link>
                    </TrendingItem>
                ))}
            </TrendingList>
            <Outlet />
        </TrendingWrap>
    );
};

export default Home;
