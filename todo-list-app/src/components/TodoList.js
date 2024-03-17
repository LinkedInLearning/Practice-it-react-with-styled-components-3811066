import React from "react";
import Todo from "./Todo";

const TodoList = ({todos}) => {
  return (
    <ul>
      <Todo title={todos[0]} />
      <Todo title={todos[1]} />
      <Todo title={todos[2]} />
    </ul>
  );
};

export default TodoList;
