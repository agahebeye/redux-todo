import { useSelector } from "react-redux";

import { initialColors } from "../data";
import { selectTodos } from "../reducers/todosReducer";

export function Footer() {
  const todos = useSelector(selectTodos);

  return (
    <footer className="mt-8 text-xs flex justify-between">
      <div className="space-y-2">
        <button className="text-white bg-gray-500 font-medium text-[10px] tracking-wider py-2 px-5 block uppercase">
          Complete All
        </button>
        <button className="text-white bg-gray-500 font-medium text-[10px] tracking-wider py-2 px-5 block uppercase">
          Clear All
        </button>
      </div>

      <div>
        <div className="font-bold text-gray-800">Filter by status</div>
        <div className="flex flex-col items-start space-y-2 pt-2">
          <button>All</button>
          <button>Active</button>
          <button>Complete</button>
        </div>
      </div>

      <div>
        <div className="font-bold text-gray-800">Filter by color</div>
        <div className="pt-2">
          {initialColors.map((color) => (
            <button key={color} className="flex items-center space-x-2">
              <span
                style={{ backgroundColor: color }}
                className="w-3 h-3"
              ></span>
              <span>{color}</span>
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
