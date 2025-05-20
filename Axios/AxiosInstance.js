import axios from 'axios';

const AXIOS = axios.create({
  baseURL: 'https://fakestoreapi.com',
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
});
//^ INTERCEPTORS
AXIOS.interceptors.request.use(
  (config) => {
    console.log('CONFIG INTERCEPTOR ===> WHEN OK ===>', config);
    return config;
  },
  (error) => {
    if (error) {
      console.log('ERROR INTERCEPTOR  ===>', error);
    }
    return Promise.reject(error);
  },
);
export default AXIOS;
