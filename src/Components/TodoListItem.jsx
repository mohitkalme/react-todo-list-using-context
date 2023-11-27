//hooks
import { useContext, useState } from "react";
//contexts
import { TodoContext } from "../Contexts";
//components
import EditTodo from "./EditTodo";

export default function TodoListItem({ item }) {
  const { dispatchTodos } = useContext(TodoContext);
  const [showEditComp, setShowEditComp] = useState(false);

  const handleChange = (id) => {
    dispatchTodos({
      type: "CHANGE_TODO",
      id,
    });
  };

  const handleDeleteClick = (id) => {
    dispatchTodos({
      type: "DELETE_TODO",
      id,
    });
  };
  return (
    <>
      {showEditComp ? (
        <EditTodo id={item.id} setShowEditComp={setShowEditComp} />
      ) : (
        <li
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
          }}
          key={item.id}
        >
          <label>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => handleChange(item.id)}
            />
            {item.todoText}
          </label>

          <button onClick={() => setShowEditComp(true)}>Edit</button>
          <button onClick={() => handleDeleteClick(item.id)}>delete</button>
        </li>
      )}
    </>
  );
}
