import styled from '@emotion/styled';

export const CastWrap = styled.div`
    background-color: #f5f5f5;
    padding: 20px;
`;

export const CastList = styled.ul`
    display: grid;
    max-width: 1200px;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 16px;
    margin-top: 20px;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
`;

export const CastItem = styled.li`
    background-color: #ffffff;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CastImg = styled.img`
    width: 100%;
    height: auto;
    border-radius: 50%;
    object-fit: cover;
`;

export const CastActor = styled.h3`
    font-size: 18px;
    font-weight: bold;
    color: #333333;
    margin-bottom: 8px;
`;

export const CastCharacter = styled.p`
    font-size: 14px;
    color: #666666;
`;

export const CastCharacterList = styled.span`
    margin-right: 8px;
    color: #b8a4f4;
`;
