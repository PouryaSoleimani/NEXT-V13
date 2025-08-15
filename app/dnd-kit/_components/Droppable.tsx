import React from 'react';
import { useDroppable } from '@dnd-kit/core';

export default function Droppable(props: any) {
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable',
  });
  const style = {
    color: isOver ? 'green' : undefined,
  };


  return (
    <div ref={setNodeRef} style={style} className='border-4 h-[50vh] mx-20 rounded-xl'>
      {props.children}
    </div>
  );
}