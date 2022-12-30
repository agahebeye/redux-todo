import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoListItem } from "./components/TodoListItem";

export function App() {
  const [text, setText] = React.useState("");

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);

  return (
    <div className="p-10 max-w-[400px]">
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

      <div className="mt-8">
        <ul className="text-sm">
          {Object.values(todos).map((todo, idx) => {
            return <TodoListItem key={idx} id={todo.id} />;
          })}
        </ul>
      </div>
    </div>
  );

  function onKeyDown(event) {
    if (event.key === "Enter") {
      dispatch({ type: "todos/added", payload: text });
      setText("");
    }
  }
}
