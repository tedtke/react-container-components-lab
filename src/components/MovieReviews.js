// Code MovieReviews Here
import React from 'react';

const Review = ({
  headline, byLine, link, summary_short
}) => {
  return (
    <div key={headline} className="review">
      <header>
        <a className="review-link" href={link.url}>{headline}</a>
        <br/>
        <span className="author">{byLine}</span>
      </header>
      <blockquote>{summary_short}</blockquote>
    </div>
  );
};

const MovieReviews = ({reviews}) => <div className="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultprops = {
  reviews: []
};

export default MovieReviews;
