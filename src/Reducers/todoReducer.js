import { nanoid } from "nanoid";

export default function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: nanoid(),
          todoText: action.todoText,
          completed: false,
        },
      ];

    case "CHANGE_TODO":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });

    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.id);

    case "EDIT_TODO":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            todoText: action.todoText,
          };
        }
        return todo;
      });
    default:
      throw new Error(`TodoReducer case with ${action.type} is not defined `);
  }
}
