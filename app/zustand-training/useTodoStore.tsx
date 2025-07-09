import { create } from "zustand";

type TodoType = { id: number; text: string; completed: boolean; };

interface TodoState {
  todos: TodoType[];
  addTodo: (todo: TodoType) => void;
  removeTodo: (id: number) => void;
}

const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  addTodo: (todo: TodoType) => set((state) => ({ todos: [...state.todos, todo] })),
  removeTodo: (id: number) => set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
}));

export default useTodoStore;