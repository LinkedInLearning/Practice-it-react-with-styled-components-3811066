# Book List Challenge

React makes it easy to build modular and reusable components. In this challenge, you'll create two functional components to display a structured reading list. You'll learn how to pass props, render dynamic content using `map()`, and format output within a component.

## Objective

Complete the BookList and BookDetails components to render a dynamic list of book information.

## Requirements

### BookList component

The BookList component should:

- Accept a `books` prop (an object containing a books array)
- Display a heading: "My Reading List"
- Render each book using the BookDetails component
- Use the `key` prop when rendering lists

### BookDetails component

The BookDetails component should:

- Accept a single book object via props
- Display the book's title inside a heading
- Display the book's author and year formatted as:
  - "Author: [author name]"
  - "Year: [year]"

## Data structure

The prop passed to the BookList component looks like this:

```json
{
  "books": [
    {
      "id": 1,
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "year": 1925
    },
    {
      "id": 2,
      "title": "1984",
      "author": "George Orwell",
      "year": 1949
    }
  ]
}
```

## Tips

- Always use the `key` prop when mapping over arrays in React
- When passing data between components, prefer object props like `book` over individual fields—this improves flexibility and readability
- Keep your components small and focused: BookList handles rendering the list, while BookDetails focuses on displaying one item
