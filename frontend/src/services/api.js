const API_KEY = "ad421db32987404b6e4f25c1ba6a0a6d";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovie = async () => {
    const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await res.json()
    return data.results
};

export const searchMovies = async (query) => {
    const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    const data = await res.json()
    return data.results
}