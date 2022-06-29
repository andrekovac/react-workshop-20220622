import { useRef, useState } from "react";
import FormTitle from "./FormTitle";
import "./styles.css";

const MyForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const fileInput = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const foto = fileInput.current?.files?.[0];

    console.log("fileInput", foto?.name, foto?.size);

    alert(`Willkommen ${name} (${email})!`);
  };

  return (
    <>
      <FormTitle />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Bitte den Namen einfügen"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Deine Email Addresse"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <label htmlFor="fileUpload">Foto</label>
        <input
          id="fileUpload"
          type="file"
          placeholder="Bitte eine Foto hochladen"
          ref={fileInput}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default MyForm;
