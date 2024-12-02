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
export const getTv = (tv: string) => fetchFromTMDB(`/${tv}`);
export const getMovieDetails = (movieId: number) =>
  fetchFromTMDB(`/movie/${movieId}`);
export const getTvDetails = (tvId: number) => fetchFromTMDB(`/tv/${tvId}`);
export const getCast = (type: string, movieId: number) =>
  fetchFromTMDB(`/${type}/${movieId}/credits`);
export const getSimilarMovies = (movieId: number) =>
  fetchFromTMDB(`/movie/${movieId}/similar`);
export const getRecommendations = (type: string, movieId: number) =>
  fetchFromTMDB(`/${type}/${movieId}/recommendations`);
export const getTrailer = (movieId: number) =>
  fetchFromTMDB(`/movie/${movieId}/videos`);
export const getPeople = () => fetchFromTMDB(`/person/popular`);
export const getPeopleDetail = (id: number) => fetchFromTMDB(`/person/${id}`);
