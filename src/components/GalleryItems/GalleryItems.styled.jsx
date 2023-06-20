import styled from '@emotion/styled';

export const ListCard = styled.li`
    border-radius: 2px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    padding: 16px;
    background-color: #b8a4f4;
    &:hover {
    transform: scale(1.01);
    }
`;

export const PhotoCard = styled.img`
    &.hover {
        transform: scale(1.03);
        cursor: zoom-in;
    }
    width: 100%;
    height: auto;
    border-radius: 4px;
`;

export const TitleCard = styled.h3`
    font-size: 18px;
    font-weight: bold;
    color: #333333;
    margin-top: 12px;
`;



