'use client';
import React, { useEffect, useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import { Droppable } from './_components/Droppable';
import { Draggable } from './_components/Draggable';
import Logger from '@/hooks/Logger';

export default function DndKitPage() {
  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = <Draggable>Drag me</Draggable>;

  useEffect(() => {
    Logger('IS DROPPED', 'success', isDropped);
  }, [isDropped]);

  return (
    <section className="section flex-col items-center gap-3">
      <DndContext onDragEnd={handleDragEnd}>
        {!isDropped ? draggableMarkup : null}
        <Droppable>{isDropped ? draggableMarkup : 'Drop here'}</Droppable>
      </DndContext>
    </section>
  );

  function handleDragEnd(event: any) {
    if (event.over && event.over.id === 'droppable') {
      setIsDropped(true);
    }
  }
}
