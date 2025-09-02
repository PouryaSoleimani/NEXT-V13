import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";

const Task = ({ id, title }: { id: number; title: string }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const style = {
    transition: transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div {...attributes} {...listeners} style={style} className="bg-white text-black">
      {title}
    </div>
  );
};

export default Task;
