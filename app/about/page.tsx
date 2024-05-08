import { NextPage } from 'next'

interface Props { }

const Page: NextPage<Props> = ({ }) => {
  return (
    <h1 className='bg-yellow-400 text-4xl text-black font-bold text-center p-4'>ABOUT PAGE</h1>
  )
}


export default Page