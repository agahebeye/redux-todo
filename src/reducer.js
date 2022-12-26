import todosReducer from './feautures/todos/todosSlice';
import filtersReducer from './features/filters/filtersReducer';

export function appReducer(state = {}, action) {
  return {
    todos: todosReducer(state.todos, action),
    filters: filtersReducer(state.filters, action),
  };
}
