import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Box } from 'components/Box';
import { fetchMoviesReviews } from 'Services/Api';

export const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState(null);
  useEffect(() => {
    fetchMoviesReviews(movieId).then(setReview);
  }, [movieId]);
  if (!review) {
    return null;
  }
  console.log('review', review);

  return (
    <Box as="section">
      <ul>
        {review.results.map((review, index) => (
          <li key={index}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </Box>
  );
};
