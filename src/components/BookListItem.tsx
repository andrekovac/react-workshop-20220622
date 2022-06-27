import { Book } from "../models/book";

interface BookListItemProps {
  book: Book;
}

export const BookListItem: React.FC<BookListItemProps> = ({ book }) => (
  <>
    <p>{book.title}</p>

    <img width="100px" src={book.cover} alt="cover"></img>
    <span style={{ color: "red", fontStyle: "italic" }}>
      (only {book.price}) BUY NOW!
    </span>
  </>
);

export default BookListItem;
