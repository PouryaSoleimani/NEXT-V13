// AXIOS PAGE
import React from 'react';
import AXIOS from '@/Axios/AxiosInstance';
import AxiosProducts from '@/components/AxiosProducts';

const AxiosPage = async () => {
  const data = await AXIOS.get('/products', { signal: AbortSignal.timeout(5000) });
  console.log('🟩🟩🟩 AXIOS PAGE ==>', data.data);

  return (
    <div>
      AxiosPage
      <AxiosProducts data={data.data} />
    </div>
  );
};
export default AxiosPage;
