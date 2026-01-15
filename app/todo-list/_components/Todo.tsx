"use client";
import React from "react";
import { BiTrash } from "react-icons/bi";
import toast from "react-hot-toast";

import { TodoType } from "../types/Todos.types";

import useTodoStore from "@/app/zustand-training/useTodoStore";
import { Button } from "@/components/ui/button";

const Todo = ({ id, text, completed }: TodoType) => {
  const { removeTodo, toggleCompleted } = useTodoStore();

  return (
    <div
      onClick={() => toggleCompleted(id)}
      className={`bg-black flex items-center justify-between p-0 pl-3 my-3 ${completed == true ? "line-through opacity-50" : "text-white"}`}>
      <span className='text-white'>{text}</span>
      <Button
        className='bg-red-900 text-white p-2.5 rounded hover:bg-red-800 rounded-l-none '
        onClick={() => {
          removeTodo(id);
          toast.error("Todo removed!");
        }}>
        <BiTrash className='size-5' />
      </Button>
    </div>
  );
};

export default Todo;
