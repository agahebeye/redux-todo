import { useSelector } from "react-redux";

export function Todolist() {
  const todos = useSelector((state) => state.todos);
  const todosElements = todos.map((todo) => <li key={todo.id}>{todo.text}</li>);

  return <ul>{todosElements}</ul>;
}
