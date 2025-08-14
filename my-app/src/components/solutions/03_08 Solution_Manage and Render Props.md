# Solution Code

## BookList Component

```jsx
export const BookList = ({ books }) => (
  <div>
    <h1>My Reading List</h1>
    <div>
      {books.map((book) => (
        <BookDetails key={book.id} book={book} />
      ))}
    </div>
  </div>
);
```

## BookDetails Component

```jsx
export const BookDetails = ({ book }) => (
  <div>
    <h2>{book.title}</h2>
    <p>Author: {book.author}</p>
    <p>Year: {book.year}</p>
  </div>
);
```

## Explanation

### BookList

- The BookList component receives an object with a `books` array
- It renders a title (`<h1>My Reading List</h1>`) followed by a list of BookDetails
- Each book is passed to the BookDetails component, and a unique `key` (`book.id`) is provided for each list item to ensure optimal rendering in React

### BookDetails

- Displays the title as an `<h2>` element
- Shows the author and year in properly formatted `<p>` tags

## Output example

Given the following input:

```javascript
const books = {
  books: [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
    },
  ],
};
```

The rendered HTML will be:

```html
<div>
  <h1>My Reading List</h1>
  <div>
    <div>
      <h2>The Great Gatsby</h2>
      <p>Author: F. Scott Fitzgerald</p>
      <p>Year: 1925</p>
    </div>
  </div>
</div>
```

## Tips

- Always use the `key` prop when mapping over arrays in React
- When passing data between components, prefer object props like `book` over individual fields—this improves flexibility and readability
- Keep your components small and focused: BookList handles rendering the list, while BookDetails focuses on displaying one item
