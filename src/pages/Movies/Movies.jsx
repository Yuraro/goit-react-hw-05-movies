import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Searchbar from "components/SearchBox/SearchBox";
import { Outlet } from "react-router-dom";
import { getBySearch } from 'Services/getMovies';
import Loader from 'components/Loader/Loader';
import Gallery from 'components/Gallery/Gallery';
import { MovieGalleryWrap } from './Movies.styled';

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
            return setError(`No results were found for ${query}!`);
        }

        setMovies(searchMovies);
        } catch (error) {
        setError('Something went wrong. Try again.');
        } finally {
        setIsLoading(false);
        }
    };
    getByQuery();
    }, [query, page]);

    const handleSubmit = newQuery => {
    if (newQuery.trim() === '') {
        alert('Nothing founded!');
        return;
    } else if (newQuery === query) {
        alert('Enter new movie!');
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