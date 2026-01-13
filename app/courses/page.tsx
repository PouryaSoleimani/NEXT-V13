import Link from "next/link";
import React from "react";

const AllCoursesPage = () => {
  return (
    <div className='flex items-center justify-center gap-10 my-10'>
      <Link href='/courses/next'>NEXT</Link>
      <Link href='/courses/node'>NODE</Link>
      <Link href='/courses/react'>REACT</Link>
    </div>
  );
};

export default AllCoursesPage;
