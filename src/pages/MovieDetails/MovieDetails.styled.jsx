import styled from '@emotion/styled';
import { Link } from 'react-router-dom';


export const AddInfoList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 16px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const AddInfo = styled.li`
    margin-bottom: 8px;

    a {
    text-decoration: none;
    color: #333333;
    font-weight: bold;
    transition: color 0.3s ease-in-out;

    &:hover {
        color: #b8a4f4;
    }
    }
`;

export const BackLink = styled(Link)`
    text-decoration: none;
    color: #333333;
    font-weight: bold;
    transition: color 0.3s ease-in-out;

    &:hover {
    color: #b8a4f4;
    }
`;
