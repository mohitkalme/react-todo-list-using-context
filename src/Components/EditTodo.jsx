//hooks
import { useContext, useEffect, useRef, useState } from "react";
//contexts
import { TodoContext } from "../Contexts";

const EditTodo = ({ id, setShowEditComp }) => {
  const { dispatchTodos } = useContext(TodoContext);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const [text, setText] = useState("");
  function handleSubmit(e) {
    e.preventDefault();

    dispatchTodos({
      type: "EDIT_TODO",
      id,
      todoText: text,
    });

    setShowEditComp(false);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          ref={inputRef}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default EditTodo;
