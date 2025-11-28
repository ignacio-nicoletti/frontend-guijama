import axios from 'axios';
const baseURL = import.meta.env.VITE_BACK_URL || 'http://localhost:3000';

const api = axios.create({
    baseURL: baseURL,
    withCredentials: true,
});

export default api;