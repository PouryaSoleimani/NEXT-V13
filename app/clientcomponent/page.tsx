import { NextPage } from 'next'

interface Props { }

const Page: NextPage<Props> = ({ }) => {

  console.log(`CLIENT COMPONENT *****************************`)


  return (
    <>
      <h1 className='bg-gradient-to-r from-sky-800 via-blue-800 text-4xl font-bold text-center p-6 to-slate-900'>CLIENT COMPONENT</h1>
    </>
  )
}

export default Page  