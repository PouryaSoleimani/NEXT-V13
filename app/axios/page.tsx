// AXIOS PAGE
import React from 'react';
import AXIOS from '@/Axios/AxiosInstance';
import AxiosProducts from '@/components/AxiosProducts';

const AxiosPage = async () => {
  // USING THE INSTANCE
  const req = await AXIOS.get('/products2222');
  console.info("REQ ===>",req)
  const data = await req.data;

  // RETURN
  return (
    <div>
      AxiosPage
      <AxiosProducts data={data} />
    </div>
  );
};
export default AxiosPage;
