import create from 'zustand';

const useAuthStore = create((set) => ({
  isAuth: localStorage.getItem('isAuth') === 'true',
  movies: [],

  setIsAuth: (value) => {
    localStorage.setItem('isAuth', value);
    set({ isAuth: value });
  },

  addMovie: (movie) => {
    set((state) => ({
      movies: [...state.movies, movie],
    }));
  },
}));

export default useAuthStore;
