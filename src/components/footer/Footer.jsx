
import {ActionButtons} from './ActionButtons';
import { initialColors } from "../../data";

export function Footer() {

  return (
    <footer className="mt-8 text-xs flex justify-between">
      <ActionButtons />

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
            <button
              key={color}
              className="flex capitalize items-center space-x-2"
            >
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
