//hooks
import { useContext } from "react";
//contexts
import { TodoContext } from "../Contexts";

const FilterList = () => {
  const { dispatchFilter } = useContext(TodoContext);
  return (
    <div>
      <button
        onClick={() =>
          dispatchFilter({
            type: "SHOW_ALL",
          })
        }
      >
        All
      </button>
      <button
        onClick={() =>
          dispatchFilter({
            type: "SHOW_ACTIVE",
          })
        }
      >
        Active
      </button>
      <button
        onClick={() =>
          dispatchFilter({
            type: "SHOW_COMPLETED",
          })
        }
      >
        Completed
      </button>
    </div>
  );
};

export default FilterList;
