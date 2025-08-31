'use client'
import { closestCorners, DndContext } from '@dnd-kit/core'
import React, { useState } from 'react'
import ColumnComponent from './_components/Column'

const DndKit3Page = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'LEARN JS' },
    { id: 2, title: 'LEARN TS' },
    { id: 3, title: 'LEARN REACT' }
  ])

  return (
    <DndContext collisionDetection={closestCorners}>
      <div className='flex items-center justify-center screen'>
        <ColumnComponent tasks={tasks} />
      </div>
    </DndContext>
  )
}

export default DndKit3Page