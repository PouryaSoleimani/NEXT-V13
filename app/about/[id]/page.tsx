import { NextPage } from 'next'
import Link from 'next/link'

interface Props { params: { id: number } }

const Page: NextPage<Props> = ({ params }) => {

  console.log(params.id) // THIS LOGS IN BACKEND CONSOLE , AND NOT IN THE BROWSER

  return (
    <>
      <div>
        <h1 className='bg-red-700 font-bold text-5xl p-6 text-center'>DYNAMIC ABOUT PAGE </h1>
        <h2 className='bg-zinc-800 p-6 text-6xl w-fit font-bold mx-auto mt-4 border-8 rounded-lg'>{params.id}</h2>
      </div >
      <div className='flex items-center justify-center mt-10'>
        <Link href={`/about/${params.id}/courses`} className='bg-sky-800/50 border-sky-800 border-8 rounded-xl text-2xl p-4 mx-auto font-bold  '> USER {params.id} COURSES</Link>
      </div>
    </>
  )
}


export default Page