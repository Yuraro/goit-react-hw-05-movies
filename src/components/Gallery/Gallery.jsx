
import GalleryItems from 'components/GalleryItems/GalleryItems';
import PropTypes from 'prop-types';
import { GalleryList } from './Gallery.styled';


function Gallery({ movies }) {
    return (
    <GalleryList>
        {movies.map(movie => (
        <GalleryItems key={movie.id} movie={movie} />
        ))}
    </GalleryList>
    );
}

export default Gallery;

Gallery.propTypes = {
    items: PropTypes.array,
};