import React from 'react';

interface Review {
  user: string;
  text: string;
  date: string;
}

interface ReviewsTabProps {
  reviews: {
    rating: number;
    comments: Review[];
  };
}

const ReviewsTab: React.FC<ReviewsTabProps> = ({ reviews }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mt-4">Reviews</h3>
      <div className="mb-4">
        <p>Rating: {reviews.rating}</p>
        <div>
          {reviews.comments.map((comment, index) => (
            <div key={index} className="border-b border-gray-200 py-2">
              <p><strong>{comment.user}</strong> ({comment.date})</p>
              <p>{comment.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsTab;
