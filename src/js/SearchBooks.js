import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class SearchBooks extends Component {
    static propTypes = {
        allBooks: PropTypes.array.isRequired,
        moveToShelf: PropTypes.func.isRequired
    }

    state = {
        query: '',
        searchResults: [],
        noneFound: false
    }

    updateQuery = (queryText) => {
        this.setState({ query: queryText.trim() });
        if (queryText) {
            BooksAPI.search(queryText.trim()).then(results => {
                if (results.length > 0) {
                    this.setState({ searchResults: results, noneFound: false })
                } else {
                    this.setState({ searchResults: [], noneFound: true })
                }
            });
        } else this.setState({ searchResults: [], noneFound: false })
    }

    render() {
        const { allBooks, moveToShelf } = this.props;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={(queryText) => this.updateQuery(queryText.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    {this.state.searchResults.length > 0 && this.state.noneFound === false && (
                        <ol className="books-grid">
                            {this.state.searchResults.map(item => ( 
                                <Book
                                    book={item}
                                    key={item.id}
                                    allBooks={allBooks}
                                    moveToShelf={moveToShelf}
                                />
                            ))}
                        </ol>
                    )}
                    {this.state.noneFound && (
                        <p>No books were found</p>
                    )}
                </div>
            </div>
        )
    }
}

export default SearchBooks;