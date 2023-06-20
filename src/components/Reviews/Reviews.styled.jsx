import styled from '@emotion/styled';

export const ReviewsWrap = styled.div`
    padding: 20px;
`;

export const ReviewsList = styled.ul`
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

export const ReviewsItem = styled.li`
    background-color: #d2b8f4;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ReviewsAuthor = styled.p`
    font-size: 16px;
    font-weight: bold;
    color: #333;
    margin-bottom: 8px;
`;

export const ReviewsContent = styled.p`
    font-size: 14px;
    color: #666;
    line-height: 1.4;
`;

