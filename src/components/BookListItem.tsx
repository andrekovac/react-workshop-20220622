import { Book } from "../models/book";

interface BookListItemProps {
  book: Book;
}

export const BookListItem: React.FC<BookListItemProps> = ({ book }) => (
  <>
    <p>{book.title}</p>
    <img width="100px" src={book.cover} alt="cover"></img>
  </>
);

export default BookListItem;
