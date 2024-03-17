import logo from "./logo.svg";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  const todos = ["Buy groceries", "Finish homework", "Go for a run"];

  return (
    <div>
      <TodoList />
    </div>
  );
}

export default App;
