"use client";
import { Check } from "lucide-react";

import Todo from "./Todo";

import useTodoStore from "@/app/zustand-training/useTodoStore";
import { cn } from "@/lib/utils";

const TodoList = () => {
  const { todos } = useTodoStore();

  return (
    <div className='my-5'>
      <div
        className={cn(
          "w-full h-full grid gap-2.5",
          todos.length && "grid grid-cols-4"
        )}>
        {todos.length ? (
          todos.map((todo) => (
            <Todo
              key={todo.id}
              {...todo}
            />
          ))
        ) : (
          <p className=' w-full h-32 font-bold rounded-lg text-xl flex flex-col items-center mt-10 gap-y-2'>
            <Check
              color='#ffffff'
              className='size-8 bg-emerald-900/50  rounded-full p-1'
            />
            ALL TASKS DONE
          </p>
        )}
      </div>
    </div>
  );
};

export default TodoList;
