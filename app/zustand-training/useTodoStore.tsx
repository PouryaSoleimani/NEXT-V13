import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type TodoType = { id: number; text: string; completed: boolean; };

interface TodoState {
  todos: TodoType[];
  addTodo: (todo: TodoType) => void;
  removeTodo: (id: number) => void;
}

const useTodoStore = create<TodoState>()(persist((set) => ({
  todos: [],
  addTodo: (todo: TodoType) => set((state) => ({ todos: [...state.todos, todo] })),
  removeTodo: (id: number) => set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
}), { name: "todo-storage", storage: createJSONStorage(() => localStorage) }));

export default useTodoStore;