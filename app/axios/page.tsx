// AXIOS PAGE
import React from 'react';
import AXIOS from '@/Axios/AxiosInstance';
import AxiosProducts from '@/components/AxiosProducts';

const AxiosPage = async () => {
  try {
    AXIOS.get('/products');
    const data = await AXIOS.get('/productsssss');
    console.log('🟩🟩🟩 AXIOS PAGE ==>', data.data[0]);
    return (
      <div>
        AxiosPage
        <AxiosProducts data={data.data} />
      </div>
    );
  } catch (error: any) {
    console.info('🟧🟧🟧 AXIOS PAGE ERROR ==>', error.message);
  }
};
export default AxiosPage;
