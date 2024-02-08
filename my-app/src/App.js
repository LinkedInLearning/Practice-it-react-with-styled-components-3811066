import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Counter from "./components/solutions/challange_1";
import Parent from "./components/examples/Parent";
import ProductInfo from "./components/examples/ProductInfo";
import BookList from "./components/solutions/BookList";
import DynamicGrid from "./components/examples/DynamicGrid";
import GlobalStyles from "./components/examples/GlobalStyles";
import Home from "./components/examples/Home";
import About from "./components/examples/About";
import Contact from "./components/examples/Contact";

function App() {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  return (
    <div className="App">
      <div>
        <GlobalStyles />
        <h1>Global Styles Example</h1>
        <Counter />
        <Parent />
        <ProductInfo />
        <h1>Dynamic Grid Example</h1>
        <DynamicGrid items={items} />
        <div>
          <BookList />
        </div>
      </div>

      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
