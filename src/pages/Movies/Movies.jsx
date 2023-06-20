import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Searchbar from "components/SearchBox/SearchBox";
import { Outlet } from "react-router-dom";
import { getBySearch } from 'Services/getMovies';
import Loader from 'components/Loader/Loader';
import Gallery from 'components/Gallery/Gallery';
import { MovieGalleryWrap } from './Movies.styled';
import { notification } from 'components/Norification/Notification';

const Movies = () => {

    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';

    useEffect(() => {
    if (query === '') return;

    const getByQuery = async () => {
        try {
        const response = await getBySearch(query, page);
        const searchMovies = response.results;

        if (searchMovies.length === 0) {
            return notification(`No results were found for ${query}!`);
        }

        setMovies(searchMovies);
        } catch (error) {
        notification('Something went wrong. Try again.');
        } finally {
        setIsLoading(false);
        }
    };
    getByQuery();
    }, [query, page]);

    const handleSubmit = newQuery => {
    if (newQuery.trim() === '') {
        notification('Nothing found!');
        return;
    } else if (newQuery === query) {
        notification('Enter a new movie!');
        return;
    }

    setPage(1);

    setMovies([]);
    setError(null);
    setIsLoading(true);
    setSearchParams({ query: newQuery });
    };


    return (
        <>
            <MovieGalleryWrap>
                <Searchbar onSubmit={handleSubmit} />
            {error && <div>{error}</div>}
            {movies.length !== 0 && query !== '' && (
        <>
                <Gallery movies={movies} />
            {isLoading && <Loader />}
        </>
        )}
            {isLoading && <Loader />}
            </MovieGalleryWrap>
            <Outlet />
        </> 
    );

};

export default Movies