# To-Do List Component Challenge

## Solution code

```jsx
export const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <Todo key={index} title={todo} />
      ))}
    </ul>
  );
};
```

## Explanation

- The TodoList component receives a `todos` array as a prop
- Using `map()`, it iterates over the array and returns a `Todo` component for each item
- A `key` prop is added using the array index. While not ideal for large, mutable lists, it's acceptable for this static example

## Output example

If the `todos` prop is:

```javascript
["Buy groceries", "Finish homework", "Go for a run"];
```

Then the rendered HTML will be:

```html
<ul>
  <li>Buy groceries</li>
  <li>Finish homework</li>
  <li>Go for a run</li>
</ul>
```
