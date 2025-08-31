"use client";
import React, { useState } from "react";
import { closestCenter, closestCorners, DndContext, KeyboardSensor, PointerSensor, TouchSensor, useSensor, useSensors, } from "@dnd-kit/core";
import Column from "./_components/Column";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import CustomInput from "./_components/Input";
import Logger from "@/hooks/Logger";

function DndKit2Page() {

  const [tasks, setTasks] = useState([
    { id: 1, title: "Go to Gym" },
    { id: 2, title: "Shopping Grocceries" },
    { id: 3, title: "Study" },
  ]);

  const getTaskPosition = (id: any) => tasks.findIndex((task) => task.id === id);

  function addTask(title: string) {
    setTasks(tasks => [...tasks, { id: tasks.length + 1, title }])
  }


  function handleDragEnd(event: any) {
    const { active, over } = event;
    if (active.id === over.id) return;
    const originalPos = getTaskPosition(active.id);
    const newPos = getTaskPosition(over.id);
    setTasks((tasks: { id: number; title: string }[]) => {
      return arrayMove(tasks, originalPos, newPos);
    });
    Logger('POSITION', 'info', newPos + 1)
    Logger('ID', 'log', active.id)
  }

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <div className="screen flex-col gap-3  center p-3 bg-neutral-800">
      <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
        <CustomInput onSubmit={addTask} />
        <Column tasks={tasks} />
      </DndContext>
    </div>
  );
}

export default DndKit2Page;
