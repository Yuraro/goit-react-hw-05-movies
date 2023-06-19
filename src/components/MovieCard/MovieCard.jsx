import { Outlet } from "react-router-dom";

const { notification } = require("components/Norification/Notification");
const { Wraper, InfoWraper, Title, Score, UserScore, Owerview, GenresTitle, GenresList, Genres } = require("./MovieCard.styled");

const MovieCard = ({ movieInfo }) => {
    const getYear = () => new Date(movieInfo.release_date).getFullYear();

    return (
        <Wraper>
            <img
                src={
                    movieInfo.poster_path
                        ? `https://image.tmdb.org/t/p/w300${movieInfo.poster_path}`
                        : notification ('There is no photo avalible!')
                }
                alt="img"
            />
            <InfoWraper>
                <Title>
            {movieInfo.original_title ?? movieInfo.title} ({getYear()})
                </Title>
                <Score>
                    User score: <UserScore>{Math.round(movieInfo.vote_average * 10)}%</UserScore>
                </Score>
                <Owerview>
                    Owerview: {movieInfo.overview}
                </Owerview>
                <GenresTitle>
                    Genres
                </GenresTitle>
                <GenresList>
                        {movieInfo &&
                            movieInfo.genres?.map(ganre => {
                    return (
                            <Genres key={ganre.id}>
                                {ganre.name}
                            </Genres>
                            );
                        })}
                </GenresList>
            </InfoWraper>
            <Outlet/>
        </Wraper>
    )
};

export default MovieCard