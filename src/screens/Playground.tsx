import { useState } from "react";
import Add2 from "../components/Add2";
import Counter from "../components/Counter";
import DisplayName from "../components/DisplayName";
import SimpleName from "../components/SimpleName";

const names = ["Luisa", "Max", "Tom", "Claudia"];

const callback = (name: string) => {
  return <li key={name}>{name}</li>;
};

const Playground: React.FC = () => {
  const [show, setShow] = useState(false);

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

export default Playground;
