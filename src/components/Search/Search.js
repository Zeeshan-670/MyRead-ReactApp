import React from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../../BooksAPI";
import Book from "../Book/Book";

class Search extends React.Component {
  state = {
    books: [],
    booksOnDisplay: [],
    query: "",
  };

  componentDidMount() {
    BooksAPI.getAll().then((allBooks) => {
      this.setState({
        booksOnDisplay: allBooks.filter((book) => book.shelf !== "none"),
      });
    });
  }

  updateQuery(query) {
    this.setState({ query });
  }
  onShelfUpdate = (book, shelfName) => {
    BooksAPI.update(book, shelfName);
    const { books } = this.state;
    const updateIndex = books.findIndex((b) => b.id === book.id);
    const updateBook = books[updateIndex];
    updateBook.shelf = shelfName;

    this.setState({
      books: [
        ...books.slice(0, updateIndex),
        updateBook,
        ...books.slice(updateIndex + 1),
      ],
    });
  };

  searchBooks(query) {
    const { booksOnDisplay } = this.state;
    this.updateQuery(query);
    if (query) {
      BooksAPI.search(query, 20).then((results) => {
        if (results && results.length > 0) {
          let searchResults = results;
          searchResults.map((book) => (book.shelf = "none"));
          booksOnDisplay.map((book) => {
            let updateIndex = searchResults.findIndex((s) => s.id === book.id);
            if (searchResults[updateIndex]) {
              searchResults[updateIndex].shelf = book.shelf;
            }
          });
          this.setState({ books: searchResults });
        } else {
          this.setState({ books: [] });
        }
      });
    } else {
      this.setState({ books: [] });
    }
  }

  render() {
    const { books, query } = this.state;

    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link to='/'>
            <button className='close-search'>Close</button>
          </Link>
          <div className='search-books-input-wrapper'>
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              type='text'
              placeholder='Search by title or author'
              onChange={(e) => this.searchBooks(e.target.value)}
            />
          </div>
        </div>
        <div className='search-books-results'>
          <ol className='books-grid'>
            {books.length > 0 ? (
              books.map((book, index) => (
                <Book key={index} book={book} Moveto={this.onShelfUpdate} />
              ))
            ) : query.length === 0 ? (
              <h2 style={{ color: "#fff" }}>Search Some Books</h2>
            ) : (
              <p> Result Not Found</p>
            )}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
