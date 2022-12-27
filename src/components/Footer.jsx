import { useSelector, useDispatch } from "react-redux";

import { availableColors } from "./filters/colors";
import { statusTypes } from "./filters/filtersReducer";

// const RemainingTodos = ({ count }) => {
//   const suffix = count === 1 ? "" : "s";

//   return (
//     <divodo-count">
//       <h5>Remaining Todos</h5>
//       <strong>{count}</strong> item{suffix} left
//     </div>
//   );
// };

// const StatusFilter = ({ value: status, onChange }) => {
//   const renderedFilters = Object.keys(statusTypes).map((key) => {
//     const value = statusTypes[key];
//     const handleClick = () => onChange(value);
//     constvalue === status ? "selected" : "";

//     return (
//       <li key={value}>
//         <buttonnClick={handleClick}>
//           {key}
//         </button>
//       </li>
//     );
//   });

//   return (
//     <divilters statusFilters">
//       <h5>Filter by statusTypes</h5>
//       <ul>{renderedFilters}</ul>
//     </div>
//   );
// };

// const ColorFilters = ({ value: colors, onChange }) => {
//   const renderedColors = availableColors.map((color) => {
//     const checked = colors.includes(color);
//     const handleChange = () => {
//       const changeType = checked ? "removed" : "added";
//       onChange(color, changeType);
//     };

//     return (
//       <label key={color}>
//         <input
//           type="checkbox"
//           name={color}
//           checked={checked}
//           onChange={handleChange}
//         />
//         <span
//          olor-block"
//           style={{
//             backgroundColor: color,
//           }}
//         ></span>
//         {color}
//       </label>
//     );
//   });

//   return (
//     <divilters colorFilters">
//       <h5>Filter by Color</h5>
//       <formolorSelection">{renderedColors}</form>
//     </div>
//   );
// };

export function Footer() {
  const dispatch = useDispatch();

  const todosRemaining = useSelector((state) => {
    const uncompletedTodos = state.todos.filter((todo) => !todo.completed);
    return uncompletedTodos.length;
  });

  const { colors } = useSelector((state) => state.filters);

  return (
    <footer>
      <div>
        <button onClick={() => dispatch({ type: "todos/markAllCompleted" })}>
          Mark All Completed
        </button>
        <button onClick={() => dispatch({ type: "clearCompleted" })}>
          Clear Completed
        </button>
      </div>

      <div>
        <strong>{todosRemaining}</strong> item(s) left
      </div>

      <div>
        <h5>Filter by status</h5>
        <ul>
          {Object.keys(statusTypes).map((key) => {
            const value = statusTypes[key];
            return (
              <li
                key={value}
                onClick={() =>
                  dispatch({ type: "filters/statusChanged", payload: value })
                }
              >
                {key}
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <h5>Filter by Color</h5>
        <form>
          {availableColors.map((color) => {
            const checked = colors.includes(color);
            return (
              <label key={color}>
                <input
                  type="checkbox"
                  name={color}
                  onChange={() =>
                    dispatch({
                      type: "filters/colorChanged",
                      payload: {
                        color,
                        changedType: checked ? "removed" : "added",
                      },
                    })
                  }
                />
                {color}
              </label>
            );
          })}
        </form>
      </div>
    </footer>
  );
}
