import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
top: 0;
`;

export const Header = styled.header`
    top: 0;
    left: 0;
    position: sticky;
    z-index: 1100;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 64px;
    padding-right: 24px;
    padding-left: 24px;
    background-color: #b8a4f4;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);


    > nav {
    display: flex;
    }
`;

export const Link = styled(NavLink)`
    padding: 8px 16px;
    border-radius: 4px;
    text-decoration: none;
    color: black;
    font-weight: 500;

    &:hover {
    color: white;
    }

    &.active {
    color: white;
    background-color: #d2b8f4;
    }
`;

