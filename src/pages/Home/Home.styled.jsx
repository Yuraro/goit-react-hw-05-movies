import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const TrendingWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const TrendingTitle = styled.h1`
    font-size: 35px;
    font-weight: bold;
    color: #333333;
    margin-bottom: 16px;
    text-align: left;
    background-color: #b8a4f4;
    border-radius: 10px;
    padding: 5px;
`;

export const TrendingList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TrendingItem = styled.li`
    margin-bottom: 8px;
    border-radius: 4px;
    padding: 12px;
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
    &:hover {
    transform: scale(1.5);
    }
`;

export const Link = styled(NavLink)`
    text-decoration: none;
    color: #333333;
    &:hover {
        background-color: #d2b8f4;
        border-radius: 10px;
        padding: 5px;
    }  
`;




