"use client";
import {
  closestCenter,
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

const DndKit4Page = () => {
  //TASKS
  const [tasks, setTasks] = useState([
    { id: 1, title: "LEARN JS" },
    { id: 2, title: "LEARN TS" },
    { id: 3, title: "LEARN REACT" },
    { id: 4, title: "LEARN NEXT" },
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

    setTasks((tasks: { id: number; title: string }[]) => {
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
      collisionDetection={closestCenter}
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
