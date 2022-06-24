import { useState } from "react";

// let number = 2;

// const useState = (initialValue: number) => {
//   const obj = {
//     value: initialValue,
//   }
//   const setValue = (newValue: number) => {
//     obj.value = newValue;
//   }
//   return [obj.value, setValue];
// }

const Add2: React.FC = () => {
  console.log("render");
  const [number, setNumber] = useState<number>(5); // number bekommt initialen Wert 5
  const [zahl, setZahl] = useState(10); // number bekommt initialen Wert 10

  // const state = useState(5);
  // const number = state[0]
  // const setNumber = state[1]

  return (
    <div style={{ padding: 10 }}>
      <button
        onClick={() => {
          setNumber(number + 2);
          setZahl(zahl + 10);
          console.log({ number });
        }}
      >
        Add 2
      </button>
      <div>Number: {number}</div>
      <div>Zahl: {zahl}</div>
    </div>
  );
};

export default Add2;
