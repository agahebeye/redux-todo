export const loggerMiddleware = (store) => (next) => (action) => {
  console.log(`action: ${action.type} called.`);
  return next(action);
};
