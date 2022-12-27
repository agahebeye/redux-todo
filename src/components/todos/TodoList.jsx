import { useSelector } from "react-redux";
import { TodoListItem } from "./TodoListItem";

export function TodoList() {
  const todos = useSelector((state) => state.todos);
  const todosElements = todos.map((todo) => (
    <TodoListItem key={todo.id} id={todo.id} />
  ));

  return <ul>{todosElements}</ul>;
}
