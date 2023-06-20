import { Link, useLocation } from 'react-router-dom';
import zahlushka from '../../Images/zahlushka.jpg';


import PropTypes from 'prop-types';
import { ListCard, PhotoCard, TitleCard } from './GalleryItems.styled';

const GalleryItems = ({ movie }) => {
    const location = useLocation();
    return (
    <>
        <ListCard key={movie}>
        <Link to={`${movie.id}`} state={{ from: location }}>
            <PhotoCard
            src={
                movie.poster_path
                ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                : zahlushka
            }
            alt="img"
            />
            <TitleCard>{ movie.title }</TitleCard>
        </Link>
        </ListCard>
    </>
    );
};
GalleryItems.propTypes = {
    item: PropTypes.object,
};

export default GalleryItems;