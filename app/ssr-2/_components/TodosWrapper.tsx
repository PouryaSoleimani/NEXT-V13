import TodoItem from "./TodoItem";

export type SingleTodoItem = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const TodosWrapper = ({ list }: { list: SingleTodoItem[] }) => {
  return (
    <div className='border bg-stone-950 p-5 rounded-xl border-stone-700 '>
      {Array.isArray(list) &&
        list.map((item: SingleTodoItem) => (
          <TodoItem
            key={item.id}
            todoItem={item}
          />
        ))}
    </div>
  );
};

export default TodosWrapper;
