"use client";
import {
  closestCorners,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import React, { useState } from "react";
import ColumnComponent from "./_components/Column";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import Logger from "@/hooks/Logger";
import CustomInput from "../dnd-kit-2/_components/Input";

const DndKit3Page = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "LEARN JS", icon: "🟨" },
    { id: 2, title: "LEARN TS", icon: "🟦" },
    { id: 3, title: "LEARN REACT", icon: "🟦" },
    { id: 4, title: "LEARN NEXT", icon: "⬛" },
    { id: 5, title: "LEARN NODE", icon: "🟩" },
    { id: 6, title: "LEARN NEST", icon: "🟥" },
  ]);

  function getTaskPosition(id: any) {
    return tasks.findIndex((task) => task.id === id);
  }

  function addTask(title: string) {
    setTasks((tasks) => [...tasks, { id: tasks.length + 1, title, icon: "⬜" }]);
  }

  function handleDragEnd(event: any) {
    const { active, over } = event;

    if (active.id === over.id) return;

    const originalPos = getTaskPosition(active.id);
    const newPos = getTaskPosition(over.id);

    setTasks((tasks: { id: number; title: string; icon: string }[]) => {
      return arrayMove(tasks, originalPos, newPos);
    });

    Logger("POSITION", "info", newPos + 1);
    Logger("ID", "log", active.id);
  }

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  return (
    <DndContext sensors={sensors} collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
      <div className="flex flex-col gap-3 items-center justify-start pt-[10%] screen">
        <h2 className="text-2xl font-black bg-white text-black w-[320px] p-4 rounded-md text-center">
          TODOS
        </h2>
        <CustomInput onSubmit={addTask} />
        <ColumnComponent tasks={tasks} />
      </div>
    </DndContext>
  );
};

export default DndKit3Page;
