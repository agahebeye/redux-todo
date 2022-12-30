import { useDispatch } from "react-redux";

export function ActionButtons() {
  const dispatch = useDispatch();

  const buttonClassName = `
    text-white bg-gray-500 font-medium text-[10px] tracking-wider py-2 px-5 block uppercase
    focus:ring-2 focus:ring-gray-500 focus:ring-offset-1
    `;

  return (
    <div className="space-y-2">
      <button
        onClick={() => dispatch({type: "todos/completeAll"})}
        className={buttonClassName}
      >
        Complete All
      </button>

      <button
        onClick={() => dispatch({type: "todos/clearAll"})}
        className={buttonClassName}
      >
        Clear All
      </button>
    </div>
  );
}
