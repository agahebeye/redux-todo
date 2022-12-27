import { useSelector, useDispatch } from "react-redux";

import { availableColors } from "./filters/colors";
import { statusTypes } from "./filters/filtersReducer";

export function Footer() {
  const dispatch = useDispatch();

  const todosRemaining = useSelector((state) => {
    return state.todos.filter((todo) => !todo.completed).length;
  });

  const { colors } = useSelector((state) => state.filters);

  return (
    <footer>
      <div>
        <button onClick={() => dispatch({ type: "todos/markAllCompleted" })}>
          Mark All Completed
        </button>
        <button onClick={() => dispatch({ type: "todos/clearCompleted" })}>
          Clear Completed
        </button>
      </div>

      <div>
        <strong>{todosRemaining}</strong> item(s) left
      </div>

      <div>
        <h5>Filter by status</h5>
        <ul>
          {Object.keys(statusTypes).map((key) => {
            const value = statusTypes[key];
            return (
              <li
                key={value}
                onClick={() =>
                  dispatch({ type: "filters/statusChanged", payload: value })
                }
              >
                {key}
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <h5>Filter by Color</h5>
        <form>
          {availableColors.map((color) => {
            const checked = colors.includes(color);
            return (
              <label key={color}>
                <input
                  type="checkbox"
                  name={color}
                  onChange={() =>
                    dispatch({
                      type: "filters/colorChanged",
                      payload: {
                        color,
                        changedType: checked ? "removed" : "added",
                      },
                    })
                  }
                />
                {color}
              </label>
            );
          })}
        </form>
      </div>
    </footer>
  );
}
