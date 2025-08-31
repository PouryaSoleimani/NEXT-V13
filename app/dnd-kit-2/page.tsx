'use client'
import React, { useState } from 'react'
import { closestCenter, closestCorners, DndContext } from '@dnd-kit/core'
import Column from './_components/Column'

function DndKit2Page() {

  const [tasks, setTasks] = useState([
    { id: 1, title: "Go to Gym" },
    { id: 2, title: "Shopping Grocceries" },
    { id: 3, title: "Study" },
  ])

  return (
    <div className='screen center p-3 bg-neutral-950'>
      <DndContext collisionDetection={closestCorners}>
        <Column tasks={tasks} />
      </DndContext>
    </div>
  )
}

export default DndKit2Page