import React from 'react';
import { useContext } from 'react';
import FeedbackContext from '../Context/FeedbackContext';

function FeedBackStatus() {
  const { feedback } = useContext(FeedbackContext);
  let sum = 0;
  let AverageRating = feedback.reduce(
    (acc, curr) => (sum = acc + curr.rating) / feedback.length,
    0
  );
  AverageRating = AverageRating.toFixed(1).replace(/[.,]0$/, '');
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>The average Rating : {AverageRating}</h4>
    </div>
  );
}

export default FeedBackStatus;
