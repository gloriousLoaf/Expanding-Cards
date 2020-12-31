// env.js not pushed to GH obviously, but its just
// an export const with my tmdb.org API key
import { API_KEY } from './env.js';

// API Paths
const API_URL = `https:/api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&PAGE=1`;
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = `https:/api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query="`;

// DOM
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

// show some content on load
getMovies(API_URL);

// async await our first fetch of movie data
async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  // write to DOM
  showMovies(data.results);
}

// write query results to DOM
function showMovies(movies) {
  // clear old movies
  main.innerHTML = '';
  // loop & destructure, add to approriate DOM elems
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie');
    movieCard.tabIndex = 0;
    movieCard.innerHTML = `
      <img src="${IMG_PATH + poster_path}" alt="${title}">
      <div class="movieInfo">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        ${overview}
      </div>
    `;
    main.appendChild(movieCard);
  });
}

// convert rating to class for css color application
function getClassByRate(vote) {
  switch (true) {
    case vote >= 8:
      return 'green';
    case vote >= 5:
      return 'orange';
    case vote < 5:
      return 'red';
    default:
      return '';
  }
}

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
