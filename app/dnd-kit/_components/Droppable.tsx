import React from 'react';
import { useDroppable } from '@dnd-kit/core';

const Droppable = (props: any) => {
  const { isOver, setNodeRef } = useDroppable({ id: props.id, });


  const style = {
    width: '30%',
    height: '30%',
    backgroundColor: isOver ? '#2c2c2c' : 'black',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'start',
    padding: '10px',
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
