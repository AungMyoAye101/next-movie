// utils/api.js
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.API_KEY;

const fetchFromTMDB = async (endpoint: string) => {
  const response = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}`, {
    next: { revalidate: 3600 },
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const getMovie = (movie: string) => fetchFromTMDB(`/${movie}`);
export const getMovieDetails = (movieId: number) =>
  fetchFromTMDB(`/movie/${movieId}`);
export const getTvDetails = (tvId: number) => fetchFromTMDB(`/tv/${tvId}`);
export const getCast = (movieId: number) =>
  fetchFromTMDB(`/movie/${movieId}/credits`);
export const getSimilarMovies = (movieId: number) =>
  fetchFromTMDB(`/movie/${movieId}/similar`);
export const getRecommendations = (movieId: number) =>
  fetchFromTMDB(`/movie/${movieId}/recommendations`);
export const getTrailer = (movieId: number) =>
  fetchFromTMDB(`/movie/${movieId}/videos`);
