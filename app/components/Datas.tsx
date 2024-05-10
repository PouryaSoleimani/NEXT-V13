// ^ DATAS COMPOENT
import React from 'react'
type userType = { id: number, name: string, username: string }


const Datas = async () => {
  const request = await fetch('https://jsonplaceholder.typicode.com/users')
  const response = await request.json()

  return (
    <div>
      <ul className='w-full h-fit p-8 flex flex-col items-start justify-center space-y-6 text-2xl rounded-lg bg-zinc-900/50'>
        {response.map((user: userType) => <li key={user.id}>{user.id} - {user.name} || {user.username}</li>)}
      </ul>
    </div>
  )
}

export default Datas