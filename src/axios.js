import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VUE_APP_API_URL, // Replace with your backend API URL
  withCredentials: true,
});

export default api;
