import { XMarkIcon } from "@heroicons/react/24/solid";

export function TodoListItem(props) {
  return (
    <li key={idx} className="mt-4 first-letter:uppercase">
      <input type="checkbox" name="" id="" />
      <label htmlFor="">{todo.text}</label>
      <XMarkIcon className="w-5 h-5" />
    </li>
  );
}
