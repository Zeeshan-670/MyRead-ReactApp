import React from "react";
import Book from "../Book/Book";
class Shelf extends React.Component {
  render() {
    const booksInShelf = this.props.books;
    return (
      <div className='bookshelf'>
        <h2 className='bookshelf-title'>{this.props.title}</h2>
        <div className='bookshelf-books'>
          <ol className='books-grid'>
            {booksInShelf.map((book) => (
              <li key={book.id}>
                <Book
                  book={book}
                  bookTitle={book.title}
                  bookAuthor={book.authors}
                  bookshelf={book.shelf}
                  Moveto={this.props.onShelfChange}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Shelf;
