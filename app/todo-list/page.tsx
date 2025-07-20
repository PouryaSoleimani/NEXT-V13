import React from 'react'
import TodoForm from './_components/TodoForm'
import TodoList from './_components/TodoList'
import { Separator } from '@radix-ui/react-separator'


const TodoListPage = () => {

  return (
    <div className='w-full h-[80vh] flex items-center justify-center'>
      <div className='w-1/2 h-1/2 px-5 bg-zinc-900 p-3 rounded-xl my-10 text-center overflow-scroll shadow-md shadow-black inset-shadow-black'>
        <h1 className='text-white mb-6 text-2xl font-bold underline underline-offset-4 decoration-4 decoration-emerald-700 '>Todo List</h1>
        <TodoForm />
        <Separator orientation='horizontal' className='h-1 rounded-xl w-full bg-zinc-800 my-4' />
        <TodoList />
      </div>
    </div>
  )
}

export default TodoListPage