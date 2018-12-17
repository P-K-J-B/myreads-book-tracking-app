import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class Shelf extends Component {
    static propTypes = {
        allBooks: PropTypes.array.isRequired,
        moveToShelf: PropTypes.func.isRequired
    }

    render() {
        const { allBooks, moveToShelf } = this.props
        return (
            <ol className="books-grid">
                {allBooks.map(item => ( 
                    <Book
                        book={item}
                        key={item.id}
                        allBooks={allBooks}
                        moveToShelf={moveToShelf}
                    />
                ))}
            </ol>
        )
    }
}

export default Shelf