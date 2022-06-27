import { useEffect, useState } from "react";

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
  const [number, setNumber] = useState<number>(5); // initialer Wert 5
  const [zahl, setZahl] = useState(10); // initialer Wert 10

  useEffect(() => {
    console.log("number changed!");
  }, [number]);

  const zahl3 = number * 2; // derived values

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
      <div>Zahl 3: {zahl3}</div>
    </div>
  );
};

export default Add2;
