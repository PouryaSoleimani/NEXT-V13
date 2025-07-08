import React from 'react'

type UserType = { id: string, name: string, age: number }

type UserComponentPropsType = {
  props: UserType[]
}

const UserComponent: React.FC<UserComponentPropsType> = ({ props }) => {
  return (
    <div className='grid grid-cols-8 px-5 my-5'>
      {props.map(user => (
        <div key={user.id} className='bg-zinc-900 flex items-center justify-between p-4 my-2 rounded-xl w-fit gap-6 font-bold border-2 border-zinc-500'>
          <h2>{user.name}</h2>
          <p>Age: {user.age}</p>
        </div>
      ))}
    </div>
  )
}

export default UserComponent