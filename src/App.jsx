import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoListItem } from "./components/TodoListItem";
import { Footer } from "./components/footer/Footer";
import { selectTodos } from "./reducers/todosReducer";

export function App() {
  const [text, setText] = React.useState("");

  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  return (
    <div className="p-10 max-w-[600px]">
      <div>
        <input
          type="text"
          value={text}
          className="text-sm py-3 w-full"
          placeholder="Type your todo..."
          onChange={(event) => setText(event.target.value)}
          onKeyDown={onKeyDown}
        />
      </div>

      {todos.length > 0 && (
        <div className="mt-4 text-xs">
          <strong>{todos.length}</strong> todo(s) left.
        </div>
      )}

      <div className="mt-8">
        <ul className="text-sm">
          {todos.map((todo, idx) => {
            return <TodoListItem key={idx} todo={todo} />;
          })}
        </ul>
      </div>

      {todos.length > 0 && <Footer />}
    </div>
  );

  function onKeyDown(event) {
    if (event.key === "Enter") {
      dispatch({ type: "todos/added", payload: text });
      setText("");
    }
  }
}
