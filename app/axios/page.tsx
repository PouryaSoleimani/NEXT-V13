// AXIOS PAGE
import React from 'react';
import AXIOS from '@/Axios/AxiosInstance';
import AxiosProducts from '@/components/AxiosProducts';

const AxiosPage = async () => {
  try {
    AXIOS.get('/products');
    const data = await AXIOS.get('/productsss');
    return (
      <div>
        AxiosPage
        <AxiosProducts data={data.data} />
      </div>
    );
  } catch (error: any) {
    throw new Error(`message :${error.message}`);
  }
};
export default AxiosPage;
