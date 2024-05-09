// ^ CLIENT AND SERVER COMPONENTS
// * THIS IS A CLIENT COMPONENT
"use client" // THIS LINE OF CODE MAKES OUR COMPONENT A CLIENT COMPONENT , AND WITHOUT THIS OUR COMPONENT IS ALWAYS A SERVER COMPONENT

import { NextPage } from 'next'
import { useState } from 'react'

interface Props { }

const Page: NextPage<Props> = ({ }) => {

  const [first, setfirst] = useState('HELLO')


  return (
    <>
      <h1 className='bg-gradient-to-r from-sky-800 via-blue-800 text-4xl font-bold text-center p-6 to-slate-900'>CLIENT COMPONENT</h1>
      <h2>{first}</h2>
    </>
  )
}

export default Page      