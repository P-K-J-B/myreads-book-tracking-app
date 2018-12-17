import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Shelf from './Shelf';

class BookShelves extends Component {
    static propTypes = {
        allBooks: PropTypes.array.isRequired,
        moveToShelf: PropTypes.func.isRequired
    }

    render() {
        const { allBooks, moveToShelf } = this.props,
        shelves = [
            {category: 'currentlyReading', title: 'Currently Reading'},
            {category: 'wantToRead', title: 'Want to Read'},
            {category: 'read', title: 'Read'}
        ];

        return (
            <div className="list-books-content">
                {shelves.map((shelf, index) => {
                    const onThisShelf = allBooks.filter(book => book.shelf === shelf.category)
                    return (
                        <div className="bookshelf" key={index}>
                            <h2 className="bookshelf-title">{shelf.title}</h2>
                            <div className="bookshelf-books">
                                <Shelf allBooks={onThisShelf} moveToShelf={moveToShelf}/>
                            </div>
                        </div>
                    );
                })}
            </div>
        )
    }
}

export default BookShelves