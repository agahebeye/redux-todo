import { useDispatch, useSelector } from "react-redux";

export function StatusFilters() {
  const { status } = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="font-bold text-gray-800">Filter by status</div>
      <div className="flex flex-col items-start space-y-2 pt-2">
        <StatusButton status={status} value="All" dispatch={dispatch} />
        <StatusButton status={status} value="Active" dispatch={dispatch} />
        <StatusButton status={status} value="Complete" dispatch={dispatch} />
      </div>
    </div>
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
