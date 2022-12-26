const initialState = {
  filters: {
    status: 'All',
    colors: [],
  },
};

export function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case 'filters/statusChanged': {
      return {
        ...state,
        filters: {
          ...state.filters,
          status: action.payload,
        },
      };
    }

    default:
      return state;
  }
}
