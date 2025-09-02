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
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";

const DndKit4Page = () => {
  //TASKS
  const [tasks, setTasks] = useState([
    { id: 1, title: "LEARN JS" },
    { id: 2, title: "LEARN TS" },
    { id: 3, title: "LEARN REACT" },
    { id: 4, title: "LEARN NEXT" },
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
    useSensor(TouchSensor)
  );

  return (
    <div className="screen center flex-col">
      <DndContext sensors={sensors} collisionDetection={closestCenter}>
        <Column tasks={tasks} />
      </DndContext>
    </div>
  );
};

export default DndKit4Page;
