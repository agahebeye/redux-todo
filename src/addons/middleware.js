export function loggerMiddleware(store) {
  return function dispatch(next) {
    return function handleAction(action) {
      console.log("dispatch", action);
      return next(action);
    };
  };
}
