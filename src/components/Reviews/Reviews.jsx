import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsInfo } from 'Services/getMovies';
import { ReviewsAuthor, ReviewsContent, ReviewsItem, ReviewsList, ReviewsWrap } from './Reviews.styled';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
    if (!movieId) return;
    const getReviews = async () => {
        try {
        const response = await getReviewsInfo(movieId);
        const movieReview = response.results;

        setReviews(movieReview);
        } catch (error) {
        console.log(error);
        }
    };
    getReviews();
    }, [movieId]);


    return (
        <ReviewsWrap>
        <ReviewsList>
        {reviews.map(review => {
            return (
            <ReviewsItem key={review.id}>
                <ReviewsAuthor>
                    Author: <span>{review.author}</span>
                </ReviewsAuthor>
                <ReviewsContent>{review.content}</ReviewsContent>
            </ReviewsItem>
            );
        })}
        </ReviewsList>
        </ReviewsWrap>
    );

};

export default Reviews