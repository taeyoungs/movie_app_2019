import React from 'react';
import Proptypes from 'prop-types';

const moreLength = summary => {
  if (summary.length > 290) {
    return summary.slice(0, 290) + ' •••';
  } else {
    return summary;
  }
};

const calcRating = rating => {
  if (rating < 2) {
    return (
      <div className="movie__rating">
        <span className="star">★</span>
        <span className="emptyStar">★★★★</span>
      </div>
    );
  } else if (rating >= 2 && rating < 4) {
    return (
      <div className="movie__rating">
        <span className="star">★★</span>
        <span className="emptyStar">★★★</span>
      </div>
    );
  } else if (rating >= 4 && rating < 6) {
    return (
      <div className="movie__rating">
        <span className="star">★★★</span>
        <span className="emptyStar">★★</span>
      </div>
    );
  } else if (rating >= 6 && rating < 8) {
    return (
      <div className="movie__rating">
        <span className="star">★★★★</span>
        <span className="emptyStar">★</span>
      </div>
    );
  } else {
    return (
      <div className="movie__rating">
        <span className="star">★★★★★</span>
      </div>
    );
  }
};

function Movie({ id, title, year, summary, poster, genres, rating, url }) {
  return (
    <div className="movie">
      <a href={url}>
        <img src={poster} alt={title} title={title} />
      </a>
      <div className="movie__data">
        <span className="movie__title">{title}</span>
        <span className="movie__year">{year}</span>
        <ul className="movie_genres">
          {genres.map((genre, index) => (
            <li key={index} className="genre">
              {genre}
            </li>
          ))}
        </ul>
        {calcRating(rating)}
        <p className="movie__content">{moreLength(summary)}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: Proptypes.number.isRequired,
  title: Proptypes.string.isRequired,
  year: Proptypes.number.isRequired,
  summary: Proptypes.string.isRequired,
  poster: Proptypes.string.isRequired,
};

export default Movie;
