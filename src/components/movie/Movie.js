import React, { useEffect } from 'react';

const IMG_API = 'https://image.tmdb.org/t/p/w1280';

const Movie = ({ movieData }) => {
  useEffect(() => {
    console.log(movieData);
  }, []);

  const handleClick = (movieId) => {
    console.log(movieId)
  }
  return (
    <>
      {movieData.length > 0 &&
        movieData.map((movie) => (
          <div className='movie' key={movie.id} onClick={() => handleClick(movie.id)}>
            <img src={IMG_API + movie.poster_path} alt={movie.title} />
            <div className='movie-info'>
              <h3>{movie.title}</h3>
              <span>{movie.vote_average} IMDb</span>
            </div>
            <div className='movie-over'>
              <h2>overview:</h2>
              <p>{movie.overview}</p>
            </div>
          </div>
        ))}
    </>
  );
};

export default Movie;
