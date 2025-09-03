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
      { id: 4, title: "LEARN___REACT___LIBRARIES" },
      { id: 5, title: "LEARN___NEXT" },
   ]);

   const [tasks2, setTasks2] = useState([
      { id: 6, title: "LEARN__NODE__JS" },
      { id: 7, title: "LEARN___MONGO___DB" },
      { id: 8, title: "LEARN___NEST___JS" },
      { id: 9, title: "LEARN___PRISMA" },
   ]);

   const sensors = useSensors(
      useSensor(PointerSensor),
      useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
      useSensor(TouchSensor)
   );

   function getRowPosition(id: number) {
      return tasks.findIndex((item: SingleTaskType) => item.id === id);
   }

   function getRowPosition2(id: number) {
      return tasks2.findIndex((item: SingleTaskType) => item.id === id);
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

   function handleDragEnd2(event: any) {
      const { active, over } = event;
      if (active.id === over.id) return;
      const originalPos = getRowPosition2(active.id);
      const newPos = getRowPosition2(over.id);

      setTasks2((tasks2: SingleTaskType[]) => {
         return arrayMove(tasks2, originalPos, newPos);
      });
   }

   return (
      <div className="screen center bg-stone-600">
         <DndContext sensors={sensors} collisionDetection={closestCenter} modifiers={[restrictToVerticalAxis]} onDragEnd={handleDragEnd}>
            <Column tasks={tasks} />
         </DndContext>

         <DndContext sensors={sensors} collisionDetection={closestCenter} modifiers={[restrictToVerticalAxis]} onDragEnd={handleDragEnd2}>
            <Column tasks={tasks2} />
         </DndContext>
      </div>
   );
};

export default DndKitPage5;
