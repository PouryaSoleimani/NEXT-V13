"use client";
import { closestCenter, DndContext, KeyboardSensor, PointerSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import React, { useState } from "react";
import Column from "./_components/Column";

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

   return (
      <div className="screen center">
         <DndContext sensors={sensors} collisionDetection={closestCenter}>
            <Column tasks={tasks} />
         </DndContext>
      </div>
   );
};

export default DndKitPage5;
