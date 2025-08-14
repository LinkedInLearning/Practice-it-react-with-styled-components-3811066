import React from "react";
import TodoList from "./TodoList";

const App = () => {
  const todos = ["Buy groceries", "Finish homework", "Go for a run"];

  return (
    <div>
      <h1>My Todo List</h1>
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
