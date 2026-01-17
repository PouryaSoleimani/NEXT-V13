import React from "react";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Task from "./Task";

const Column = ({ tasks }: { tasks: any }) => {
  return (
    <div className='bg-stone-300 rounded-md p-3 border-2 border-stone-300 shadow-sm shadow-stone-600 w-[80%] max-w-[500px] flex flex-col gap-3'>
      <SortableContext
        items={tasks}
        strategy={verticalListSortingStrategy}>
        {tasks.map((item: any) => (
          <Task
            key={item.id}
            {...item}
          />
        ))}
      </SortableContext>
    </div>
  );
};

export default Column;
