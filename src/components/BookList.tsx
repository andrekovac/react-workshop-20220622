import React, { useEffect } from "react";
import useBooks from "../hooks/useBooks";
import { Book } from "../models/book";
import BookListItem from "./BookListItem";

export const BookList: React.FC<{ onSuccess: (book: Book) => void }> = ({
  onSuccess,
}) => {
  const books = useBooks();

  useEffect(() => {
    onSuccess(books[0]);
  }, [books, onSuccess]);

  return (
    <>
      <h1>List of Books</h1>
      {books?.length > 0 ? (
        <ul>
          {books.map((book) => {
            return (
              <BookListItem
                key={book.isbn}
                book={book}
                onClick={() => {
                  alert(`Price of the book is ${book.price}`);
                }}
              />
            );
          })}
        </ul>
      ) : (
        <p>No books can be shown</p>
      )}
    </>
  );
};

export default BookList;
