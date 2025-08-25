// 
import { useState } from "react"; 
import "./book.css";

export default function Books() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [index, setIndex] = useState(0);

  const [books, setBooks] = useState([
    {
      id: 1,
      title: "THE SECRATE",
      author: "Djvndjvn",
    },
  ]);

  const addBook = () => {
    const newBook = {
      title: title,
      author: author,
    };
    setBooks([...books, newBook]);
  };

  function removeBook(index) {
    const temp = [...books];
    temp.splice(index, 1);
    setBooks(temp);
  }

  
  function updateBook(i) {
    setIndex(i);
    setTitle(books[index].title);
    setAuthor(books[index].author);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Book Name.."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author Name.."
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button className="AddBtn" onClick={addBook}>Add Book</button>
      <button
        onClick={() => {
          const temp = [...books];
          temp[index].title = title;
          temp[index].author = author;
          setBooks(temp);
        }}
      >
        Update Book
      </button>

      {books.map((book, i) => (
        <div key={i}>
          <p>
            {book.title} - {book.author}
            <button className="RemoveBook" onClick={() => removeBook(i)}>Delete</button>
            <button onClick={() => updateBook(i)}>Edit</button>
          </p>
        </div>
      ))}
    </div>
  );
}

