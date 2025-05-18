import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1 className="bg-lime-600 text-white font-black text-3xl p-6">Login HEADER</h1>
      {children}
    </div>
  );
};

export default layout;
