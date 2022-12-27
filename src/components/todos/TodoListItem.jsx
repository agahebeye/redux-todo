import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { availableColors } from "../filters/colors";

export function TodoListItem(props) {
  const dispatch = useDispatch();

  const todo = useSelector((state) => {
    return state.todos.find((todo) => todo.id === props.id);
  });

  return (
    <li>
      <div>
        <div>
          <input
            id="done"
            type="checkbox"
            checked={todo.done}
            onChange={() =>
              dispatch({ type: "todos/toggled", payload: todo.id })
            }
          />
          <label htmlFor="done">{todo.text}</label>
        </div>

        <div>
          <select
            value={todo.color}
            onChange={(e) =>
              dispatch({
                type: "todos/colorSelected",
                payload: { todoId: todo.id, color: e.target.value },
              })
            }
          >
            <option value=""></option>
            {availableColors.map((color) => (
              <option key={color}>{color}</option>
            ))}
          </select>
          <button
            className="destroy"
            onClick={() =>
              dispatch({ type: "todos/deleted", payload: todo.id })
            }
          >
            delete
          </button>
        </div>
      </div>
    </li>
  );
}
