import axios from 'axios';

const AXIOS = axios.create({
  baseURL: 'https://fakestoreapi.com',
  headers: { 'Content-Type': 'application/json' },
});

export default AXIOS;
