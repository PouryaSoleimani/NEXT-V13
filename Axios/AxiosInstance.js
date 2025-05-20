import axios from 'axios';

const AXIOS = axios.create({
  baseURL: 'https://fakestoreapi.com',
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
});
//^ INTERCEPTORS
AXIOS.interceptors.request.use(
  (config) => {
    console.log('CONFIG INTERCEPTOR REQUEST ===> WHEN OK ===>', config);
    return config;
  },
  (error) => {
    if (error) {
      console.log('ERROR INTERCEPTOR  ===>', error.message);
    }
    return Promise.reject(error);
  },
);

AXIOS.interceptors.response.use(
  (response) => {
    console.log('CONFIG INTERCEPTOR RESPONSE ===> WHEN OK ===>', config);
    return response;
  },
  (error) => {
    if (error) {
      console.log('ERROR INTERCEPTOR  ===>', error.message);
    }
    return Promise.reject(error);
  },
);
export default AXIOS;
