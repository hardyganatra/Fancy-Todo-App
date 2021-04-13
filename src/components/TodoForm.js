import React, { useState } from "react";

function TodoForm({ addTodoCallback }) {
  const [input, setInput] = useState("");
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoCallback(input);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleInput}
          value={input}
          placeholder="Enter your Todo"
        ></input>
        <button>sumbit</button>
      </form>
    </>
  );
}

export default TodoForm;
