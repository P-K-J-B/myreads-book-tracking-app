import React from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelves from './BookShelves'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
  state = { allBooks: [] };

  componentDidMount() {
    BooksAPI.getAll().then(response => this.setState({ allBooks: response }));
  }

  moveToShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then(response => {
      book.shelf = newShelf;
      this.setState(oldState => ({  
        allBooks: oldState.allBooks.filter(item => item.id !== book.id).concat(book)
      }));
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <BookShelves allBooks={this.state.allBooks} moveToShelf={this.moveToShelf}/>
            <div className="open-search">
              <Link to='/search-books'></Link>
            </div>
          </div>
        )}/>
        <Route path='/search-books' render={({ history }) => (
          <SearchBooks allBooks={this.state.allBooks} moveToShelf={this.moveToShelf}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp;