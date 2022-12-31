const initialState = { status: "All", colors: [] };

export function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case "filters/statusChanged": {
      console.log(action.payload);

      return {
        ...state,
        status: action.payload,
      };
    }

    case "filters/colorPicked": {
      const { color, picked } = action.payload;
      const colors =
        picked === true
          ? state.colors.filter((c) => c !== color)
          : [...state.colors, color];

      return {
        ...state,
        colors,
      };
    }

    default:
      return state;
  }
}
