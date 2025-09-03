import React from "react";
type ColumnPropsType = { tasks: { id: number; title: string }[] };

const Column: React.FC<ColumnPropsType> = ({ tasks }) => {
   return (
      <div className="bg-stone-300 w-1/4 p-5 flex flex-col gap-2 rounded-lg shadow-sm shadow-stone-300">
         {tasks.map((task: any) => (
            <p className="bg-white text-black p-3 rounded-lg shadow-sm shadow-stone-300" key={task.id}>
               {task.title}
            </p>
         ))}
      </div>
   );
};

export default Column;
