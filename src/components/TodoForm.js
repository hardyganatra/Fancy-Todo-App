import React, { useState, useRef, useEffect } from "react";

function TodoForm({ addTodoCallback, name, editedTodo, UpdateTodoCallback }) {
  const [input, setInput] = useState(name ? editedTodo.text : "");
  const Forminput = useRef(null);
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    // debugger;
    e.preventDefault();

    name ? UpdateTodoCallback(editedTodo, input) : addTodoCallback(input);
    setInput("");
    Forminput.current.focus();
    console.log("formvalue", Forminput.current.focus());
  };

  useEffect(() => {
    Forminput.current.focus();
  }, [input]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleInput}
          value={input}
          placeholder={name ? "Edit your Todo" : "Enter your Todo"}
          ref={Forminput}
        ></input>
        <button>{name ? "Edit your Todo" : "Add  your Todo"}</button>
      </form>
    </>
  );
}

export default TodoForm;
