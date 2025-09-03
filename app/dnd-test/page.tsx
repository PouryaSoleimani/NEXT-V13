//^ DND__TEST__PAGE
"use client";
import React, { CSSProperties, useState } from "react";
import { ColumnDef, Row, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { makeData, Person } from "./_components/makedata";
import { GripHorizontal } from "lucide-react";
// DND-KIT
import {
   DndContext,
   KeyboardSensor,
   MouseSensor,
   TouchSensor,
   closestCenter,
   type DragEndEvent,
   type UniqueIdentifier,
   useSensor,
   useSensors,
} from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Logger from "@/hooks/Logger";

// Cell Component
const RowDragHandleCell = ({ rowId }: { rowId: string }) => {
   const { attributes, listeners } = useSortable({ id: rowId });
   return (
      <button {...attributes} {...listeners}>
         <GripHorizontal />
      </button>
   );
};

// Row Component
const DraggableRow = ({ row }: { row: Row<Person> }) => {
   const { transform, transition, setNodeRef, isDragging } = useSortable({ id: row.original.userId });

   const style: CSSProperties = {
      transform: CSS.Transform.toString(transform),
      transition: transition,
      opacity: isDragging ? 0.8 : 1,
      zIndex: isDragging ? 1 : 0,
      position: "relative",
   };

   return (
      <tr ref={setNodeRef} style={style} className="bg-stone-500">
         {row.getVisibleCells().map((cell) => (
            <td key={cell.id} style={{ width: cell.column.getSize() }}>
               {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
         ))}
      </tr>
   );
};

// Table Component
export default function DndTestPage() {
   const columns = React.useMemo<ColumnDef<Person>[]>(
      () => [
         {
            id: "drag-handle",
            header: "ترتیب",
            cell: ({ row }) => <RowDragHandleCell rowId={row.id} />,
            size: 60,
         },
         {
            accessorKey: "firstName",
            cell: (info) => info.getValue(),
         },
         {
            accessorFn: (row) => row.lastName,
            id: "lastName",
            cell: (info) => info.getValue(),
            header: () => <span>Last Name</span>,
         },
         {
            accessorKey: "age",
            header: () => "Age",
         },
         {
            accessorKey: "visits",
            header: () => <span>Visits</span>,
         },
         {
            accessorKey: "status",
            header: "Status",
         },
         {
            accessorKey: "progress",
            header: "Profile Progress",
         },
      ],
      []
   );

   const [data, setData] = React.useState(() => makeData(20));

   const dataIds = React.useMemo<UniqueIdentifier[]>(() => data?.map(({ userId }) => userId), [data]);

   const rerender = () => setData(() => makeData(20));

   const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getRowId: (row) => row.userId,
      debugTable: true,
      debugHeaders: true,
      debugColumns: true,
   });

   // reorder rows after drag & drop
   function handleDragEnd(event: DragEndEvent) {
      const { active, over } = event;
      if (active && over && active.id !== over.id) {
         setData((data) => {
            const oldIndex = dataIds.indexOf(active.id);
            const newIndex = dataIds.indexOf(over.id);
            Logger("OLD", "pink", oldIndex);
            Logger("NEW", "yellow", newIndex);

            return arrayMove(data, oldIndex, newIndex);
         });
      }
   }

   const sensors = useSensors(useSensor(MouseSensor, {}), useSensor(TouchSensor, {}), useSensor(KeyboardSensor, {}));

   return (
      <DndContext collisionDetection={closestCenter} modifiers={[restrictToVerticalAxis]} onDragEnd={handleDragEnd} sensors={sensors}>
         <div className="p-2 bg-stone-500 text-black *:text-black">
            <div className="h-4" />
            <div className="flex flex-wrap gap-2">
               <button onClick={() => rerender()} className="border p-1">
                  Regenerate
               </button>
            </div>
            <div className="h-4" />
            <table>
               <thead>
                  {table?.getHeaderGroups().map((headerGroup) => (
                     <tr key={headerGroup.id} className="bg-stone-600">
                        {headerGroup.headers.map((header) => (
                           <th key={header.id} colSpan={header.colSpan}>
                              {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                           </th>
                        ))}
                     </tr>
                  ))}
               </thead>
               <tbody>
                  <SortableContext items={dataIds} strategy={verticalListSortingStrategy}>
                     {table.getRowModel().rows.map((row) => (
                        <DraggableRow key={row.id} row={row} />
                     ))}
                  </SortableContext>
               </tbody>
            </table>
            <pre>{JSON.stringify(data, null, 2)}</pre>
         </div>
      </DndContext>
   );
}
