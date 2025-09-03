import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import React from "react";
import Task from "./Task";
type ColumnPropsType = { tasks: { id: number; title: string }[] };

const Column: React.FC<ColumnPropsType> = ({ tasks }) => {
   return (
      <div className="bg-stone-300 w-1/3 p-6 flex flex-col gap-2 rounded-lg shadow-sm shadow-stone-800">
         <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
            {tasks.map((task: any) => (
               <Task key={task?.id} {...task} />
            ))}
         </SortableContext>
      </div>
   );
};

export default Column;
