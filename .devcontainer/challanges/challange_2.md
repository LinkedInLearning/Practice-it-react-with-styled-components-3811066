Challange 2 - Create Todo list React App

For this challange, you're going to create a new React App that renders a todo list dymanically.

Step 1. In the terminal, create a new react app called "todo list app"
- npx create-react-app todo-list-app

Step 2. Navigate to your new app and start the development server 
- cd todo-list-app
- npm start

Step 3. Delete the defult React content in the return of your App.js and create an array of at least three todo items.
example: const todos = ['Buy groceries', 'Finish homework', 'Go for a run'];

Step 4. Create a new component called "Todo.js". This component takes a prop called "title" which will will be rendered dynamically in the return of this component. Render the title as a list item. 

Step 5. Create a new component called TodoList.js. This component takes the "todos" from App.js as a prop and renders passes them to the Todo component as a title.
example - <Todo title= {todos[0]}/>
In the return, render a Todo component for each item in your "todos" array.

Step 6. Import TodoList into App.js and render this component in the return, passing the "todos" as a prop. 

**Hint**
Your final App.js should look something like this:

import React from 'react';
import TodoList from './TodoList';

const App = () => {
  const todos = ['Buy groceries', 'Finish homework', 'Go for a run'];

  return (
    <div>
      <h1>My Todo List</h1>
      <TodoList todos={todos} />
    </div>
  );
};

export default App;

