import React from 'react';
import useAuthStore from '../../components/Layout/Header/authStore';
import { Link, Navigate } from 'react-router-dom';

const Account = () => {
  const isAuth = useAuthStore((state) => state.isAuth);
  const movies = useAuthStore((state) => state.movies);
  const IMG_API = 'https://image.tmdb.org/t/p/w1280';

  console.log(movies);

  if (!isAuth) {
    return <Navigate to="/" />; // Redirect to home page if user is not authenticated
  }

  return (
    <div>
      <p className="favorite-text">Favorite Movies</p>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => (
            <Link
              key={movie.id}
              to={`/detail/${movie.id}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="movie">
                <img src={IMG_API + movie.poster_path} alt={movie.title} className="about-image" />
                <div className="movie-info">
                  <h3>{movie.title}</h3>
                  <span>{movie.vote_average} IMDb</span>
                </div>
                <div className="movie-over">
                  <h2>Overview:</h2>
                  <p>{movie.overview}</p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Account;
