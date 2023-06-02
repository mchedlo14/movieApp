const POPULAR_API = 'https://api.themoviedb.org/3/movie/popular?api_key=fb1f301ce530a9bb513825b9f44b9df1&page=1';
const TRENDING_API = 'https://api.themoviedb.org/3/trending/movie/week?api_key=fb1f301ce530a9bb513825b9f44b9df1';
const UPCOMING_API = 'https://api.themoviedb.org/3/movie/upcoming?api_key=fb1f301ce530a9bb513825b9f44b9df1&page=1';


export const fetchPopularMovies = async () => {
  try {
    const response = await fetch(POPULAR_API);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};


export const fetchTrendingMovies = async () => {
  try {
    const response = await fetch(TRENDING_API);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};


export const fetchUpcomingMovies = async () => {
  try {
    const response = await fetch(UPCOMING_API);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};