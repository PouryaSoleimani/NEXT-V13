import { SortableContext } from '@dnd-kit/sortable'
import React from 'react'
import Task from './Task'

const ColumnComponent = ({ tasks }: { tasks: any }) => {
  return (
    <div className='bg-stone-300 p-2 rounded shadow-sm shadow-stone-500 w-[30%] mx-auto'>
      <SortableContext items={tasks}>
        {tasks.map((item: any) => (
          <Task key={item.id} id={item.id} title={item.title} />
        ))}
      </SortableContext>
    </div>
  )
}

export default ColumnComponent