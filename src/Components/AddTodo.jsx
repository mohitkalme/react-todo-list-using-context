//hooks
import { useContext, useState } from "react";
//contexts
import { TodoContext } from "../Contexts";

const AddTodo = () => {
  const [text, setText] = useState("");
  const { dispatchTodos } = useContext(TodoContext);

  function handleSubmit(e) {
    e.preventDefault();
    dispatchTodos({
      type: "ADD_TODO",
      todoText: text,
    });
    setText("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Add Todo
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default AddTodo;
