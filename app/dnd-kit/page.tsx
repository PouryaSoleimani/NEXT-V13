'use client';
import { DndContext } from '@dnd-kit/core';
import React from 'react';
import toast from 'react-hot-toast';
import { Draggable } from './_components/Draggable';
import { Droppable } from './_components/Droppable';

function DndKitpage() {
  function handleDragEnd(event: any) {
    if (event.over) {
      toast.success('ITEM DROPPED', {
        style: {
          background: 'black',
          color: 'white',
          border: '4px solid white',
          borderRadius: '10px',
          fontWeight: '900',
        },
      });
    }
  }
  return (
    <section>
      <DndContext onDragEnd={handleDragEnd}>
        <div style={{ display: 'flex', gap: 50, padding: 40 }}>
          <Draggable text="DRAGGABLE" />
          <Droppable text="DROPABBLE" />
        </div>
      </DndContext>
    </section>
  );
}

export default DndKitpage;
