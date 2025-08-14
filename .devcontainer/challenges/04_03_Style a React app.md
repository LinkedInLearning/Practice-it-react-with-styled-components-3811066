# Styled Components Implementation

In modern React development, using styled-components is a powerful way to write scoped, maintainable CSS in JavaScript. This challenge focuses on transforming the basic layout of a book list into a clean, responsive, and visually appealing interface using styled-components.

## Objective

Style the existing BookList and BookDetails components using styled-components to create a card-based book list with responsive layout and interactive hover effects.

## What you'll learn

- How to define and use styled-components in a React project
- How to apply responsive layouts using CSS Grid
- How to nest styles and apply transitions and hover effects

## Requirements

You will implement four styled-components to replace the existing structure:

| StyledComponent | Purpose                              |
| --------------- | ------------------------------------ |
| Wrapper         | Container for the full layout        |
| Title           | Page and section headings            |
| Grid            | Grid layout for all book cards       |
| BookContainer   | Styles for each individual book card |

## Styling specifications

### Wrapper component

- Add padding: `20px`
- Set max width: `1200px`
- Center the container with margin: `0 auto`

### Title component

- Use color: `#333` for the main title
- Center-align the text
- Add margin-bottom: `30px` for spacing

### Grid component

- Use CSS Grid layout
- Create responsive columns with `repeat(auto-fill, minmax(250px, 1fr))`
- Add gap: `20px` between grid items

### BookContainer component

- White background (`#fff`)
- Rounded corners with border radius: `8px`
- Add padding: `20px`
- Include a subtle box shadow: `0 2px 4px rgba(0, 0, 0, 0.1)`
- Add a smooth transition effect for hover states
- On hover, lift the card slightly with `transform: translateY(-5px)`
- Style nested elements:
  - `h2` (book titles): color `#2c3e50`, margin-bottom: `10px`, font-size: `1.2rem`
  - `p` (author/year): color `#666`, margin: `5px 0`

## Implementation steps

1. Create the styled-components at the top of your file (after the imports).
2. Replace the existing JSX elements with your styled-components:
   - Replace `<div>` with `<Wrapper>`
   - Replace `<h1>` with `<Title>`
   - Replace `<div>` (grid) with `<Grid>`
   - Replace `<div>` (book container) with `<BookContainer>`

## Code structure

Your styled-components should be defined like this:

```jsx
const Wrapper = styled.div`
  // Your styles here
`;

const Title = styled.h1`
  // Your styles here
`;

const Grid = styled.div`
  // Your styles here
`;

const BookContainer = styled.div`
  // Your styles here

  h2 {
    // Nested styles for book titles
  }

  p {
    // Nested styles for author/year
  }
`;
```

## What you need to implement

1. Create all four styled-components with the specified styles.
2. Customize the existing HTML elements in the components with your styled-components.
3. Ensure responsive design that works on different screen sizes.
4. Add hover effects for better user interaction.

## Visual requirements

- Clean, modern card-based design
- Responsive grid layout
- Subtle shadows and hover effects
- Good color contrast for readability
- Professional typography hierarchy

## Tips

- Use the `&:hover` pseudo-selector for hover effects
- Remember to style nested elements within BookContainer
- Test the responsive behavior by resizing your browser window
- Ensure all text is readable with good contrast ratios
- Use CSS Grid for the responsive layout
