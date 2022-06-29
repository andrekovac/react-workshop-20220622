import { useState } from "react";
import BookList from "../components/BookList";
import { Book } from "../models/book";

const Books: React.FC = () => {
  const [firstBook, setFirstBook] = useState<Book>();

  return (
    <>
      <BookList
        // callback to retrieve state from child component
        onSuccess={(book: Book) => {
          setFirstBook(book);
        }}
      />
      <p>Erstes Buch: {firstBook?.title}</p>
    </>
  );
};

export default Books;
