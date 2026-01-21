import Link from "next/link";
import { notFound } from "next/navigation";

const AllCoursesPage = async (props: PageProps<'/courses'>) => {

  console.info('PROPS IN COURSES', props)
  console.info('PARAMS COURSES', await props.params)
  console.info('SEARCH PARAMS COURSES', (await props.searchParams).q)

  if (2 < 3) {
    return notFound()
  }

  return (
    <div className='flex items-center justify-center gap-10 my-10'>
      <Link href='/courses/next'>NEXT</Link>
      <Link href='/courses/node'>NODE</Link>
      <Link href='/courses/react'>REACT</Link>
    </div>
  );
};

export default AllCoursesPage;
