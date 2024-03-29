import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Popular.css';
import { fetchPopularMovies } from '../../utils/api';

const IMG_API = 'https://image.tmdb.org/t/p/w1280';

const Popular = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const movies = await fetchPopularMovies();
      setPopularMovies(movies);
    };

    fetchData();
  }, []);

  const handleClick = (movieId) => {
    console.log(movieId);
  };

  return (
    <div className='movie-container'>
      {popularMovies.map((movie) => (
        <Link key={movie.id} to={`/detail/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className='movie' onClick={() => handleClick(movie.id)}>
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
    </div>
  );
};

export default Popular;
