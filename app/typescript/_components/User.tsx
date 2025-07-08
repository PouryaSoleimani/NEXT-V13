'use client'
import React, { useContext } from 'react'
import { ThemeContext, ThemeContextType } from '../context/themeContext'

type UserType = { id: string, name: string, age: number }

type UserComponentPropsType = {
  props: UserType[]
}

const UserComponent: React.FC<UserComponentPropsType> = ({ props }) => {
  const context = useContext<ThemeContextType>(ThemeContext)

  return (
    <div className='grid grid-cols-8 px-5 my-5'>
      {props.map(user => (
        <div key={user.id} className='flex items-center justify-between p-4 my-2 rounded-xl w-fit gap-6 font-bold '>
          <h2>{user.name}</h2>
          <p>Age: {user.age}</p>
        </div>
      ))}
      <button onClick={context.toggleTheme}>Toggle Theme</button>
    </div>
  )

}

export default UserComponent