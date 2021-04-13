import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBin5Fill } from "react-icons/ri";

function Todo() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (todoText) => {
    let newTodo = {
      text: todoText,
      id: Math.floor(Math.random() * 1000000),
      isDOne: false,
    };
    let addTodosToState = [...todoList, newTodo];
    setTodoList(addTodosToState);
  };
  const deleteTodo = (todo) => {
    let filteredTodoList = todoList.filter((data) => {
      return data.id !== todo.id;
    });

    setTodoList(filteredTodoList);
  };

  return (
    <>
      <TodoForm addTodoCallback={addTodo}></TodoForm>
      <ul>
        {todoList.map((data) => {
          return (
            <div key={data.id}>
              <li>{data.text}</li>
              <GrEdit style={{ marginLeft: "10px" }}></GrEdit>
              <RiDeleteBin5Fill
                style={{ marginLeft: "10px" }}
                onClick={() => {
                  deleteTodo(data);
                }}
              ></RiDeleteBin5Fill>
            </div>
          );
        })}
      </ul>
    </>
  );
}

export default Todo;
