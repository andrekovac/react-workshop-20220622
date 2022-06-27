import Add2 from "./components/Add2";
import Counter from "./components/Counter";
import DisplayName from "./components/DisplayName";
import SimpleName from "./components/SimpleName";

const App = () => {
  return (
    <>
      <Counter />
      <Add2 />
      <SimpleName>This is my text</SimpleName>
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
