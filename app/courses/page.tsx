import Link from "next/link";

const AllCoursesPage = async (props: PageProps<'/courses'>) => {

  console.info('PROPS IN COURSES', props)
  console.info('PARAMS COURSES', await props.params)
  console.info('SEARCH PARAMS COURSES', (await props.searchParams).q)

  return (
    <div className='flex items-center justify-center gap-10 my-10'>
      <Link href='/courses/next'>NEXT</Link>
      <Link href='/courses/node'>NODE</Link>
      <Link href='/courses/react'>REACT</Link>
    </div>
  );
};

export default AllCoursesPage;
