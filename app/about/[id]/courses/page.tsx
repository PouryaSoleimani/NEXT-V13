import { NextPage, GetStaticProps } from 'next'

interface Props { params: { id: number } }

const Page: NextPage<Props> = ({ params }) => {
  const userID = params.id
  return (
    <div className='flex items-center justify-center h-screen w-screen'>
      <h2 className='bg-zinc-800 p-6 text-4xl w-fit font-bold mx-auto mt-4 border-8 rounded-lg'>COURSES AVAILABLE FOR USER ID : {userID}</h2>
    </div>
  )
}

export default Page