import { Book } from "../models/book";

interface BookListItemProps {
  book: Book;
}

export const BookListItem: React.FC<BookListItemProps> = ({ book }) => (
  <>
    <p
      style={{
        cursor: "pointer",
      }}
      onClick={() => {
        alert(`Price of the book is ${book.price}`);
      }}
    >
      {book.title}
    </p>

    <img width="100px" src={book.cover} alt="cover"></img>
    <span style={{ color: "red", fontStyle: "italic" }}>
      (Click on the title to see the price!)
    </span>
  </>
);

export default BookListItem;
