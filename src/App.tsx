import Add2 from "./components/Add2";
import Counter from "./components/Counter";
import SimpleName from "./components/SimpleName";
import { Person } from "./models/person";

interface DisplayNameProps {
  person: Person;
  pet: { name: string };
}

/**
 * Eine React Komponente ist eine Funktion, die ein React Element zurückgibt.
 */
const DisplayName: React.FC<DisplayNameProps> = ({ person, pet }) => {
  // const { name, age } = person;
  // const {
  //   person: { name: personName, age },
  //   pet: { name: petName },
  // } = props;

  return (
    <h1>
      Hello! Mein Name ist {person.name} (nicht {pet.name})
      {/* {age && ", my age: " + age} */}
      {person.age && `, my age: ${person.age}`}
    </h1>
  );
};

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
