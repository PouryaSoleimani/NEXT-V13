import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { DraftingCompass, GripVertical } from "lucide-react";
import React from "react";

const Task = ({
  id,
  title,
  icon,
}: {
  id: number;
  title: string;
  icon: string;
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = { transition, transform: CSS.Transform.toString(transform) };

  return (
    <div
      className='text-black group flex items-center justify-between bg-white my-2 p-3 rounded-md shadow-sm shadow-stone-400 hover:shadow-md cursor-n-resize touch-none'
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}>
      <span>
        {icon} {title}
      </span>
      <GripVertical className='hidden group-hover:block transition-all duration-200' />
    </div>
  );
};

export default Task;
