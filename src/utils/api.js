const FEATURED_API = 'https://api.themoviedb.org/3/discover/movie?api_key=fb1f301ce530a9bb513825b9f44b9df1&page=';
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?&api_key=fb1f301ce530a9bb513825b9f44b9df1&query=';

export const fetchMovieData = async (page) => {
  try {
    const response = await fetch(FEATURED_API + page);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const fetchSearchedMovieData = async (searchTerm) => {
  try {
    const response = await fetch(SEARCH_API + searchTerm);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};