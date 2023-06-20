import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useRef, useEffect, useState, Suspense } from 'react';
import { getInfoMovie } from 'Services/getMovies';
import MovieCard from 'components/MovieCard/MovieCard';
import { AddInfo, AddInfoList, BackLink } from './MovieDetails.styled';

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
            <BackLink to={backLinkHref.current}>Back</BackLink>
            <MovieCard movieInfo={movieInfo}></MovieCard>
            <AddInfoList>
                <AddInfo>
                    <Link to="cast">Cast</Link>
                </AddInfo>
                <AddInfo>
                    <Link to="reviews">Reviews</Link>
                </AddInfo>
            </AddInfoList>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </>
    );

};

export default MovieDetails