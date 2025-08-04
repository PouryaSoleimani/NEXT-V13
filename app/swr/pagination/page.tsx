import React from 'react';
import PageComponent from '../swr-advanced.tsx/_components/Page.';

function Page() {
  return (
    <div className="section flex-col gap-y-4">
      <PageComponent index={1} />
      <div className="center">
        <button className="btn">PREVIOUS</button>
        <button className="btn">NEXT</button>
      </div>
    </div>
  );
}

export default Page;
