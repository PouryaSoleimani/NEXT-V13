import React from 'react';
import { useDraggable } from '@dnd-kit/core';

const Draggable = () => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id: 'draggable' });
  const style = {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    color: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'grab',
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      DRAGGABLE
    </div>
  );
};

export default Draggable;
