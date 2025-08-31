import React from 'react'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import Task from './Task'



const Column = ({ tasks }: { tasks: any }) => {
  return (
    <div className='bg-neutral-800 rounded-lg p-4 w-[80%] max-w-[500px] flex flex-col gap-3'>
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks.map((item: any) => (
          // <div className='bg-neutral-900 p-2.5 rounded-md' key={item.id}>{item.title}</div>
          <Task key={item.id} {...item} />
        ))}
      </SortableContext>
    </div>
  )
}

export default Column