'use client';
import { useDroppable } from '@dnd-kit/core';
interface DroppableProps {
  text: string;
}

//^ DROPPPABLE
export function Droppable(props: DroppableProps) {
  const { setNodeRef, isOver } = useDroppable({ id: 'droppable-area' });
  const { text } = props;

  const droppableStyles = {
    width: 1500,
    height: 700,
    backgroundColor: `${isOver ? 'darkgreen' : 'black'}`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '4px solid white',
    borderRadius: '10px',
    fontWeight: '900',
  };

  return (
    <div ref={setNodeRef} style={droppableStyles}>
      {text}
    </div>
  );
}
