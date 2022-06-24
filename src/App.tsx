import SimpleName from "./components/SimpleName";

const meinName = "Andre";

/**
 * Eine React Komponente ist eine Funktion, die ein React Element zurückgibt.
 */
const HelloWorld: React.FC = () => {
  return <h1>Hello World {meinName}</h1>;
};

const App = () => {
  return (
    <>
      <SimpleName />
      <HelloWorld />
    </>
  );
};

export default App;
