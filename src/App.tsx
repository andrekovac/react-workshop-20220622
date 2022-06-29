import { Link, Route, Switch } from "react-router-dom";
import Books from "./screens/Books";
import Playground from "./screens/Playground";
import Form from "./screens/Form";

import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <nav>
        <Link to="/playground">Playground</Link>
        <Link to="/books">Books</Link>
        <Link to="/form">Form</Link>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <p>Welcome</p>
          </Route>
          <Route path="/playground">
            <Playground />
          </Route>
          <Route path="/books">
            <Books />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
          <Route>
            <p>404 Fehler</p>
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default App;
