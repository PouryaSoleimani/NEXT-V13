import React from 'react'

function Task({ id, title }: { id: number, title: string }) {
  return (
    <div className='bg-neutral-900 p-2.5 rounded-md'>{title}</div>
  )
}

export default Task