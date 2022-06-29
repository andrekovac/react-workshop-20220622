import { Link, Route } from "react-router-dom";
import Books from "./screens/Books";
import Playground from "./screens/Playground";

import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <nav>
        <Link to="/playground">Playground</Link>
        <Link to="/books">Books</Link>
      </nav>
      <main>
        <Route path="/playground">
          <Playground />
        </Route>
        <Route path="/books">
          <Books />
        </Route>
      </main>
    </>
  );
};

export default App;
