'use client';
import React from 'react';
import { useDraggable } from '@dnd-kit/core';

export function Draggable(props: any) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id: 'draggable-item' });

  const style = {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    color: 'black',
    border: '5px solid black',
    fontWeight: '900',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'grab',
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </div>
  );
}
