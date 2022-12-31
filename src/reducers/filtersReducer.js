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

    case "filters/colorChanged": {
    }

    default:
      return state;
  }
}
