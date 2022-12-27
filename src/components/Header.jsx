import React, { useState } from "react";
import { useDispatch } from "react-redux";

export function Header() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => setText(e.target.value);

  const handleKeyDown = (e) => {
    const value = e.target.value.trim();
    if (e.key === "Enter" && value) {
      dispatch({ type: "todos/added", payload: value });
      setText("");
    }
  };

  return (
    <input
      type="text"
      placeholder="What needs to be done?"
      autoFocus={true}
      value={text}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
}
