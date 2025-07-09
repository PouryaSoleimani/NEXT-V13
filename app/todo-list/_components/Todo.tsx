'use client'
import React from 'react'
import { BiTrash } from 'react-icons/bi'
import { TodoType } from '../types/Todos.types'


const Todo = ({ id, text, completed }: TodoType) => {
  return (
    <li className={`flex items-center justify-between p-2 border-b border-b-zinc-600 bg-black rounded-lg pl-3 text-xl font-black ${completed == true ? 'line-through opacity-50' : 'text-white'}`}>
      <span className='text-white'>Todo 2</span>
      <button className='text-red-500 bg-red-100 p-3 rounded hover:bg-red-200'><BiTrash className='w-6 h-6' /></button>
    </li>
  )
}

export default Todo