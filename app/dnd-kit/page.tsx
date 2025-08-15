'use client';
import React from 'react';
import { DndContext } from '@dnd-kit/core';
import Draggable from './_components/Draggable';
import Droppable from './_components/Droppable';
import toast from 'react-hot-toast';

function DndKitPage() {
  function handleDragEnd(event: any) {
    if (event.over) {
      toast.success('ITEM DROPPED ✅');
    }
  }
  return (
    <div>
      <DndContext onDragEnd={handleDragEnd}>
        <div className="flex flex-col gap-3 w-screen h-screen items-center justify-center">
          <Draggable />
          <Droppable />
        </div>
      </DndContext>
    </div>
  );
}

export default DndKitPage;
