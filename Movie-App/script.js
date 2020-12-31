// env.js not pushed to GH obviously, but its just
// an export const with my tmdb.org API key
import { API_KEY } from './env.js';

// API Paths
const API_URL = `https:/api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&PAGE=1`;
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = `https:/api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query="`;

// DOM
const form = document.getElementById('form');
const search = document.getElementById('search');

// async await our first fetch of movie data
const getMovies = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.results);
};
getMovies(API_URL);

// search box listener
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  // if searchTerm has a value, hit the search endpoint then clear box
  searchTerm && searchTerm !== ''
    ? getMovies(SEARCH_API + searchTerm)
    : window.location.reload();
  search.value = '';
});
