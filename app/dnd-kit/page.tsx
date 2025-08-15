'use client';
import React, { useEffect, useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import Draggable from './_components/Draggable';
import Droppable from './_components/Droppable';
import Logger from '@/hooks/Logger';

function DndKitPage() {
  const containers = ['A'];
  const [Todos, setTodos] = useState<Array<any>>([
    { id: 1, title: 'Go to GYM' },
    { id: 2, title: 'Learn NEXT' },
    { id: 3, title: 'Learn REACT' },
  ]);
  const [parent, setParent] = useState<string | null>(null);
  const [activeTodo, setActiveTodo] = useState<any>(null);

  const draggableMarkup = (text: string) => <Draggable id={text}>{text}</Draggable>;
  useEffect(() => {
    Logger("ACTIVE TODO", 'log', activeTodo)
  }, [activeTodo])

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
        {
          // parent === null &&
          Todos.map((item, index) => (
            <div key={index}>{draggableMarkup(item?.title?.toString())}</div>
          ))
        }
      </div>

      <div className="flex gap-3 w-screen h-screen items-start justify-center p-10 grow">
        {containers.map((id) => (
          <Droppable key={id} id={id} parent={parent}>
            {parent === id && activeTodo ? draggableMarkup(activeTodo) : 'DONE TODOS'}
          </Droppable>
        ))}
      </div>
    </DndContext>
  );
}

export default DndKitPage;
