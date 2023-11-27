//hooks
import { useContext } from "react";
//contexts
import { TodoContext } from "../Contexts";
//components
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <ul>
      {todos.map((item) => (
        <TodoListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default TodoList;
