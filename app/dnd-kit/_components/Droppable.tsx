'use client';
import { useDroppable } from '@dnd-kit/core';

//^ DROPPPABLE
export function Droppable(props: any) {
  const { setNodeRef, isOver } = useDroppable({ id: 'droppable-area' });

  const droppableStyles = {
    width: 1500,
    height: 700,
    backgroundColor: `${isOver ? '#002c22' : 'black'}`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '4px solid white',
    borderRadius: '10px',
    fontWeight: '900',
  };

  return (
    <div ref={setNodeRef} style={droppableStyles}>
      {props.children}
    </div>
  );
}
