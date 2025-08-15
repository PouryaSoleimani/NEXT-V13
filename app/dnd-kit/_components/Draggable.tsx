"use client";
import React from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";

export function Draggable() {

  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id: "draggable-item", });

  const style = {
    width: 100,
    height: 100,
    backgroundColor: "lightblue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "grab",
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    border: '4px solid white'
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      DRAGGABLE
    </div>
  );
}