import { useDispatch } from "react-redux";
import { XMarkIcon } from "@heroicons/react/24/solid";

export function TodoListItem(props) {
  const dispatch = useDispatch();

  return (
    <li className="mt-4 flex items-center">
      <input type="checkbox" name="" id="" />
      <label htmlFor="" className="mr-auto ml-2 first-letter:uppercase">
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
