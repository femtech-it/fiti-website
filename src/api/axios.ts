import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Accept': 'application/json',
  },
});

// Add a response interceptor for better error debugging
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('API Error Response:', error.response.data);
      console.error('Status:', error.response.status);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('API No Response (CORS or Network issue):', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('API Request Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
