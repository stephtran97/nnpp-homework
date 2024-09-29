import { StarIcon } from '@heroicons/react/20/solid';

const review = {
  rating: 4,
  content:
    "I really loved this product, but then I took it out of the box and realized I didn't like it at all.",
  author: 'Emily Selman',
  avatarSrc:
    'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80'
};

// Good review has rating >= 4
// If no author, hide entire Review
// If good review, show ReviewRating, otherwise hide it. In place of review content, say "No review".
export default function GoodReview() {
  const isGoodReview = review.rating >= 4;
  if (!review.author) return null;
  return review.rating >= 4 ? (
    <div className='review'>
      <div className='review-wrapper'>
        <img
          className='review-avatar'
          src={review.avatarSrc}
        />
        <div className='review-left'>
          <h4 className='review-author'>{review.author}</h4>
          {isGoodReview ? <ReviewRating review={review} /> : null}
        </div>
      </div>
      <div className='review-content'>
        {isGoodReview ? review.content : 'No review'}
      </div>
    </div>
  ) : null;
}

function ReviewRating({ review }) {
  const stars = Array(5).fill(false);
  for (let i = 0; i < review.rating; i++) {
    stars[i] = true;
  }
  return (
    <div className='review-rating'>
      {stars.map((rating) =>
        rating ? (
          <StarIcon className='review-star review-star--filled' />
        ) : (
          <StarIcon className='review-star review-star--empty' />
        )
      )}
    </div>
  );
}
