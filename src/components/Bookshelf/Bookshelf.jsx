import { useState } from 'react';

const Bookshelf = () => {
  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' }
  ]);

  const [newBook, setNewBook] = useState({
    title: '',
    author: ''
  });

  const handleInputChange = (e) => {
    const name = e.target.name;     // "title" or "author"
    const value = e.target.value;

    setNewBook({
      ...newBook,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (newBook.title && newBook.author) {
      setBooks([...books, newBook]);

      setNewBook({ title: '', author: '' });
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3>Add Your Favorite Book</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label><br />
          <input
            type="text"
            name="title"
            value={newBook.title}
            onChange={handleInputChange}
          />
        </div>

        <div style={{ marginTop: '10px' }}>
          <label>Author:</label><br />
          <input
            type="text"
            name="author"
            value={newBook.author}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" style={{ marginTop: '10px' }}>Add Book</button>
      </form>

      <h3 style={{ marginTop: '20px' }}>Bookshelf:</h3>
      {books.map((book, index) => (
        <div key={index} style={{ border: '1px solid #ccc', marginTop: '10px', padding: '10px' }}>
          <strong>{book.title}</strong><br />
          <em>{book.author}</em>
        </div>
      ))}
    </div>
  );
};

export default Bookshelf;
