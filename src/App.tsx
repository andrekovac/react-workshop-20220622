import { useEffect, useState } from "react";

import BookList from "./components/BookList";
import { Book } from "./models/book";

const App: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch("http://localhost:4730/books");
      const result = await response.json();
      setBooks(result);
    };

    fetchBooks();
  }, []);

  return <BookList books={books} />;
};

export default App;
