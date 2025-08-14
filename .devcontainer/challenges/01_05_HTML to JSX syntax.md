# Rewrite HTML as JSX Syntax

JavaScript XML (**JSX**) is a syntax extension used with React that lets you write HTML-like code directly inside JavaScript. This exercise walks you through converting a basic HTML page into a React component using JSX syntax.

---

## Objective

Rebuild a simple counter app, originally written in HTML and JavaScript, using **React** and **JSX syntax**.

---

## Original HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Counter App</title>
    <style>
      body {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        margin: 0;
      }
    </style>
  </head>
  <body>
    <h1>Counter App</h1>
    <button id="incrementBtn">Increment</button>
    <p id="counterValue">Count: 0</p>

    <script>
      const incrementBtn = document.getElementById("incrementBtn");
      const counterValue = document.getElementById("counterValue");
      let count = 0;

      incrementBtn.addEventListener("click", () => {
        count++;
        counterValue.innerText = `Count: ${count}`;
      });
    </script>
  </body>
</html>
```

---

This code displays a heading, a button, and a paragraph showing the current
count. When the user clicks the button, the count increases. **Refactor** this
HTML and JS page into a modern React component using JSX and state management
with `useState`.
