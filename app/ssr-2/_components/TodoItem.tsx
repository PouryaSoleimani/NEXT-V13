import { SingleTodoItem } from "./TodosWrapper";


const TodoItem = ({ todoItem }: { todoItem: SingleTodoItem }) => {
  return (
    <div className="flex items-center gap-2 py-2 border-b-2 border-b-stone-600 text-sm font-semibold">
      <p>
        {todoItem.id} - {todoItem.title.slice(0,30)}{" "}
      </p>
      <span className="border-l-2 pl-3">{todoItem.completed ? "Done" : "Todo"} </span>
    </div>
  );
};

export default TodoItem;