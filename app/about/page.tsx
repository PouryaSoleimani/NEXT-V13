import { NextPage } from 'next'
import Link from 'next/link'


interface Props { }

const Page: NextPage<Props> = ({ }) => {
  return (
    <>
      <h1 className='bg-yellow-400 text-4xl text-black font-bold text-center p-4'>ABOUT PAGE</h1>
      <Link href='/about/testabout'>TEST ABOUT</Link>
    </>
  )
}


export default Page 