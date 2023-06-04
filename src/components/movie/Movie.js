import React from 'react';
import { Link } from 'react-router-dom';
import useAuthStore from '../../components/Layout/Header/authStore';

const IMG_API = 'https://image.tmdb.org/t/p/w1280';

const Movie = ({ movieData }) => {
  const isAuth = useAuthStore((state) => state.isAuth);
  const addMovie = useAuthStore((state) => state.addMovie);

  const handleClick = (movie) => {
    if (isAuth) {
      addMovie(movie);
      console.log(movie);
    }
  };

  return (
    <>
      {movieData.length > 0 &&
        movieData.map((movie) => (
          <Link
            key={movie.id}
            to={`/detail/${movie.id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className='movie' onClick={() => handleClick(movie)}>
              <img src={IMG_API + movie.poster_path} alt={movie.title} className='about-image' />
              <div className='movie-info'>
                <h3>{movie.title}</h3>
                <span>{movie.vote_average} IMDb</span>
              </div>
              <div className='movie-over'>
                <h2>Overview:</h2>
                <p>{movie.overview}</p>
              </div>
            </div>
          </Link>
        ))}
    </>
  );
};

export default Movie;
