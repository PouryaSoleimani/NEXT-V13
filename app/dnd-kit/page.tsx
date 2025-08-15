'use client';
import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import Draggable from './_components/Draggable';
import Droppable from './_components/Droppable';
import toast from 'react-hot-toast';

function DndKitPage() {
  const containers = ['A'];
  const [parent, setParent] = useState(null);
  const todos = ['Go to GYM', 'Learn NEXT', 'Learn REACT']
  const draggableMarkup = ((text: string) => <Draggable id={text}>{text}</Draggable>);


  function handleDragEnd(event: any) {
    const { over } = event;
    setParent(over ? over.id : null);
  }

  return (
    <div>
      <DndContext onDragEnd={handleDragEnd}>
        <div className='flex'>
          {parent === null ?
            todos.map((item: any, index: number) => (
              <div key={item.id}>
                {draggableMarkup(item.toString())}
              </div>
            ))
            : null}
        </div>
        <div className="flex gap-3 w-screen h-screen items-start justify-center p-10 grow">
          {containers.map((id) => (
            <Droppable key={id} id={id} parent={parent}>
              {parent === id ? draggableMarkup(parent) : 'DONE TODOS'}
            </Droppable>
          ))}
        </div>
      </DndContext>
    </div>
  );
}

export default DndKitPage;


