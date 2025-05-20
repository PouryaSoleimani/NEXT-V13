import axios from 'axios';
// INSTANCE ____________________________________________________________________________________________________________________________________________
const AXIOS = axios.create({
  baseURL: 'https://fakestoreapi.com',
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
});

// INTERCEPTORS ________________________________________________________________________________________________________________________________________
// REQUEST
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

// RESPONSE
AXIOS.interceptors.response.use(
  (response) => {
    console.log('CONFIG INTERCEPTOR RESPONSE ===> WHEN OK ===>', response);
    return response;
  },
  (error) => {
    if (error) {
      console.log('ERROR INTERCEPTOR ===>', error.message);
    }
    return Promise.reject(error);
  },
);
export default AXIOS;
