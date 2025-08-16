'use client';
import { useState } from 'react';
import { DndContext, DragEndEvent, closestCenter, useDroppable } from '@dnd-kit/core';
import { SortableContext, useSortable, arrayMove } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

//^ SORTABLES || DRAGGABLES
const SortableItem = ({ id }: { id: string }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = { transform: CSS.Transform.toString(transform), transition, padding: '16px', margin: '8px', background: 'black', cursor: 'grab', fontSize: '22px', borderRadius: '15px', fontWeight: '900', width: '300px', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '3px solid white', };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {id}
    </div>
  );
};

//^ DROPPABLES
const DroppableArea = ({ id, children }: { id: string; children: React.ReactNode }) => {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <div ref={setNodeRef} style={{ padding: '16px', margin: '8px', background: 'black', cursor: 'grab', fontSize: '22px', borderRadius: '15px', fontWeight: '900', width: '450px', height: '350px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '3px solid white', }} >
      {children}
    </div>
  );
};

//^ MAIN PAGE
export default function DndKitPage() {
  const [items, setItems] = useState(['1', '2', '3']);
  const [doneItems, setDoneItems] = useState<string[]>([]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    if (over.id === 'done-area') {
      // انتقال به لیست done
      setItems((prev) => prev.filter((item) => item !== active.id));
      setDoneItems((prev) => [...prev, active.id as string]);
    } else if (active.id !== over.id) {
      // تغییر ترتیب در لیست اصلی
      const oldIndex = items.indexOf(active.id as string);
      const newIndex = items.indexOf(over.id as string);
      setItems(arrayMove(items, oldIndex, newIndex));
    }
  };

  return (
    <div style={{ padding: '24px' }}>
      <h1>درگ اند دراپ ساده</h1>

      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <div style={{ display: 'flex', gap: '32px' }}>
          {/* لیست اصلی */}
          <div>
            <h2>لیست کارها</h2>
            <SortableContext items={items}>
              {items.map((id) => (
                <SortableItem key={id} id={id} />
              ))}
            </SortableContext>
          </div>

          {/* ناحیه انجام شده */}
          <div>
            <h2>انجام شده</h2>
            <DroppableArea id="done-area">
              {doneItems.map((id) => (
                <div key={id} style={{ padding: '16px', margin: '8px', background: 'darkgreen', fontFamily: 'Vazir', borderRadius: '4px', width: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', }} >
                  {id}
                </div>
              ))}
            </DroppableArea>
          </div>
        </div>
      </DndContext>
    </div>
  );
}
