# To-Do List Component Challenge

In React, it's a best practice to render dynamic content using JavaScript's `map()` function instead of hardcoding elements.

This challenge focuses on updating a simple TodoList component to render its list items dynamically based on passed-in props.

## Objective

Update the TodoList component so it renders a list of to-dos using a `map()` function and accepts the list via props instead of hardcoding it.

## Original code

```jsx
export const TodoList = ({ todos }) => {
  const todos = ["Buy groceries", "Finish homework", "Go for a run"];

  return (
    <ul>
      <Todo title={todos[0]} />
      <Todo title={todos[1]} />
      <Todo title={todos[2]} />
    </ul>
  );
};
```

## Your task

Refactor the TodoList component to:

- Remove the hardcoded array
- Use the `todos` prop instead
- Render the list dynamically using `map()`
- Add a `key` prop to each rendered Todo
