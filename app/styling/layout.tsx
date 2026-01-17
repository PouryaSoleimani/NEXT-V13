import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className='w-full bg-yellow-300 text-black text-center py-3'>
        CUSTOM HEADER
      </div>
      {children}
    </>
  );
};

export default layout;
