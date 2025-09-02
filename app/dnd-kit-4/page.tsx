"use client";
import {
  closestCenter,
  closestCorners,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import React, { useState } from "react";
import Column from "./_components/Column";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { Metadata } from "next";

const DndKit4Page = () => {
  //TASKS
  const [tasks, setTasks] = useState([
    { id: 1, title: "LEARN JS", icon: "🟨" },
    { id: 2, title: "LEARN TS", icon: "🟦" },
    { id: 3, title: "LEARN REACT", icon: "🟦" },
    { id: 4, title: "LEARN NEXT", icon: "⬛" },
    { id: 5, title: "LEARN NEST", icon: "🟥" },
    { id: 6, title: "LEARN PRISMA", icon: "🟩" },
  ]);

  // GET ROW POSITION
  function getRowPosition(id: number) {
    return tasks.findIndex((item) => item.id === id);
  }

  // HANDLE DRAGEND
  function handleDragEnd(event: any) {
    const { active, over } = event;
    if (active.id === over.id) return;

    const originalPos = getRowPosition(active.id);
    const newPos = getRowPosition(over.id);

    setTasks((tasks: { id: number; title: string; icon: string }[]) => {
      return arrayMove(tasks, originalPos, newPos);
    });
  }

  // SENSORS
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
    useSensor(TouchSensor)
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      modifiers={[restrictToVerticalAxis]}
      onDragEnd={handleDragEnd}
    >
      <div className="screen center flex-col bg-stone-400">
        <Column tasks={tasks} />
      </div>
    </DndContext>
  );
};

export default DndKit4Page;


