import React from 'react';
import img1 from '../../assets/img/review.png';
import img2 from '../../assets/img/review-2.png';

function Review() {
  return (
    <div className="review-container">
      <div className="review-1">
        <img src={img1} alt="" />
      </div>
      <div
        className="review-2"
        style={{ backgroundImage: `url(${img2})`, backgroundSize: 'cover' }}
      />
    </div>
  );
}

export default Review;
