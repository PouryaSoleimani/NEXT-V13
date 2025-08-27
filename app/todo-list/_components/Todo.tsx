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
    <Button
      variant={"ghost"}
      onClick={() => toggleCompleted(id)}
      className={`flex items-center justify-between p-2 border-b border-b-zinc-600 bg-black rounded-lg pl-3 my-3 text-xl font-black ${completed == true ? "line-through opacity-50" : "text-white"}`}
    >
      <span className="text-white">{text}</span>
      <button
        className="bg-red-900 text-white p-3 rounded hover:bg-red-800"
        onClick={() => {
          removeTodo(id);
          toast.error("Todo removed!");
        }}
      >
        <BiTrash className="w-6 h-6" />
      </button>
    </Button>
  );
};

export default Todo;
