import React from 'react';
import AXIOS from '@/Axios/AxiosInstance';
import AxiosProducts from '@/components/AxiosProducts';

const AxiosPage = async () => {
  // USING THE INSTANCE
  const req = await AXIOS.get('/products');
  const data = req.data;

  // CATCHING ERROR
  const Err = await AXIOS.get('/products').catch((err) => err);
  if (Err !== undefined) {
    console.info('ERROR SERVER SIDE', Err);
  }

  // RETURN
  return (
    <div>
      AxiosPage
      <AxiosProducts data={data} />
    </div>
  );
};
export default AxiosPage;
