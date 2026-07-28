const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const seriesId = 1399; // e.g. Game of Thrones
const endpoints = {
  trending: `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
  movies: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
  tv: `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`,
  onAir: `https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}`,
  featured: `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`,
  topRated: `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}`,
  newReleases: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`,
  people: `https://api.themoviedb.org/3/search/person?api_key=${API_KEY}` ,
  recomm: `https://api.themoviedb.org/3/tv/${seriesId}/recommendations?api_key=${API_KEY}`,
  criticAcc: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
};

export default endpoints;