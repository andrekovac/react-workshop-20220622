import React from "react";
import { Book } from "../models/book";
import BookListItem from "./BookListItem";

interface BookListProps {
  books: Book[];
}

export const BookList: React.FC<BookListProps> = ({ books }) => {
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
