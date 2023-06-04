import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchUpcomingMovies } from '../../utils/api';
import useAuthStore from '../../components/Layout/Header/authStore';
import '../../App.css';

const IMG_API = 'https://image.tmdb.org/t/p/w1280';

const UpComing = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const addMovie = useAuthStore((state) => state.addMovie);

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await fetchUpcomingMovies();
      setUpcomingMovies(movies);
    };

    fetchMovies();
  }, []);

  const handleClick = (movie) => {
    addMovie(movie);
    console.log(movie);
  };

  return (
    <div className='movie-container'>
      {upcomingMovies.map((movie) => (
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

export default UpComing;
