import React from 'react';
import { useDroppable } from '@dnd-kit/core';

const Droppable = () => {
  const { isOver, setNodeRef } = useDroppable({ id: 'dropppable' });
  const style = {
    width: 150,
    height: 150,
    backgroundColor: isOver ? 'darkgreen' : 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div ref={setNodeRef} style={style}>
      DROP HERE
    </div>
  );
};

export default Droppable;
