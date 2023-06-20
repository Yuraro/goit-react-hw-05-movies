import { notification } from 'components/Norification/Notification';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastInfo } from 'Services/getMovies';
import zahlushka from '../../Images/zahlushka.jpg';
import { CastActor, CastCharacter, CastCharacterList, CastImg, CastItem, CastList, CastWrap } from './Cast.styled';

const Cast = () => {
    const [cast, setCast] = useState([]);
    
    const { movieId } = useParams();

    useEffect(() => {
    if (!movieId) return;
    const getCast = async () => {
        try {
        const response = await getCastInfo(movieId);
        const movieCast = response.cast;
            
        if (movieCast.length === 0) {
            return notification(`There is no available information about the cast!`);
            }

        setCast(movieCast);
        } catch (error) {
        console.log(error);
        }
    };
    getCast();
    }, [movieId]);


    return (
        <CastWrap>
        <CastList>
            {cast.map(actor => {
            return (
            <CastItem key={actor.id}>
                <CastImg src={
                actor.profile_path
                    ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                    : zahlushka
                } alt="img" />
                <CastActor>{actor.name}</CastActor>
                <CastCharacter>
                Character: 
                <CastCharacterList>{actor.character}</CastCharacterList>
                </CastCharacter>
            </CastItem>
            );
        })}
        </CastList>
        </CastWrap>
    );

};

export default Cast