import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Trending.css';
import { fetchTrendingMovies } from '../../utils/api';
import useAuthStore from '../../components/Layout/Header/authStore';

const IMG_API = 'https://image.tmdb.org/t/p/w1280';

const Trending = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const isAuth = useAuthStore((state) => state.isAuth);
  const addMovie = useAuthStore((state) => state.addMovie);

  useEffect(() => {
    const fetchData = async () => {
      const movies = await fetchTrendingMovies();
      setTrendingMovies(movies);
    };

    fetchData();
  }, []);

  const handleClick = (movie) => {
    if (isAuth) {
      addMovie(movie);
      console.log(movie);
    }
  };

  return (
    <div className='movie-container'>
      {trendingMovies.map((movie) => (
        <Link key={movie.id} to={`/detail/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
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
    </div>
  );
};

export default Trending;
