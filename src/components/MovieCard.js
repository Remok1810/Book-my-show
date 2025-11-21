import React from 'react';
import './MovieCard.css';

function MovieCard({ movie, onBook }) {
  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.name} className="movie-img" />
      <div className="movie-info">
        <h5 className="movie-title">{movie.name}</h5>
        {movie.rating && <p className="movie-rating">Rating: ⭐ {movie.rating}</p>}
        {movie.price && <p className="movie-price">Price: ${movie.price}</p>}
        {movie.paid && <span className="paid-badge">Paid</span>}
        <button className="btn btn-danger book-btn mt-2" onClick={() => onBook(movie)}>
          Book Now
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
