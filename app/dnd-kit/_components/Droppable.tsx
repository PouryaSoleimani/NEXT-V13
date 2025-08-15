'use client';
import { useDroppable } from '@dnd-kit/core';

export function Droppable() {
  const { isOver, setNodeRef } = useDroppable({ id: 'droppable-area' });

  const style = {
    width: 1500,
    height: 700,
    backgroundColor: isOver ? 'black' : '#2c2c2c',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '4px solid white',
    borderRadius: '10px',
    fontWeight: '900',
  };

  return (
    <div ref={setNodeRef} style={style}>
      DROP HERE
    </div>
  );
}
