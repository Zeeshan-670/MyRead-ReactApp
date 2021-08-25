import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import Shelves from "./components/Shelves/Shelves";
import Search from "./components/Search/Search";
import SearchButton from "./components/SearchButton/SearchButton";
import * as BooksAPI from "./BooksAPI";
import { Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((res) => this.setState({ books: res }));
  }

  updateSearchPage = (state) => {
    this.setState({ showSearchPage: state });
  };

  onShelfUpdate = (book, shelfName) => {
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

    BooksAPI.update(book, shelfName);
  };

  render() {
    return (
      <div className='app'>
        <Route
          exact
          path='/search'
          render={() => <Search showSearchPage={this.updateSearchPage} />}
        />

        <Route
          exact
          path='/'
          render={() => (
            <Shelves
              Books={this.state.books}
              shelfChanger={this.onShelfUpdate}
            />
          )}
        />
        <SearchButton showSearchPage={this.updateSearchPage} />
      </div>
    );
  }
}

export default BooksApp;
