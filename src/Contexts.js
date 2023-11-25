import { nanoid } from "nanoid";
import { createContext } from "react";

export const TodoContext = createContext({
  id: nanoid(),
  todoText: "",
  completed: false,
});
