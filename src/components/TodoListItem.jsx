import { useDispatch } from "react-redux";
import { XMarkIcon } from "@heroicons/react/24/solid";

import { initialColors } from "../data";

export function TodoListItem(props) {
  const dispatch = useDispatch();

  return (
    <li className="mt-4 flex items-center">
      <input
        type="checkbox"
        id="text"
        onChange={handleToggle}
        checked={props.todo.done}
      />

      <label htmlFor="text" className="mr-auto ml-2 first-letter:uppercase">
        {props.todo.text}
      </label>

      <ColorPicker color={props.todo.color} onColorPicked={handleColorPick} />

      <button
        onClick={() =>
          dispatch({ type: "todos/deleted", payload: props.todo.id })
        }
      >
        <XMarkIcon className="w-5 h-5" />
      </button>
    </li>
  );

  function handleToggle() {
    dispatch({ type: "todos/toggled", payload: props.todo.id });
  }

  function handleColorPick(event) {
    dispatch({
      type: "todos/colorPicked",
      payload: { color: event.target.value, id: props.todo.id },
    });
  }
}

function ColorPicker({ color = "", onColorPicked }) {
  return (
    <select
      style={{ color }}
      onChange={onColorPicked}
      className="border-0 focus:ring-0"
    >
      <option></option>
      {initialColors.map((color) => (
        <option key={color}>{color}</option>
      ))}
    </select>
  );
}
