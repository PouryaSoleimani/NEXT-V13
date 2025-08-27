"use client";
import { useState } from "react";
import { DndContext, DragEndEvent, closestCenter, useDroppable } from "@dnd-kit/core";
import { SortableContext, useSortable, arrayMove } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

//^ STYLES
const itemStyle: React.CSSProperties = {
  padding: "16px",
  margin: "8px",
  background: "black",
  cursor: "grab",
  fontSize: "22px",
  borderRadius: "15px",
  fontWeight: "900",
  width: "300px",
  height: "100px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "3px solid white",
};

const doneItemStyle: React.CSSProperties = {
  padding: "16px",
  margin: "8px",
  background: "darkgreen",
  fontFamily: "Vazir",
  borderRadius: "15px",
  width: "300px",
  height: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  fontWeight: "bold",
  fontSize: "20px",
};

const droppableBase: React.CSSProperties = {
  padding: "16px",
  margin: "8px",
  borderRadius: "15px",
  width: "450px",
  height: "350px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  border: "3px solid white",
  background: "black",
  transition: "background 0.2s",
  overflowY: "auto",
};

//^ SORTABLES
const SortableItem = ({ id }: { id: string }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    ...itemStyle,
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {id}
    </div>
  );
};

//^ DROPPABLE
const DroppableArea = ({ id, children }: { id: string; children: React.ReactNode }) => {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      style={{
        ...droppableBase,
        background: isOver ? "#1a3d1a" : droppableBase.background,
      }}
    >
      {children}
    </div>
  );
};

//^ MAIN PAGE
export default function DndKitPage() {
  const [items, setItems] = useState(["1", "2", "3"]);
  const [doneItems, setDoneItems] = useState<string[]>([]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    if (over.id === "done-area") {
      // انتقال به لیست done
      setItems((prev) => prev.filter((item) => item !== active.id));
      setDoneItems((prev) => [...prev, active.id as string]);
    } else if (items.includes(over.id as string)) {
      // تغییر ترتیب در لیست اصلی
      const oldIndex = items.indexOf(active.id as string);
      const newIndex = items.indexOf(over.id as string);
      setItems(arrayMove(items, oldIndex, newIndex));
    }
  };

  return (
    <div style={{ padding: "24px", color: "white" }}>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <div style={{ display: "flex", gap: "32px" }}>
          {/* لیست اصلی */}
          <div>
            <SortableContext items={items}>
              {items.map((id) => (
                <SortableItem key={id} id={id} />
              ))}
            </SortableContext>
          </div>

          {/* ناحیه انجام شده */}
          <div>
            <DroppableArea id="done-area">
              <SortableContext items={doneItems}>
                {doneItems.map((id) => (
                  <div key={id} style={doneItemStyle}>
                    {id}
                  </div>
                ))}
              </SortableContext>
            </DroppableArea>
          </div>
        </div>
      </DndContext>
    </div>
  );
}
