import React from 'react';
import { useDroppable } from '@dnd-kit/core';

const Droppable = (props: any) => {
  const { isOver, setNodeRef } = useDroppable({ id: 'droppable' });


  const style = {
    width: 150,
    height: 150,
    backgroundColor: isOver ? 'darkgreen' : 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '22px',
    borderRadius: '15px',
    fontWeight: '900',
  };

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
};

export default Droppable;
