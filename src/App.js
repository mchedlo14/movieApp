import React, { useState, useEffect, useRef } from 'react';
import Movie from './components/movie/Movie';
import './App.css';
import downArrowIcon from './assets/icons/down-arrow.svg';
import searchIcon from './assets/icons/search.svg';
import Loader from './components/Loader/Loader';

const FEATURED_API =
  'https://api.themoviedb.org/3/discover/movie?api_key=fb1f301ce530a9bb513825b9f44b9df1&page=';
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?&api_key=fb1f301ce530a9bb513825b9f44b9df1&query=';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const loaderRef = useRef(null);

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
    const handleIntersection = (entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        loadMoreMovies();
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    });

    if (isLoading) return;

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [isLoading]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  useEffect(() => {
    if (searchTerm.trim() !== '') {
      fetchSearchedMovieData();
    } else {
      setCurrentPage(1);
      setMovies([]);
      fetchMovieData(currentPage);
    }
  }, [searchTerm]);

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input
          className="search"
          type="text"
          placeholder="Search Movie By Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>

      <div className="movie-container">
        <Movie movieData={movies} />
      </div>

      <div className="loader-container">{isLoading && <Loader />}</div>

      {currentPage < totalPages && !isLoading && (
        <div id="loader" style={{ marginTop: '20px' }}>
          <button
            className="loadmore-btn"
            onClick={loadMoreMovies}
            src={downArrowIcon}
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
};

export default App;
