import { useEffect, useState } from "react";
import Add2 from "./components/Add2";
import Counter from "./components/Counter";
import DisplayName from "./components/DisplayName";
import SimpleName from "./components/SimpleName";

const names = ["Luisa", "Max", "Tom", "Claudia"];

const callback = (name: string) => {
  return <li key={name}>{name}</li>;
};

const App = () => {
  const [show, setShow] = useState(false);

  const [book, setBooks] = useState<any>();

  useEffect(() => {
    const fetchBook = async () => {
      const response = await fetch("http://localhost:4730/books/9780735649705");
      const result = await response.json();
      setBooks(result);
    };

    fetchBook();
  }, []);

  return (
    <>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show ? <Counter /> : null}
      <Add2 />
      <h2>Unordered list</h2>
      <ul>{names.map(callback)}</ul>
      <h2>Red list</h2>
      <ol>
        {names.map((name) => (
          <SimpleName key={name}>{name}</SimpleName>
        ))}
      </ol>
      <div>{book?.title}</div>
      <DisplayName
        person={{
          name: "Andre",
          age: 26,
        }}
        pet={{
          name: "Max",
        }}
      />
    </>
  );
};

export default App;
