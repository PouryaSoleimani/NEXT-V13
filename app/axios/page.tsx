// AXIOS PAGE
import React from 'react';
import AXIOS from '@/Axios/AxiosInstance';
import AxiosProducts from '@/components/AxiosProducts';

const AxiosPage = async () => {
  AXIOS.get('/products');
  const data = await AXIOS.get('/productssssss');
  console.log('🟩🟩🟩 AXIOS PAGE ==>', data.data);
  return (
    <div>
      AxiosPage
      <AxiosProducts data={data.data} />
    </div>
  );
};
export default AxiosPage;
