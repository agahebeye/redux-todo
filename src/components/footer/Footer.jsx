import { ActionButtons } from "./ActionButtons";
import { initialColors } from "../../data";
import { useDispatch, useSelector } from "react-redux";

export function Footer() {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.filters);

  return (
    <footer className="mt-8 text-xs flex justify-between">
      <ActionButtons />

      <div>
        <div className="font-bold text-gray-800">Filter by status</div>
        <div className="flex flex-col items-start space-y-2 pt-2">
          <StatusButton status={status} value="All" dispatch={dispatch} />
          <StatusButton status={status} value="Active" dispatch={dispatch} />
          <StatusButton status={status} value="Complete" dispatch={dispatch} />
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

export function StatusButton(props) {
  return (
    <button
      onClick={() => changeStatus(props.value)}
      className={`${
        props.status === props.value && "font-bold border-b-2 border-gray-400"
      }`}
    >
      {props.value}
    </button>
  );

  function changeStatus(value) {
    props.dispatch({ type: "filters/statusChanged", payload: value });
  }
}
