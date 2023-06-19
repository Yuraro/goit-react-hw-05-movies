import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import { getInfoMovie } from 'Services/getMovies';
import MovieCard from 'components/MovieCard/MovieCard';
import { AddInfo, AddInfoList } from './MovieDetails.styled';

const MovieDetails = () => {

    const location = useLocation();
    const backLinkHref = useRef(location.state?.from ?? '/');

    const [movieInfo, setMovieInfo] = useState({});
    const { movieId } = useParams();


    useEffect(() => {
    if (movieInfo === {}) {
        return;
    }
    const getInfo = async () => {
        try {
        const response = await getInfoMovie(movieId);

        setMovieInfo(response);
        } catch (error) {
        console.log(error);
        }
    };
    getInfo();
    }, [movieInfo, movieId]);

    return (
        <>
            <Link to={backLinkHref.current}>Back</Link>
            <MovieCard movieInfo={movieInfo}></MovieCard>
            <AddInfoList>
                <AddInfo>
                    <Link to="cast">Cast</Link>
                </AddInfo>
                <AddInfo>
                    <Link to="reviews">Reviews</Link>
                </AddInfo>
            </AddInfoList>
            <Outlet />
        </>
    );

};

export default MovieDetails