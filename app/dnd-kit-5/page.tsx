"use client";
import { closestCenter, DndContext, KeyboardSensor, PointerSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import React, { useState } from "react";
import Column from "./_components/Column";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
type SingleTaskType = { id: number; title: string };
const DndKitPage5 = () => {
   const [tasks, setTasks] = useState([
      { id: 1, title: "LEARN__JS" },
      { id: 2, title: "LEARN___TS" },
      { id: 3, title: "LEARN___REACT" },
      { id: 4, title: "LEARN___NEXT" },
      { id: 5, title: "LEARN___NEST" },
   ]);

   const sensors = useSensors(
      useSensor(PointerSensor),
      useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
      useSensor(TouchSensor)
   );

   function getRowPosition(id: number) {
      return tasks.findIndex((item: SingleTaskType) => item.id === id);
   }

   function handleDragEnd(event: any) {
      const { active, over } = event;
      if (active.id === over.id) return;
      const originalPos = getRowPosition(active.id);
      const newPos = getRowPosition(over.id);

      setTasks((tasks: SingleTaskType[]) => {
         return arrayMove(tasks, originalPos, newPos);
      });
   }
   return (
      <div className="screen center bg-stone-600">
         <DndContext sensors={sensors} collisionDetection={closestCenter} modifiers={[restrictToVerticalAxis]} onDragEnd={handleDragEnd}>
            <Column tasks={tasks} />
         </DndContext>
      </div>
   );
};

export default DndKitPage5;
