'use client';
import { useDroppable } from '@dnd-kit/core';
import { droppableStyles } from './../styles/styles';
interface DroppableProps {
  text: string;
}

//^ DROPPPABLE
export function Droppable(props: DroppableProps) {
  const { setNodeRef } = useDroppable({ id: 'droppable-area' });
  const { text } = props;

  return (
    <div ref={setNodeRef} style={droppableStyles}>
      {text}
    </div>
  );
}
