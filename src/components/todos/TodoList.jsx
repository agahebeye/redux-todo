import { useSelector } from "react-redux";
import { TodoListItem } from "./TodoListItem";
import { selectFilteredTodos } from "./todosReducer";

export function TodoList() {
  const todos = useSelector(selectFilteredTodos);
  const isLoading = useSelector((state) => state.todos.status);

  if (isLoading === "loading") {
    return <div>loading...</div>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} id={todo.id} />
      ))}
    </ul>
  );
}
