// ^ CLIENT AND SERVER COMPONENTS
// * THIS IS A CLIENT COMPONENT
// "use client"
// THIS LINE OF CODE MAKES OUR COMPONENT A CLIENT COMPONENT , AND WITHOUT THIS OUR COMPONENT IS ALWAYS A SERVER COMPONENT

import React from 'react'

const ClientComponents = async () => {
  const request = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'force-cache' })
  const response = await request.json()


  return (
    <div>
      <h1 className='bg-cyan-500/30 p-8 text-4xl font-bold text-center'>CLIENT COMPONENTS</h1>

      <ul className='flex flex-col items-start space-y-4 justify-center text-3xl py-4 px-4 '>
        {response.map((item: { name: string }) => <li>{item.name}</li>)}
      </ul>

    </div>
  )
}

export default ClientComponents