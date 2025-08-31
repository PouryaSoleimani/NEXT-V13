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
      <div style={style} ref={setNodeRef} {...attributes} {...listeners} className='bg-black shadow-xs shadow-neutral-600 text-lg p-3 rounded-md flex items-center gap-3 cursor-pointer touch-none hover:bg-neutral-700 '>
        {title}
      </div>
    </>
  )
}

export default Task