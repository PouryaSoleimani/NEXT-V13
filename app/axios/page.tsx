// AXIOS PAGE
import React from 'react';
import AXIOS from '@/Axios/AxiosInstance';
import AxiosProducts from '@/components/AxiosProducts';

const AxiosPage = async () => {
  // USING THE INSTANCE
  const req = await AXIOS.get('/products');
  // HERE WE CATCH ERRORS IN THE INSTANCE FILE USING INTERCEPTORS
  const data = req.data;

  // RETURN
  return (
    <div>
      AxiosPage
      <AxiosProducts data={data} />
    </div>
  );
};
export default AxiosPage;
