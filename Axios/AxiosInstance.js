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
    console.log('🟩 INTERCEPTOR REQUEST CONFIG ===> WHEN OK ===>', config);
    return config;
  },
  (error) => {
    if (error) {
      console.log('❌ INTERCEPTOR REQUEST ERROR  ===>', error.message);
    }
    return Promise.reject(error);
  }
);

// RESPONSE
AXIOS.interceptors.response.use(
  (response) => {
    console.log('✅ INTERCEPTOR RESPONSE CONFIG ===> WHEN OK ===>', response.status, response.statusText);
    return response;
  },
  (error) => {
    if (error) {
      console.log('🟥🟥🟥🟥  INTERCEPTOR RESPONSE ERROR ===>', error.message);
    }
    return Promise.reject(error);
  }
);

export default AXIOS;
