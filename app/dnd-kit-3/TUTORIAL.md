1 - install
2 - <DndContext sensors={sensors} collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
3 - const [tasks, setTasks] = useState([---]}
4 - <ColumnComponent tasks={tasks} />
5 - <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
6 - <Task key={item.id} id={item.id} title={item.title} icon={item.icon} />
7 - const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
8 - <div className="text-black group flex items-center justify-between bg-white my-2 p-3 rounded-md shadow-sm shadow-stone-400 hover:shadow-md cursor-pointer hover:cursor-grab touch-none"  ref={setNodeRef}  >
9 - {...attributes}
10 - {...listeners}
11 - style={style}
12 - const style = { transition, transform: CSS.Transform.toString(transform), };
13 - function getTaskPosition(id: any) { return tasks.findIndex((task) => task.id === id); }
14 - function addTask(title: string) { setTasks((tasks) => [...tasks, { id: tasks.length + 1, title, icon: "⬜" }]); }
15 - function handleDragEnd(event: any) {
const { active, over } = event;
if (active.id === over.id) return;
const originalPos = getTaskPosition(active.id);
const newPos = getTaskPosition(over.id);
setTasks((tasks: { id: number; title: string; icon: string }[]) => {
return arrayMove(tasks, originalPos, newPos);
});
Logger("POSITION", "info", newPos + 1);
Logger("ID", "log", active.id);
}
16 - sensors={sensors}
17 - <CustomInput onSubmit={addTask} />
