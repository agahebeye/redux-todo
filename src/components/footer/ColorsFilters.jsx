import { useDispatch, useSelector } from "react-redux";
import { initialColors } from "../../data";

export function ColorsFilters() {
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="font-bold text-gray-800">Filter by color</div>
      <div className="pt-2">
        {initialColors.map((color) => {
          const picked = filters.colors.includes(color);

          return (
            <button
              key={color}
              className={`flex capitalize items-center space-x-2 ${
                picked && "font-bold"
              }`}
              onClick={() => filterByColor(color, picked)}
            >
              <span
                style={{ backgroundColor: color }}
                className={`w-3 h-3`}
              ></span>
              <span>{color}</span>
            </button>
          );
        })}
      </div>
    </div>
  );

  function filterByColor(color, picked) {
    dispatch({
      type: "filters/colorPicked",
      payload: {
        color,
        picked,
      },
    });
  }
}
