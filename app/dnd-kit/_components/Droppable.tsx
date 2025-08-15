'use client';
import { useDroppable } from '@dnd-kit/core';

//^ DROPPPABLE
export function Droppable(props: any) {
  const { setNodeRef, isOver } = useDroppable({ id: 'droppable' });

  const droppableStyles = {
    width: 'auto',
    minWidth: '250px',
    minHeight: '250px',
    height: 'auto',
    backgroundColor: `${isOver ? '#002c22' : 'black'}`,
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'start',
    border: '4px solid white',
    padding: '0.5rem',
    borderRadius: '10px',
    fontWeight: '900',
    margin: '10px 0',
  };

  return (
    <div ref={setNodeRef} style={droppableStyles}>
      {props.children}
    </div>
  );
}
