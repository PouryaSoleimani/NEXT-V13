import React from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

function Task({ id, title }: { id: number, title: string }) {

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })

  const style = {
    transition,
    transform: CSS.Transform.toString(transform)
  }
  return (
    <>
      <div style={style} ref={setNodeRef} {...attributes} {...listeners} className='bg-black text-lg p-3 rounded-md shadow-sm flex items-center gap-3 cursor-pointer touch-none hover:bg-neutral-700 duration-200'>
        <input className='size-5 rounded-full accent-emerald-500' type="checkbox" />
        {title}
      </div>
    </>
  )
}

export default Task