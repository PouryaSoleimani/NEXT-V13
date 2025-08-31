import React from 'react'

const Task = ({ id, title }: { id: number, title: string }) => {
  return (
    <div className='text-black bg-white my-2 p-3 rounded-md shadow-sm shadow-stone-400'>{title}</div>
  )
}

export default Task