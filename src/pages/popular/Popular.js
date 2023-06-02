import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Popular.css';

const IMG_API = 'https://image.tmdb.org/t/p/w1280';
const POPULAR_API = 'https://api.themoviedb.org/3/movie/popular?api_key=fb1f301ce530a9bb513825b9f44b9df1&page=1';

const Popular = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await fetch(POPULAR_API);
        const data = await response.json();
        setPopularMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPopularMovies();
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
