import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShelfSelector from './ShelfSelector';

class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        allBooks: PropTypes.array.isRequired,
        moveToShelf: PropTypes.func.isRequired
    }

    render() {
        const { book, allBooks, moveToShelf } = this.props,
            bookCover = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : '',
            bookTitle = book.title ? book.title : '';

        return (
            <li>
                <div className="book">
                    <div className="book-top">
                    <div className="book-cover" style={{ backgroundImage: `url(${bookCover})` }}></div>
                    <ShelfSelector book={book} allBooks={allBooks} moveToShelf={moveToShelf}/>
                    </div>
                    <div className="book-title">{bookTitle}</div>
                    {book.authors && book.authors.map((author, i) => (
                        <div className="book-authors" key={i}>
                            {author}
                        </div>
                    ))}
                </div>
            </li>
        )
    }
}

export default Book