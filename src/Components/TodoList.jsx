import { useContext } from "react";
import { TodoContext } from "../Contexts";

const TodoList = () => {
  const { todos, dispatchTodos } = useContext(TodoContext);

  function handleChange(id) {
    dispatchTodos({
      type: "CHANGE_TODO",
      id,
    });
  }

  function handleClick(id) {
    dispatchTodos({
      type: "DELETE_TODO",
      id,
    });
  }

  return (
    <ul>
      {todos.map((item) => {
        return (
          <li
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
            }}
            key={item.id}
          >
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => handleChange(item.id)}
            />
            <p> {item.todoText}</p>
            <button onClick={() => handleClick(item.id)}>delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
