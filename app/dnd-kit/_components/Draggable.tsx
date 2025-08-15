import React from 'react';
import { useDraggable } from '@dnd-kit/core';

export default function Draggable(props: any) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: 'draggable',
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;


  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes} className='border-4 border-red-600 size-32 rounded-xl'>
      {props.children}
    </button>
  );
}