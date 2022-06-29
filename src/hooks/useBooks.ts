import { useEffect, useState } from "react";

import { Book } from "../models/book";

const useBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch("http://localhost:4730/books");
      const result = await response.json();
      setBooks(result);
    };

    fetchBooks();
  }, []);

  return books;
};

export default useBooks;
