export const thunkMiddleware = (store) => (next) => (action) => {
  console.log(`action: ${action.type} called.`);
  if (typeof action === "function") {
    return action(store.dispatch, store.getState);
  }
  return next(action);
};
