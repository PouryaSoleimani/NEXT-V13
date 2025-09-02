import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";

const Task = ({ id, title }: { id: number; title: string }) => {
  // USE SORTABLE
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  // STYLE
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      {...attributes}
      {...listeners}
      style={style}
      className="text-black group flex items-center justify-between bg-white my-2 p-3 rounded-md hover:shadow-md cursor-grab touch-none"
      ref={setNodeRef}
    >
      {title}
    </div>
  );
};

export default Task;
