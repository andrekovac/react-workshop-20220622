import Add2 from "./components/Add2";
import Counter from "./components/Counter";
import SimpleName from "./components/SimpleName";

const meinName = "Andre";

/**
 * Eine React Komponente ist eine Funktion, die ein React Element zurückgibt.
 */
const HelloWorld: React.FC = () => {
  return <h1>Hello! Mein Name ist {meinName}</h1>;
};

const App = () => {
  return (
    <>
      <Counter />
      <Add2 />
      <SimpleName />
      <HelloWorld />
    </>
  );
};

export default App;
