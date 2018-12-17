import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShelfSelector from './ShelfSelector';
import noImage from '../img/no-image.png';

class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        allBooks: PropTypes.array.isRequired,
        moveToShelf: PropTypes.func.isRequired
    }

    render() {
        const { book, allBooks, moveToShelf } = this.props,
            bookTitle = book.title ? book.title : '';
        let bookCover = null;
            if (book.imageLinks && book.imageLinks.thumbnail) {
                bookCover = book.imageLinks.thumbnail;
            } else if (!book.imageLinks || book.imageLinks.thumbnail.length < 1) {
                bookCover = noImage;
            }

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