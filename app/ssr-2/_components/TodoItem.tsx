import { SingleTodoItem } from "./TodosWrapper";


const TodoItem = ({ todoItem }: { todoItem: SingleTodoItem }) => {
  return (
    <div className='flex hover:border-b-white transition-all duration-250 cursor-pointer items-center justify-between gap-2 py-2 border-b-2 border-b-stone-600 text-sm font-semibold bg-stone-900 my-2 rounded-sm px-2 grow'>
      <p>
        {todoItem.id} - {todoItem.title.slice(0, 30)}{" "}
      </p>
      <span className='border-l-2  pl-4 border-stone-700'>{todoItem.completed ? "✔" : "𐄂"} </span>
    </div>
  );
};

export default TodoItem;