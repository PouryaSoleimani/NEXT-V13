'use client';
import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import Draggable from './_components/Draggable';
import Droppable from './_components/Droppable';

function DndKitPage() {
  const containers = ['A'];
  const todos = ['Go to GYM', 'Learn NEXT', 'Learn REACT'];
  const [parent, setParent] = useState<string | null>(null);
  const [activeTodo, setActiveTodo] = useState<string | null>(null);

  const draggableMarkup = (text: string) => (
    <Draggable id={text}>{text}</Draggable>
  );

  function handleDragEnd(event: any) {
    const { active, over } = event;
    if (over) {
      setParent(over.id);
      setActiveTodo(active.id);
    } else {
      setParent(null);
      setActiveTodo(null);
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex gap-3">
        {parent === null &&
          todos.map((item, index) => (
            <div key={index}>{draggableMarkup(item)}</div>
          ))}
      </div>

      <div className="flex gap-3 w-screen h-screen items-start justify-center p-10 grow">
        {containers.map((id) => (
          <Droppable key={id} id={id} parent={parent}>
            {parent === id && activeTodo
              ? draggableMarkup(activeTodo)
              : 'DONE TODOS'}
          </Droppable>
        ))}
      </div>
    </DndContext>
  );
}

export default DndKitPage;
