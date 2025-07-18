'use client'
import React from 'react'
import Todo from './Todo'
import useTodoStore from '@/app/zustand-training/useTodoStore'
import { ClipboardPlus } from 'lucide-react'

const TodoList = () => {

  const { todos } = useTodoStore()

  return (
    <div className='my-5'>
      <ul className='overflow-scroll h-full'>
        {todos.length ? todos.map(todo => (
          <Todo key={todo.id} {...todo} />
        )) : <p className='bg-zinc-800/50 font-bold p-5 rounded-lg text-2xl border border-zinc-900 flex flex-col items-center-safe justify-center gap-y-5'><ClipboardPlus color="#ffffff" className='size-10' /> No todos available</p>}
      </ul>
    </div>
  )
}

export default TodoList