import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuthStore from '../../components/Layout/Header/authStore';
import './Movie.css';

const IMG_API = 'https://image.tmdb.org/t/p/w1280';

const Movie = ({ movieData }) => {
  const isAuth = useAuthStore((state) => state.isAuth);
  const addMovie = useAuthStore((state) => state.addMovie);
  const [hoveredMovieId, setHoveredMovieId] = useState(null);

  const handleClick = (movie) => {
    if (isAuth) {
      addMovie(movie);
      console.log(movie);
    }
  };

  const handleMouseEnter = (movieId) => {
    setHoveredMovieId(movieId);
  };

  const handleMouseLeave = () => {
    setHoveredMovieId(null);
  };

  return (
    <>
      {movieData.length > 0 &&
        movieData.map((movie) => (
          <div
            key={movie.id}
            className={`movie ${hoveredMovieId === movie.id ? 'hovered' : ''}`}
            onMouseEnter={() => handleMouseEnter(movie.id)}
            onMouseLeave={handleMouseLeave}
          >
            {isAuth && hoveredMovieId === movie.id && (
              <button
                className='favorite-button'
                onClick={() => handleClick(movie)}
              >
                Add to favorites
              </button>
            )}
            <Link
              to={`/detail/${movie.id}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <img src={IMG_API + movie.poster_path} alt={movie.title} className='about-image' />
              <div className='movie-info'>
                <h3>{movie.title}</h3>
                <span>{movie.vote_average} IMDb</span>
              </div>
              <div className='movie-over'>
                <h2>Overview:</h2>
                <p>{movie.overview}</p>
              </div>
            </Link>
          </div>
        ))}
    </>
  );
};

export default Movie;
