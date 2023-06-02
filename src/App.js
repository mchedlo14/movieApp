import React, { useState, useEffect } from 'react';
import Movie from './components/Movie';
import Slider from './components/Slider';
import Header from './components/Header/Header';

const FEATURED_API = 'https://api.themoviedb.org/3/discover/movie?api_key=fb1f301ce530a9bb513825b9f44b9df1&page=';

const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?&api_key=fb1f301ce530a9bb513825b9f44b9df1&query=';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovieData = async (page) => {
    try {
      const response = await fetch(FEATURED_API + page);
      const data = await response.json();
      setTotalPages(data.total_pages);
      return data.results;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const fetchSearchedMovieData = async () => {
    try {
      const response = await fetch(SEARCH_API + searchTerm);
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const loadMoreMovies = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      const movieData = await fetchMovieData(currentPage);
      setMovies((prevMovies) => [...prevMovies, ...movieData]);
      setIsLoading(false);
    };

    fetchMovies();
  }, [currentPage]);

  useEffect(() => {
    if (searchTerm.trim() !== '') {
      fetchSearchedMovieData();
    } else {
      setCurrentPage(1);
      setMovies([]);
    }
  }, [searchTerm]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  const handleIntersection = (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      loadMoreMovies();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    });

    if (isLoading) return;

    const loader = document.getElementById('loader');
    if (loader) {
      observer.observe(loader);
    }

    return () => {
      if (loader) {
        observer.unobserve(loader);
      }
    };
  }, [isLoading]);

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <Header setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      </form>

      <div className="movie-container">
        <Movie movieData={movies} />
      </div>

      {isLoading && <div id="loader">Loading...</div>}

      {currentPage < totalPages && !isLoading && (
        <div id="loader" style={{ marginTop: '20px' }}>
          <button onClick={loadMoreMovies}>Load More</button>
        </div>
      )}

      <h5 style={{ textAlign: 'center' }}>CopyRight by Levan Mtchedlishvili</h5>
    </>
  );
};

export default App;
