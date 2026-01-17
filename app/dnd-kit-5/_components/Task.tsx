import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React, { CSSProperties } from "react";

type TaskPropsType = { id: number; title: string };

const Task: React.FC<TaskPropsType> = ({ id, title }) => {
  const {
    listeners,
    attributes,
    setNodeRef,
    transform,
    transition,
    isDragging,
    isOver,
    active,
  } = useSortable({ id: id });

  const style: CSSProperties = {
    transition,
    transform: CSS.Transform.toString(transform),
    backgroundColor: isDragging ? "#404040" : "",
    position: isDragging ? "relative" : "static",
    zIndex: isDragging ? 50 : 0,
    cursor: isDragging ? "grabbing" : active ? "grabbing" : "grab",
  };
  return (
    <div
      {...attributes}
      {...listeners}
      style={style}
      ref={setNodeRef}
      className='bg-neutral-900 p-3 font-sans rounded-md font-black'>
      {id}. {title}
    </div>
  );
};

export default Task;
