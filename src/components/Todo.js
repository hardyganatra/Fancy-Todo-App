import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { motion } from "framer-motion";

function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [editFormFlag, setEditFormFlag] = useState(false);
  const [editedTodo, seteditedTodo] = useState({
    text: "",
    id: null,
    isDOne: false,
  });

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

  const handleEdittodo = (todo) => {
    setEditFormFlag(true);
    seteditedTodo(todo);
  };

  const UpdateTodoCallback = (Editedtodo, EditedTodotext) => {
    let UpdatedList = todoList.map((data) => {
      if (Editedtodo.text === data.text) {
        let upDatedTodo = data;
        data.text = EditedTodotext;
        return upDatedTodo;
      } else {
        return data;
      }
    });
    setTodoList(UpdatedList);
    setEditFormFlag(false);
  };

  const handleTodoDone = (todo) => {
    let UpdatedList = todoList.map((data) => {
      if (todo.id === data.id) {
        let upDatedTodo = data;
        data.isDOne = !data.isDOne;
        return upDatedTodo;
      } else {
        return data;
      }
    });
    console.log(UpdatedList);
    setTodoList(UpdatedList);
  };

  return (
    <motion.div animate={{ scale: 1.1 }} className="todocontainer">
      <h3>Whats the plan Today</h3>
      <TodoForm addTodoCallback={addTodo}></TodoForm>
      {editFormFlag ? (
        <TodoForm
          name={"editedForm"}
          UpdateTodoCallback={UpdateTodoCallback}
          editedTodo={editedTodo}
        ></TodoForm>
      ) : (
        <ul>
          <>
            {todoList.map((data) => {
              return (
                <div key={data.id}>
                  <motion.li
                    className={data.isDOne ? "li-done" : null}
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.span
                      onClick={() => {
                        handleTodoDone(data);
                      }}
                    >
                      {data.text}
                    </motion.span>

                    <div className="list-container">
                      <GrEdit
                        style={{ marginLeft: "10px" }}
                        onClick={() => {
                          handleEdittodo(data);
                        }}
                      ></GrEdit>
                      <RiDeleteBin5Fill
                        style={{ marginLeft: "10px" }}
                        onClick={() => {
                          deleteTodo(data);
                        }}
                      ></RiDeleteBin5Fill>
                    </div>
                  </motion.li>
                </div>
              );
            })}
          </>
        </ul>
      )}
    </motion.div>
  );
}

export default Todo;
