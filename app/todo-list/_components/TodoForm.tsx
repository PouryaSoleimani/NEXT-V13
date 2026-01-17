"use client";
import React from "react";
import { toast } from "react-hot-toast";

import useTodoStore from "@/app/zustand-training/useTodoStore";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  CircleCheck,
  CircleCheckBig,
  PlusCircleIcon,
  Trash2Icon,
} from "lucide-react";

const TodoForm = () => {
  const {
    todos,
    addTodo,
    removeAllTodos,
    makeRandomTodo,
    toggleAllTodosComplete,
  } = useTodoStore();
  const [inputValue, setInputValue] = React.useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    addTodo({ id: todos.length + 1, text: inputValue, completed: false });
    toast.success("Todo added!");
    setInputValue("");
    console.log("TODOS FROM ZUSTAND ==>", todos);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='flex items-center justify-center gap-3 w-full'>
        <Input
          placeholder='Add Todo'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className='py-6 rounded-lg w-5/6 outline-none font-bold border-2 border-zinc-900 bg-black text-white'
        />
        <Button
          type='submit'
          size={"lg"}
          className='text-xl p-6 px-10 w-1/6 font-semibold bg-zinc-950 hover:bg-black hover:border'>
          Add
        </Button>
      </form>
      <div className='flex flex-col xl:grid xl:grid-cols-3 gap-3 items-center'>
        <Button
          className='mt-4 w-full xl:basis-1/3 font-semibold text-xl text-md flex items-center border border-stone-600 inset-shadow-xs'
          variant={"destructive"}
          onClick={() => removeAllTodos()}>
          <Trash2Icon /> Delete All Todos
        </Button>
        <Button
          className='mt-4 w-full xl:basis-1/3 font-semibold text-xl text-md flex items-center border border-stone-600 inset-shadow-xs'
          variant={"black"}
          onClick={() => toggleAllTodosComplete()}>
          <CircleCheckBig /> Complete All Todos
        </Button>
        <Button
          className='mt-4 w-full xl:basis-1/3 font-semibold text-xl text-md flex items-center border border-stone-600 inset-shadow-xs'
          variant={"blue"}
          onClick={() => makeRandomTodo()}>
          <PlusCircleIcon /> Make a Random Todo
        </Button>
      </div>
    </>
  );
};

export default TodoForm;
