import React from 'react'
import TodoForm from './_components/TodoForm'
import TodoList from './_components/TodoList'


const TodoListPage = () => {


  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='w-1/2 h-1/2 bg-zinc-700 p-3 rounded-xl my-10 text-center'>
        <h1 className='text-white mb-6 text-2xl font-bold underline underline-offset-4 decoration-4 decoration-emerald-700 '>Todo List</h1>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  )
}

export default TodoListPage