import styled from '@emotion/styled';

export const Wraper = styled.div`
    display: flex;
    align-items: center;
    background-color: #f4f4f4;
    padding: 16px;
    border-radius: 8px;
    transition: transform 0.3s ease-in-out;
    margin-top:10px;

    &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    }
`;

export const InfoWraper = styled.div`
    margin-left: 16px;
`;

export const Title = styled.h2`
    font-size: 24px;
    font-weight: bold;
    color: #333333;
    margin-bottom: 8px;
`;

export const Score = styled.span`
    font-size: 16px;
    color: #b8a4f4;
`;

export const UserScore = styled.span`
    font-weight: bold;
`;

export const Owerview = styled.h3`
    font-size: 18px;
    color: #666666;
    margin-top: 16px;
    line-height: 1.4;
`;

export const GenresTitle = styled.h3`
    font-size: 18px;
    color: #333333;
    margin-top: 16px;
`;

export const GenresList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: 8px;
`;

export const Genres = styled.li`
    font-size: 16px;
    color: #333333;
    margin-right: 8px;
    margin-bottom: 8px;
    background-color: #b8a4f4;
    padding: 4px 8px;
    border-radius: 4px;
`;

export const PosterImage = styled.img`
    width: 300px;
    height: auto;
    border-radius: 20px;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`;