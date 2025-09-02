import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import React from "react";
import Task from "./Task";

const Column = ({ tasks }: { tasks: any }) => {
  return (
    <div className="bg-stone-700 w-120 p-4 rounded-md border-2 border-black shadow-sm shadow-black">
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks.map((item: { id: number; title: string }) => (
          <Task {...item} />
        ))}
      </SortableContext>
    </div>
  );
};

export default Column;
