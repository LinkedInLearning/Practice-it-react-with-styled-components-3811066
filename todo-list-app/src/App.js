import React from "react";

const Todo = ({ title }) => {
  return <li>{title}</li>;
};

const TodoList = ({ todos }) => {
  const todos = ["Buy groceries", "Finish homework", "Go for a run"];

  // Write your answer here, and then test your code.
  // Your job is to implement the FindLargest() component.
  return (
    <ul>
      <Todo title={todos[0]} />
      <Todo title={todos[1]} />
      <Todo title={todos[2]} />
    </ul>
  );
};

function App() {
  return (
    <div>
      <TodoList />
    </div>
  );
}

/* Ignore and do not change the code below */
/**
 * Preview function
 * This function renders the `App` component and is used for visual rendering
 * during the challenge. Candidates do not need to modify this.
 */
export function Preview() {
  return <App />;
}
/* Ignore and do not change the code above */

// Export the main App component
export default App;
