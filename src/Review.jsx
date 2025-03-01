// Review.js
import React, { useState } from 'react';

export default function Review({ productId, existingReviews, onNewReview }) {
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(5);
  const [error, setError] = useState('');
  const user = JSON.parse(localStorage.getItem('user'));
  
  // Handle submitting a new review
  const handleSubmitReview = async (e) => {
    e.preventDefault();

    // Validation check for empty review
    if (reviewText.trim() === '') {
      setError('Please enter a review.');
      return;
    }

    setError(''); // Reset error message

    // Send POST request to submit the review
    try {
      const response = await fetch(`https://test4-ayw7.onrender.com/api/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
         data:{
            text:reviewText,
            users_permissions_user:user.documentId,
            paint: productId,
            review:rating,
         }
        }),
      });

      if (response.ok) {
        const newReview = await response.json();
        onNewReview(newReview.data); // Pass the new review back to parent
        setReviewText('');
        setRating(5);
      } else {
        throw new Error('Error submitting review'  );
      }
    } catch (err) {
      setError(err.message);
  
    }
  };

  return (
    <div className="reviews-section mt-8">
      <h2 className="text-xl font-semibold">Reviews</h2>

      {/* Display existing reviews */}
      <div className=" mt-4">
        {existingReviews.length > 0 ? (
          existingReviews.map((review, index) => (
            <div key={index} className="review p-4 mb-4 border-b">
              <div className="flex justify-between">
                <p className="font-semibold">{review.users_permissions_user.username}</p>
                <p>{'⭐'.repeat(review.review)}</p>
              </div>
              <p>{review.text}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet. Be the first to review!</p>
        )}
      </div>
     

      {/* Add a review form */}
      <div className="add-review mt-6">
        <h3 className="text-lg font-medium">Write a Review</h3>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmitReview}>
          <textarea
            className="w-full p-2 border rounded mt-2"
            placeholder="Write your review here..."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          ></textarea>

          <div className="rating mt-2">
            <label className="mr-2">Rating:</label>
            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="border rounded p-2"
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <option key={star} value={star}>
                  {star} Star{star > 1 && 's'}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
}
