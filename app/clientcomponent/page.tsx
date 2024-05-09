//^ SERVER COMPONENT


import React from 'react'

const ClientComponents = async () => {

  // const request = await fetch('https://jsonplaceholder.typicode.com/users', { next: { revalidate: 60 } })  // USE THIS FOR << ISR >>
  const request = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' }) // USE THIS FOR NORMAL SSG AND SSR
  const response = await request.json()

  // ? HINTS:
  //  IN REQUEST and IN FOR CACHE :
  //  USE 'force-cache' --> SSG RENDERING --> DEFAULT FORM
  //  USE 'no-store' --> SSR RENDERING

  return (
    <div>
      <h1 className='bg-cyan-500/30 p-8 text-4xl font-bold text-center'>CLIENT COMPONENTS</h1>

      <ul className='flex flex-col items-start space-y-4 justify-center text-3xl py-4 px-4 '>
        {response.map((item: { id: number, name: string }) => <li>{item.id} - {item.name}</li>)}
      </ul>

    </div>
  )
}

export default ClientComponents  