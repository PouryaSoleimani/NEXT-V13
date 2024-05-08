import { NextPage } from 'next'

interface Props { params: { id: number } }

const Page: NextPage<Props> = ({ params }) => {

  console.log(params.id) // THIS LOGS IN BACKEND CONSOLE , AND NOT IN THE BROWSER

  return (
    <div>
      <h1 className='bg-red-700 font-bold text-5xl p-6 text-center'>DYNAMIC ABOUT PAGE </h1>
      <h2 className='bg-zinc-800 p-6 text-6xl w-fit font-bold mx-auto mt-4 border-8 rounded-lg'>{params.id}</h2>
    </div>
  )
}


export default Page