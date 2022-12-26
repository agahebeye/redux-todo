const filtersState = {
  status: "All",
  colors: [],
};

export function filtersSlice(state = filtersState, action) {
  switch (action.type) {
    case "filters/statusChanged":
      return {
        ...state,
        status: action.payload,
      };

    default:
      return state;
  }
}
