import { useDispatch } from "react-redux";
import { XMarkIcon } from "@heroicons/react/24/solid";

export function TodoListItem(props) {
  const dispatch = useDispatch();

  return (
    <li className="mt-4 flex items-center">
      <input
        type="checkbox"
        id="text"
        onClick={() =>
          dispatch({ type: "todos/toggled", payload: props.todo.id })
        }
      />
      <label htmlFor="text" className="mr-auto ml-2 first-letter:uppercase">
        {props.todo.text}
      </label>
      <button
        onClick={() =>
          dispatch({ type: "todos/deleted", payload: props.todo.id })
        }
      >
        <XMarkIcon className="w-5 h-5" />
      </button>
    </li>
  );
}
