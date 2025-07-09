'use client'
import React from 'react'
import Todo from './Todo'
import useTodoStore from '@/app/zustand-training/useTodoStore'

const TodoList = () => {
  const { todos } = useTodoStore()

  return (
    <div className='my-5'>
      <ul className='overflow-scroll h-full'>
        {todos.length ? todos.map(todo => (
          <Todo key={todo.id} {...todo} />
        )) : <p className='bg-black font-bold p-5 rounded-lg text-2xl'>No todos available</p>}
      </ul>
    </div>
  )
}

export default TodoList