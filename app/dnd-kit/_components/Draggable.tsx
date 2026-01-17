import React from "react";
import { useDraggable } from "@dnd-kit/core";

const Draggable = (props: any) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  });
  const style = {
    width: 120,
    height: 120,
    backgroundColor: "white",
    color: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "22px",
    fontWeight: "900",
    cursor: "grab",
    borderRadius: "8px",
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    margin: "10px",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}>
      {props.children}
    </div>
  );
};

export default Draggable;
