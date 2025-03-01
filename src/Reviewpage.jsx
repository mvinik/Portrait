import React, { useState, useEffect } from 'react';

const ReviewsList = ({ id }) => {
  const [reviews, setReviews] = useState([]); // State to store reviews
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to store any errors
  const [reviewText, setReviewText] = useState(''); // State for the review text input
  const [rating, setRating] = useState(5); // State for the rating selection
  const [user, setUser] = useState(null); // To store the logged-in user's details

  useEffect(() => {
    // Fetch user details from local storage (or another method if needed)
    const userData = JSON.parse(localStorage.getItem('user'));
    setUser(userData); // Assuming the user is stored in localStorage

    // Fetch reviews when the component mounts
    fetch(`https://test4-ayw7.onrender.com/api/reviews?filters[paint][documentId][$eq]=${id}&populate=users_permissions_user`)
      .then(response => response.json())
      .then(data => {
        setReviews(data.data); // Assuming 'data' contains the reviews list
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch(err => {
        setError('Error fetching data');
        setLoading(false); // Set loading to false even if there is an error
      });
  }, [id]); // Re-run when product ID changes

  const handleSubmitReview = async (e) => {
    e.preventDefault();

    // Validation check for empty review
    if (reviewText.trim() === '') {
      setError('Please enter a review.');
      return;
    }

    setError(''); // Reset error message if validation passes

    // Submit the new review to the backend
    try {
      const response = await fetch('https://test4-ayw7.onrender.com/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        data:{
          text: reviewText,
          users_permissions_user: user.documentId, // Assuming the user has a documentId
          paint: id, // Product ID
          review: rating, // Rating (1-5)
        }
        }),
      });

      if (response.ok) {
        const newReview = await response.json();
        setReviews([newReview.data, ...reviews]); // Add new review to the front of the list
        setReviewText(''); // Clear the review text
        setRating(5); // Reset rating to 5 stars
      } else {
        throw new Error('Error submitting review');
      }
    } catch (err) {
      setError(err.message); // Display error message
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading message while data is being fetched
  }

  if (error) {
    return <div>{error}</div>; // Display error if there's an issue with fetching data
  }

  return (
    <div>
      <h2 className='text-4xl font-thin py-10'>Reviews</h2>

      {/* Display reviews list */}
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <p>
            <strong className='flex  items-center'>
              <img src='data:image/jpeg;base64,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' alt='img'
              className='w-8'/>
              
              {review.users_permissions_user?.username}</strong> </p>
            <p className='p-5'>{review.text} ({'⭐'.repeat(review.review)})</p>
          </li>
        ))}
      </ul>

      {/* Review Submission Form */}
      <div className="mt-6">
        <h3>Write a Review</h3>
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
};

export default ReviewsList;
