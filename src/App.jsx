//package.json libraries
import { nanoid } from "nanoid";
//css
import "./App.css";
//contexts
import { TodoContext } from "./Contexts";
//hooks
import { useReducer } from "react";
//reducers
import todoReducer from "./Reducers/todoReducer";
//components
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";
import filterReducer from "./Reducers/filterReducer";
import FilterList from "./Components/FilterList";

const initialTodos = [
  {
    id: nanoid(),
    todoText: "grocery",
    completed: false,
  },
  {
    id: nanoid(),
    todoText: "jogging",
    completed: false,
  },
  {
    id: nanoid(),
    todoText: "Read books",
    completed: false,
  },
];

const FILTER_MAP = {
  All: () => true,
  Active: (todo) => !todo.completed,
  Completed: (todo) => todo.completed,
};

function App() {
  const [todos, dispatchTodos] = useReducer(todoReducer, initialTodos);
  const [filter, dispatchFilter] = useReducer(filterReducer, "All");

  const filteredList = todos.filter(FILTER_MAP[filter]);

  const value = {
    dispatchTodos,
    dispatchFilter,
    todos: filteredList,
  };

  return (
    <TodoContext.Provider value={value}>
      <div className="card">
        <FilterList />
        <TodoList />
        <AddTodo />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
