import React, { useState,useEffect } from 'react'
import Movie from './components/Movie';


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
          <input className="search" type="text" placeholder="Search..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        </header>
      </form>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </>
  );
}


export default App