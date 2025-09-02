import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React, { CSSProperties } from "react";

const Task = ({ id, title, icon }: { id: number; title: string; icon: string }) => {
  // USE SORTABLE
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id,
  });

  // STYLE
  const style: CSSProperties = {
    transition,
    transform: CSS.Transform.toString(transform),
    backgroundColor: isDragging ? "black" : "white",
    color: isDragging ? "white" : "black",
    position: isDragging ? "relative" : "static",
    zIndex: isDragging ? 50 : 0,
  };

  return (
    <div
      {...attributes}
      {...listeners}
      style={style}
      className="text-black group flex items-center justify-between my-2 p-3 rounded-md hover:shadow-md cursor-grab touch-none"
      ref={setNodeRef}
    >
      {icon} {title}
    </div>
  );
};

export default Task;
