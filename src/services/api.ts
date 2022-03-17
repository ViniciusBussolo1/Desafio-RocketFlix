import axios from "axios";

export const API_KEY = 'api_key=52407660823572d18445d2d1d4001614';
export const BASE_URL = 'https://api.themoviedb.org/3/movie/';
export const IMG_URL = 'https://image.tmdb.org/t/p/original';
export const language = 'language=pt-BR';

const api = axios.create({
    baseURL: BASE_URL 

})

export default api;
