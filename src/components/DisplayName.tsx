import { Person } from "../models/person";

interface DisplayNameProps {
  person: Person;
  pet: { name: string };
}

/**
 * Eine React Komponente ist eine Funktion, die ein React Element zurückgibt.
 */
const DisplayName: React.FC<DisplayNameProps> = ({ person, pet }) => {
  return (
    <h3>
      Hello! Mein Name ist {person.name} (nicht {pet.name})
      {/* {age && ", my age: " + age} */}
      {person.age && `, my age: ${person.age}`}
    </h3>
  );
};

export default DisplayName;
