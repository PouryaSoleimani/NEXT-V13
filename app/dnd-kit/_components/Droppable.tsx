'use client'
import { useDroppable } from "@dnd-kit/core";

export function Droppable() {

  const { isOver, setNodeRef } = useDroppable({ id: "droppable-area", });

  const style = {
    width: 150,
    height: 150,
    backgroundColor: isOver ? "lightgreen" : "lightgray",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return <div ref={setNodeRef} style={style}>DROP HERE</div>;
}