export function filtersReducer(state = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case "filters/statusChanged":
      return {
        ...state.filters,
        status: payload,
      };

    default:
      return state;
  }
}
