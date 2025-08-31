import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";

const Task = ({ id, title, icon }: { id: number; title: string; icon: string }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      className="text-black bg-white my-2 p-3 rounded-md shadow-sm shadow-stone-400 hover:shadow-md cursor-pointer hover:cursor-grab"
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      {icon} {title}
    </div>
  );
};

export default Task;
