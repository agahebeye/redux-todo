import { useSelector } from "react-redux";
import { TodoListItem } from "./TodoListItem";
import { selectTodoIds, selectTodos } from "./todosReducer";

export function TodoList() {
  const todos = useSelector(selectTodos);
  const todoIds = useSelector(selectTodoIds);

  const todosElements = todos.map((todo) => (
    <TodoListItem key={todo.id} id={todo.id} />
  ));

  return <ul>{todosElements}</ul>;
}
