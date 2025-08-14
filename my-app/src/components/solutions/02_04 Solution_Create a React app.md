# Solution: Create a React App

## Create a new React app

In your terminal, run the following command to create a new app:

```bash
npx create-react-app todo-list-app
```

This sets up a new React project named `todo-list-app`.

## Start the development server

Navigate into your app and start the development server:

```bash
cd todo-list-app
npm start
```

You should see the default React homepage. Next, you’ll replace this with your custom to-do list.

## Set up `App.js`

Open `src/App.js` and remove the default JSX inside the return statement. Then, create a simple array of to-do items:

```jsx
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
```

## Create the `Todo` component

Inside the `src` folder, create a new file called `Todo.js`. This component will receive a `title` prop and render it as a list item:

```jsx
import React from "react";

const Todo = ({ title }) => {
  return <li>{title}</li>;
};

export default Todo;
```

## Create the `TodoList` component

Create a new file called `TodoList.js`. This component will receive the array of `todos` as props and render a `Todo` component for each item:

```jsx
import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos }) => {
  return (
    <ul>
      <Todo title={todos[0]} />
      <Todo title={todos[1]} />
      <Todo title={todos[2]} />
    </ul>
  );
};

export default TodoList;
```

## Final file structure

Your project should now look like this:

```
todo-list-app/
├── src/
│   ├── App.js
│   ├── Todo.js
│   ├── TodoList.js
│   └── index.js
```
