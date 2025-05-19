import React from 'react';
import AXIOS from '@/Axios/AxiosInstance';
const AxiosPage = () => {
  const getData = async () => {
    const res = await AXIOS.get('/products').then((res) => console.log(res.data));
    console.log(res);
  };
  getData();

  return <div>AxiosPage</div>;
};

export default AxiosPage;
