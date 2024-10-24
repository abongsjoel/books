import { useState } from "react";

function BookEdit({ book, onEdit, setShowEdit }) {
  const [title, setTitle] = useState(book.title);

  const onSubmit = (event) => {
    event.preventDefault();
    onEdit(book.id, title);
    setShowEdit(false);
  };

  return (
    <form className="book-edit" onSubmit={onSubmit}>
      <label>Title</label>
      <input
        className="input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
