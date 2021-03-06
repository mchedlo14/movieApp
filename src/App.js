import React, { useState,useEffect } from 'react'
import Movie from './components/Movie';
import Slider from './components/Slider';



const FEATURED_API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=fb1f301ce530a9bb513825b9f44b9df1'

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=fb1f301ce530a9bb513825b9f44b9df1&query="

const App = () => {

  const [movies,setMovies] = useState([])
  const [searchTerm,setSearchTerm] = useState('')

  useEffect(() => {
    fetch(FEATURED_API).then(res => res.json())
    .then(data => {
      setMovies(data.results)
    })
  },[])

  const handleOnSubmit = (e) => {
    e.preventDefault();
    
    fetch(SEARCH_API + searchTerm).then(res => res.json())
    .then(data => {
      setMovies(data.results)
    })
  }

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <header>
          <div className='title-container'>
            <h3 className='header'>The Movie App</h3>
            <p className='title'>Find your movies</p>
          </div>
          <input
            className="search"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </header>
      </form>

      <div className='sw-container'>
        <Slider movieData = {movies}/>
      </div>

      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>

      <h5 style={{ textAlign: "center" }}>CopyRight by Levan Mtchedlishvili</h5>
    </>
  );
}


export default App