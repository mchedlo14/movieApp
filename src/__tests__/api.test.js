import { fetchPopularMovies, fetchTrendingMovies, fetchUpcomingMovies } from '../utils/api';

describe('API tests', () => {
  test('fetchPopularMovies returns an array of popular movies', async () => {
    const movies = await fetchPopularMovies();
    expect(Array.isArray(movies)).toBe(true);
  });

  test('fetchTrendingMovies returns an array of trending movies', async () => {
    const movies = await fetchTrendingMovies();
    expect(Array.isArray(movies)).toBe(true);
  });

  test('fetchUpcomingMovies returns an array of upcoming movies', async () => {
    const movies = await fetchUpcomingMovies();
    expect(Array.isArray(movies)).toBe(true);
  });
});