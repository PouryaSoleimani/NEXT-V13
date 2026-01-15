"use client";
import React from "react";
import { Check, ClipboardPlus } from "lucide-react";

import Todo from "./Todo";

import useTodoStore from "@/app/zustand-training/useTodoStore";

const TodoList = () => {
  const { todos } = useTodoStore();

  return (
    <div className='my-5'>
      <ul className='overflow-scroll h-full grid grid-cols-4 gap-2.5'>
        {todos.length ? (
          todos.map((todo) => (
            <Todo
              key={todo.id}
              {...todo}
            />
          ))
        ) : (
          <p className='bg-zinc-800/50 h-48 font-bold rounded-lg text-2xl border border-zinc-900 flex flex-col items-center-safe justify-center gap-y-5'>
            <Check
              color='#ffffff'
              className='size-10 bg-black rounded p-1'
            />
            ALL TASKS DONE
          </p>
        )}
      </ul>
    </div>
  );
};

export default TodoList;
