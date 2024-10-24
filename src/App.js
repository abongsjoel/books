import { useState } from "react";

import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);
  console.log({ books });

  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 999999), title },
    ];
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <BookList />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
