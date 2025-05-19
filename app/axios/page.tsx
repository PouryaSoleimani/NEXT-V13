import React from 'react';
import AXIOS from '@/Axios/AxiosInstance';
import AxiosProducts from '@/components/AxiosProducts';

const AxiosPage = async () => {
  const req = await AXIOS.get('/products');
  const data = await req.data;
  console.info(data);
  return (
    <div>
      AxiosPage
      <AxiosProducts data={data} />
    </div>
  );
};

export default AxiosPage;
