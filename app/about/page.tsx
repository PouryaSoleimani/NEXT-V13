import { NextPage } from 'next'
import Link from 'next/link'


interface Props { }

const Page: NextPage<Props> = ({ }) => {
  return (
    <>
      <h1 className='bg-yellow-400 text-4xl text-black font-bold text-center p-4'>ABOUT PAGE</h1>
      <Link className='bg-emerald-600 p-2 mt-10 ml-10 mx-auto' href='/about/testabout'>TEST ABOUT</Link>
    </>
  )
}


export default Page 