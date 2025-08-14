import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <Todo key={index} title={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
