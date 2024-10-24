import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  return (
    <div className="book-show">
      {showEdit ? (
        <BookEdit book={book} onEdit={onEdit} setShowEdit={setShowEdit} />
      ) : (
        <h3>{book.title}</h3>
      )}
      <div className="actions">
        <button className="edit" onClick={() => setShowEdit(!showEdit)}>
          Edit
        </button>
        <button className="delete" onClick={() => onDelete(book.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
