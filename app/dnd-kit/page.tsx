'use client';
import React, { useEffect, useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import { Droppable } from './_components/Droppable';
import { Draggable } from './_components/Draggable';
import Logger from '@/hooks/Logger';
import { Draggable2 } from './_components/Draggable2';

export default function DndKitPage() {
  const [isDropped, setIsDropped] = useState(false);
  const [isDropped2, setIsDropped2] = useState(false);
  const draggableMarkup = <Draggable>1</Draggable>;
  const draggableMarkup2 = <Draggable2>2</Draggable2>;

  useEffect(() => {
    Logger('IS DROPPED', 'success', isDropped);
  }, [isDropped]);

  return (
    <section className="p-10 w-fit gap-4">
      <DndContext onDragEnd={handleDragEnd}>
        {!isDropped ? draggableMarkup : null}
        {!isDropped2 ? draggableMarkup2 : null}
        <Droppable>{isDropped ? draggableMarkup : isDropped2 ? draggableMarkup2 : 'DROP'}</Droppable>
      </DndContext>
    </section>
  );

  function handleDragEnd(event: any) {
    if (event.over && event?.over.id === 'droppable') {
      setIsDropped(true);
      setIsDropped2(false);
    } else if (event.over && event?.over.id === 'droppable2') {
      setIsDropped2(true);
      setIsDropped(false);
    }
  }
}
