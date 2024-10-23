import { useState } from "react";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmt = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={handleSubmt}>
        <label>Title</label>
        <input value={title} onChange={handleChange} />
        <button>Create!</button>
      </form>
    </div>
  );
}

export default BookCreate;
