export const statusTypes = {
  All: "all",
  Active: "active",
  Completed: "completed",
};

const initialState = {
  status: statusTypes.All,
  colors: [],
};

export function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case "filters/statusChanged":
      return {
        ...state,
        status: action.payload,
      };

    case "filters/colorChanged": {
      let { color, changedType } = action.payload;
      const { colors } = state;

      switch (changedType) {
        case "added": {
          if (colors.includes(color)) {
            return state;
          }

          return {
            ...state,
            colors: state.colors.concat(color),
          };
        }

        case "removed": {
          return {
            ...state,
            colors: state.colors.filter(
              (existingColor) => existingColor !== color
            ),
          };
        }
        default:
          return state;
      }
    }

    default:
      return state;
  }
}
