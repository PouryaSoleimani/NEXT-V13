'use client';
import { useDroppable } from '@dnd-kit/core';

//^ DROPPPABLE
export function Droppable(props: any) {
  const { setNodeRef, isOver } = useDroppable({ id: 'droppable' });

  const droppableStyles = {
    width: 1500,
    height: 500,
    backgroundColor: `${isOver ? '#002c22' : 'black'}`,
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'start',
    border: '4px solid white',
    padding: '1rem',
    borderRadius: '10px',
    fontWeight: '900',
  };

  return (
    <div ref={setNodeRef} style={droppableStyles}>
      {props.children}
    </div>
  );
}
