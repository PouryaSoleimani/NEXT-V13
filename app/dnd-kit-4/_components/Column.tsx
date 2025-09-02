import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import React from "react";
import Task from "./Task";

const Column = ({ tasks }: { tasks: any }) => {
  return (
    <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
      {tasks.map((item: { id: number; title: string }) => (
        <Task {...item} />
      ))}
    </SortableContext>
  );
};

export default Column;
