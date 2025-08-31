import React from 'react'
import { useSortable } from '@dnd-kit/sortable'

function Task({ id, title }: { id: number, title: string }) {

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })

  return (
    <>
      <div className='bg-neutral-900 p-2.5 rounded-md shadow-sm flex items-center gap-3'>
        <input className='size-5 rounded-full accent-emerald-500' type="checkbox" />
        {title}
      </div>
    </>
  )
}

export default Task