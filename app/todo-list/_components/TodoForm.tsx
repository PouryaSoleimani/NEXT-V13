"use client"
import React from 'react'
import useTodoStore from '@/app/zustand-training/useTodoStore'
import { toast } from 'react-hot-toast'

const TodoForm = () => {

  const { todos, addTodo } = useTodoStore()
  const [inputValue, setInputValue] = React.useState('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (inputValue.trim() === '') return
    addTodo({ id: todos.length + 1, text: inputValue, completed: false })
    toast.success("Todo added!")
    setInputValue('')
    console.log('TODOS FROM ZUSTAND ==>', todos);
  }

  return (
    <form onSubmit={handleSubmit} className='flex items-center justify-center gap-3 w-full'>
      <input
        type="text"
        placeholder='Add Todo'
        className='p-2 rounded w-5/6 outline-none font-bold border-2 border-zinc-900 bg-black text-white'
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button className='p-2 py-[7px] bg-emerald-900 border-4 box-border border-black text-white rounded w-1/6'>Add</button>
    </form>
  )
}

export default TodoForm