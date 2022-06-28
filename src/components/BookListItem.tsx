import { Book } from "../models/book";

interface BookListItemProps {
  book: Book;
  onClick: () => void;
}

export const BookListItem: React.FC<BookListItemProps> = ({
  book,
  onClick,
}) => (
  <>
    <p
      style={{
        cursor: "pointer",
      }}
      onClick={onClick}
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
