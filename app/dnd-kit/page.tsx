'use client';
import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import Draggable from './_components/Draggable';
import Droppable from './_components/Droppable';
import toast from 'react-hot-toast';

function DndKitPage() {
  const containers = ['A', 'B', 'C'];
  const [parent, setParent] = useState(null);

  const draggableMarkup = (
    <Draggable id="draggable">DRAG ME</Draggable>
  );


  function handleDragEnd(event: any) {
    const { over } = event;
    setParent(over ? over.id : null);
  }

  return (
    <div>
      <DndContext onDragEnd={handleDragEnd}>
        {parent === null ? draggableMarkup : null}
        <div className="flex gap-3 w-screen h-screen items-start justify-center pt-10 grow">
          {containers.map((id) => (
            <Droppable key={id} id={id} parent={parent}>
              {parent === id ? draggableMarkup : 'Drop here'}
            </Droppable>
          ))}
        </div>
      </DndContext>
    </div>
  );
}

export default DndKitPage;


