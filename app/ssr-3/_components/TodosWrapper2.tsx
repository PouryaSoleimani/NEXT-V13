type SingleTodoItem = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

const TodosWrapper2 = ({ data }: { data: SingleTodoItem[] }) => {
  return (
    <div className='border border-stone-800 p-12 rounded-md my-16 bg-black'>
      {Array.isArray(data) &&
        data.slice(0, 10).map((todo: SingleTodoItem) => (
          <div
            key={todo.id}
            className='border-b-2 border-2 border-stone-900 rounded-md shadow-inner shadow-stone-600/30 cursor-pointer border-b-stone-800 bg-stone-950 hover:border-b-stone-200 transition-all duration-250 p-1.5 my-1'>
            {todo.id} - {todo.title.slice(0, 30)} |{" "}
            {todo.completed ? "DONE" : "TODO"}
          </div>
        ))}
    </div>
  );
};

export default TodosWrapper2;
