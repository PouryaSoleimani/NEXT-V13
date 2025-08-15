'use client';
import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import Draggable from './_components/Draggable';
import Droppable from './_components/Droppable';
import toast from 'react-hot-toast';

function DndKitPage() {
  const [isDropped, setIsDropped] = useState(false);
  const [parent, setParent] = useState(null);
  const containers = ['A', 'B', 'C'];
  const draggableMarkup = (<Draggable> DRAG ME</Draggable>);


  function handleDragEnd(event: any) {
    const { over } = event;
    if (event.over && event.over.id === 'droppable') {
      toast.success('ITEM DROPPED ✅');
      setIsDropped(true);
    } else {
      setIsDropped(false)
    }
    setParent(over ? over.id : null);
  }

  return (
    <div>
      <DndContext onDragEnd={handleDragEnd}>
        {parent === null ? draggableMarkup : null}
        <div className="flex flex-col gap-3 w-screen h-screen items-center justify-center">
          {containers.map((id) => (
            // We updated the Droppable component so it would accept an `id`
            // prop and pass it to `useDroppable`
            <Droppable key={id} id={id}>
              {parent === id ? draggableMarkup : 'Drop here'}
            </Droppable>
          ))}
        </div>
      </DndContext>
    </div>
  );
}

export default DndKitPage;


