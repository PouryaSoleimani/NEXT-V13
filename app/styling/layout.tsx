import { Metadata } from "next";
import React from "react";

//? METADATA
export const metadata: Metadata = { title: "CUSTOM STYLING PAGE" };

//^ LAYOUT
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className='w-full bg-yellow-300 text-black text-center py-3'>
        CUSTOM HEADER
      </div>
      {children}
      <div className='bg-blue-500 text-black w-full py-3 text-center'>
        CUSTOM FOOTER
      </div>
    </>
  );
};

export default layout;
