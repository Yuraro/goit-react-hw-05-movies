import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useRef, useEffect, useState, Suspense } from 'react';
import { getInfoMovie } from 'Services/getMovies';
import MovieCard from 'components/MovieCard/MovieCard';
import { AddInfo, AddInfoList, BackLink } from './MovieDetails.styled';

const MovieDetails = () => {
    const location = useLocation();
    const backLinkHref = useRef(location.state?.from ?? '/');

    const { movieId } = useParams();
    const [movieInfo, setMovieInfo] = useState(null);

    useEffect(() => {
        const getInfo = async () => {
            try {
                const response = await getInfoMovie(movieId);
                setMovieInfo(response);
            } catch (error) {
                console.log(error);
            }
        };

        if (movieId) {
            getInfo();
        }
    }, [movieId]);

    return (
        <>
            <BackLink to={backLinkHref.current}>Back</BackLink>
            {movieInfo ? (
                <>
                    <MovieCard movieInfo={movieInfo} />
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
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
};

export default MovieDetails;
