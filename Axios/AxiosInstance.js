import axios from 'axios';

const AXIOS = axios.create({
  baseURL: 'https://fakestoreapi.com',
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
});
// INTERCEPTORS
AXIOS.interceptors.request.use(
  (config) => {
    console.log('CONFIG ===>', config);
    return config;
  },
  (error) => {
    console.log('ERROR  ===>', error);
    return Promise.reject(error);
  },
);
export default AXIOS;
